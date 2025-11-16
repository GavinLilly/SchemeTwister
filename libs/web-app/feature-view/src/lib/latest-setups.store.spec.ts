import {
  EMPTY_STORED_SETUP,
  StoredSetupsService,
} from '@schemetwister/web-app/feature-setup-store';
import { MockBuilder, MockRender } from 'ng-mocks';

import { LatestSetupsStore } from './latest-setups.store';

describe('LatestSetupsStore', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsStore).mock(StoredSetupsService, {
      getLatestSetups: () => Promise.resolve([EMPTY_STORED_SETUP]),
    })
  );

  it('should be created', () => {
    const fixture = MockRender(LatestSetupsStore);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
