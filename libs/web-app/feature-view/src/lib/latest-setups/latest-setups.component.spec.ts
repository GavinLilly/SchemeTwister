import { EMPTY_STORED_SETUP } from '@schemetwister/web-app/feature-setup-store';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { LatestSetupsComponent } from './latest-setups.component';
import { LatestSetupsStore } from '../latest-setups.store';
import { of } from 'rxjs';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { marvelSeries } from '@schemetwister/series-marvel';

describe('LatestSetupsComponent', () => {
  beforeEach(() =>
    MockBuilder(LatestSetupsComponent)
      .mock(LatestSetupsStore, {
        setups$: of([EMPTY_STORED_SETUP]),
      })
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should create', () => {
    const fixture = MockRender(LatestSetupsComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
