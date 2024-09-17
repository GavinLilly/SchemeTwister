import { marvelSeries } from '@schemetwister/series-marvel';
import {
  EMPTY_STORED_SETUP,
  SERIES_REGISTER_TOKEN,
  StoredSetupsService,
  WebAppSharedModule,
} from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { WebAppFeatureViewModule } from '../web-app-feature-view.module';

import { LatestSetupsComponent } from './latest-setups.component';

describe('LatestSetupsComponent', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsComponent, [
      WebAppFeatureViewModule,
      WebAppSharedModule,
    ])
      .mock(StoredSetupsService, {
        getLatestSetups: () => Promise.resolve([EMPTY_STORED_SETUP]),
      })
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should create', () => {
    const fixture = MockRender(LatestSetupsComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
