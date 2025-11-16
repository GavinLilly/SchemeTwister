import { marvelSeries } from '@schemetwister/series-marvel';
import {
  EMPTY_STORED_SETUP,
  StoredSetupsService,
} from '@schemetwister/web-app/feature-setup-store';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { LatestSetupsComponent } from './latest-setups.component';

describe('LatestSetupsComponent', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsComponent)
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
