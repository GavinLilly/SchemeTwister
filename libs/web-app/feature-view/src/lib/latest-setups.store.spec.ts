import {
  EMPTY_STORED_SETUP,
  StoredSetupsService,
} from '@schemetwister/web-app/feature-setup-store';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { firstValueFrom } from 'rxjs';

import { LatestSetupsStore } from './latest-setups.store';

describe('LatestSetupsStore', () => {
  MockInstance.scope();
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest
      .spyOn(console, 'error')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {
        // NOOP
      });
    return MockBuilder(LatestSetupsStore).mock(StoredSetupsService, {
      getLatestSetups: () => Promise.resolve([EMPTY_STORED_SETUP]),
    });
  });

  afterEach(() => {
    // Restore the original console.error function after each test
    logSpy.mockRestore();
  });

  it('should be created', () => {
    const fixture = MockRender(LatestSetupsStore);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should return a setup', () => {
    const fixture = MockRender(LatestSetupsStore);
    expect(
      firstValueFrom(fixture.point.componentInstance.setups$)
    ).resolves.toEqual(EMPTY_STORED_SETUP);
  });

  it('should log the error to console', () => {
    MockInstance(
      StoredSetupsService,
      'getLatestSetups',
      jest.fn().mockRejectedValueOnce(new Error('FAILURE'))
    );

    const fixture = MockRender(LatestSetupsStore);
    const instance = fixture.point.componentInstance;
    instance.setups$.subscribe(() => {
      expect(logSpy).toHaveBeenCalledWith(
        'Error while getting latest setups from Firebase'
      );
    });
  });
});
