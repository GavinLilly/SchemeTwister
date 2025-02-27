import {
  EMPTY_STORED_SETUP,
  StoredSetupsService,
} from '@schemetwister/web-app/feature-setup-store';
import { WebAppSharedModule } from '@schemetwister/web-app/shared';
import { MockBuilder, MockRender } from 'ng-mocks';

import { LatestSetupsStore } from './latest-setups.store';
import { WebAppFeatureViewModule } from './web-app-feature-view.module';

describe('LatestSetupsStore', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsStore, [
      WebAppFeatureViewModule,
      WebAppSharedModule,
    ]).mock(StoredSetupsService, {
      getLatestSetups: () => Promise.resolve([EMPTY_STORED_SETUP]),
    })
  );

  it('should be created', () => {
    const fixture = MockRender(LatestSetupsStore);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
