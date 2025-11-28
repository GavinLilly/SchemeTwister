import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { marvelSeries } from '@schemetwister/series-marvel';
import { StoredSetupsService } from '@schemetwister/web-app/feature-setup-store';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { Observable } from 'rxjs';

import { GameSetupEffects } from './game-setup.effects';


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
