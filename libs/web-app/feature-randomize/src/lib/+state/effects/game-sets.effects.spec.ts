import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { WebAppFeatureRandomizeModule } from '../../web-app-feature-randomize.module';

import { GameSetsEffects } from './game-sets.effects';

describe('GameSetsEffects', () => {
  beforeEach(() =>
    MockBuilder(
      [
        GameSetsEffects,
        // providing root tools
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
      ],
      [WebAppFeatureRandomizeModule]
    )
      .keep(StoreFeatureModule)
      .keep(EffectsFeatureModule)
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should be created', () => {
    const fixture = MockRender(GameSetsEffects);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
