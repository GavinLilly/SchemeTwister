import {
  EMPTY_STORED_SETUP,
  StoredSetupsService,
  WebAppSharedModule,
} from '@schemetwister/web-app/shared';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';

import { WebAppFeatureViewModule } from '../web-app-feature-view.module';

import { LatestSetupsComponent } from './latest-setups.component';

describe('LatestSetupsComponent', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsComponent, [
      WebAppFeatureViewModule,
      WebAppSharedModule,
    ]).mock(StoredSetupsService, {
      getLatestSetups: () => of([EMPTY_STORED_SETUP]),
    })
  );

  it('should create', () => {
    const fixture = MockRender(LatestSetupsComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
