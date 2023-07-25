import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MockBuilder, MockRender } from 'ng-mocks';

import { WebAppFeatureRandomizeModule } from '../../web-app-feature-randomize.module';

import { GameSetsEffects } from './game-sets.effects';

describe('GameSetsEffects', () => {
  beforeEach(() =>
    MockBuilder(
      [GameSetsEffects, StoreModule.forRoot({}), EffectsModule.forRoot()],
      WebAppFeatureRandomizeModule
    )
  );

  it('should be created', () => {
    const fixture = MockRender(GameSetsEffects);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
