import { InjectionToken } from '@angular/core';
import { ISeries } from '@schemetwister/libtwister';

export const SERIES_REGISTER_TOKEN = new InjectionToken<ISeries[]>(
  'SERIES_REGISTER'
);
