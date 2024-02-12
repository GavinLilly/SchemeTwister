import 'jest-preset-angular/setup-jest';
import { TextDecoder, TextEncoder } from 'node:util';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// eslint-disable-next-line @typescript-eslint/naming-convention
Object.assign(global, { TextDecoder, TextEncoder });

getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: false } }
);
