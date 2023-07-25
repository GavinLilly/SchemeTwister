import {
  EMPTY_STORED_SETUP,
  StoredSetupsService,
  WebAppSharedModule,
} from '@schemetwister/web-app/shared';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';

import { LatestSetupsStore } from './latest-setups.store';
import { WebAppFeatureViewModule } from './web-app-feature-view.module';

describe('LatestSetupsStore', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsStore, [
      WebAppFeatureViewModule,
      WebAppSharedModule,
    ]).mock(StoredSetupsService, {
      getLatestSetups: () => of([EMPTY_STORED_SETUP]),
    })
  );

  it('should be created', () => {
    const fixture = MockRender(LatestSetupsStore);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
