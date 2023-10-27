import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { WebAppSharedModule } from '@schemetwister/web-app/shared';
import { MockBuilder, MockRender } from 'ng-mocks';

import { WebAppFeatureRandomizeModule } from '../../web-app-feature-randomize.module';

import { GameSetupEffects } from './game-setup.effects';

describe('GameSetupEffects', () => {
  beforeEach(() =>
    MockBuilder(
      [GameSetupEffects, StoreModule.forRoot({}), EffectsModule.forRoot()],
      [WebAppFeatureRandomizeModule]
    )
      .keep(StoreFeatureModule)
      .keep(EffectsFeatureModule)
  );

  it('should be created', () => {
    const fixture = MockRender(GameSetupEffects);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
