import { marvelSeries } from '@schemetwister/schemetwister-series-marvel';
import {
  SERIES_REGISTER_TOKEN,
  StoredSetupsService,
  WebAppSharedModule,
} from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { WebAppFeatureHomeModule } from '../web-app-feature-home.module';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  beforeEach(() =>
    MockBuilder(HomePageComponent, [
      WebAppFeatureHomeModule,
      WebAppSharedModule,
    ])
      .mock(StoredSetupsService)
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should create', () => {
    const fixture = MockRender(HomePageComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
