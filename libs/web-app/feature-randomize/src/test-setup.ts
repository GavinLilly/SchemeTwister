import 'jest-preset-angular/setup-jest';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { ngMocks } from 'ng-mocks';

ngMocks.autoSpy('jest');

getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: false } }
);
