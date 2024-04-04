import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { marvelSeries } from '@schemetwister/schemetwister-series-marvel';
import {
  SERIES_REGISTER_TOKEN,
  StoredSetupsService,
} from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { WebAppFeatureRandomizeModule } from '../../web-app-feature-randomize.module';

import { GameSetupEffects } from './game-setup.effects';

describe('GameSetupEffects', () => {
  beforeEach(() =>
    MockBuilder(
      [
        GameSetupEffects,
        // providing root tools
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
      ],
      WebAppFeatureRandomizeModule
    )
      .keep(StoreFeatureModule)
      .keep(EffectsFeatureModule)
      .mock(StoredSetupsService)
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should be created', () => {
    const fixture = MockRender(GameSetupEffects);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
