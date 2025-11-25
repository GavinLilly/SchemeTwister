import { Action } from '@ngrx/store';
import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { GameSetupEffects } from './game-setup.effects';
import { StoredSetupsService } from '@schemetwister/web-app/feature-setup-store';

describe('GameSetupEffects', () => {
  beforeEach(() =>
    MockBuilder(GameSetupEffects)
      .mock(StoredSetupsService)
      .provide(provideMockStore({}))
      .provide(provideMockActions(() => new Observable<Action>()))
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should be created', () => {
    const fixture = MockRender(GameSetupEffects);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
