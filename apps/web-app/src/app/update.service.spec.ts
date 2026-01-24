import { DOCUMENT } from '@angular/common';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { MockBuilder, ngMocks } from 'ng-mocks';
import { Subject } from 'rxjs';

import { UpdateService } from './update.service';

describe('UpdateService', () => {
  let versionUpdates$: Subject<VersionEvent>;
  let reloadSpy: jest.Mock;
  let logSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    versionUpdates$ = new Subject<VersionEvent>();
    reloadSpy = jest.fn();

    logSpy = jest
      .spyOn(console, 'log')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {
        // NOOP
      });

    errorSpy = jest
      .spyOn(console, 'error')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {
        // NOOP
      });

    return MockBuilder(UpdateService)
      .mock(SwUpdate, {
        isEnabled: true,
        versionUpdates: versionUpdates$.asObservable(),
      })
      .provide({
        provide: DOCUMENT,
        useValue: {
          location: {
            reload: reloadSpy,
          },
        },
      });
  });

  afterEach(() => {
    // Restore the original console.error function after each test
    logSpy.mockRestore();
  });

  it('should log initialization message when updates are enabled', () => {
    // Instantiating triggers the constructor logic
    ngMocks.findInstance(UpdateService);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('Updates enabled')
    );
  });

  it('should log awhen a new version is available', () => {
    ngMocks.findInstance(UpdateService);

    versionUpdates$.next({
      type: 'VERSION_DETECTED',
      version: { hash: 'v0' },
    });

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('Downloading new app version: v0')
    );
  });

  it('should reload the page when a new version is ready', () => {
    ngMocks.findInstance(UpdateService);

    // Emit the VERSION_READY event
    versionUpdates$.next({
      type: 'VERSION_READY',
      currentVersion: { hash: 'v1' },
      latestVersion: { hash: 'v2' },
    });

    expect(logSpy).toHaveBeenCalledWith('Reloading now...');
    expect(reloadSpy).toHaveBeenCalled();
  });

  it('should log an error message when installation fails', () => {
    ngMocks.findInstance(UpdateService);

    versionUpdates$.next({
      type: 'VERSION_INSTALLATION_FAILED',
      version: { hash: 'err-123' },
      error: 'Network Error',
    });

    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "Failed to install app version 'err-123': Network Error"
      )
    );
  });
});
