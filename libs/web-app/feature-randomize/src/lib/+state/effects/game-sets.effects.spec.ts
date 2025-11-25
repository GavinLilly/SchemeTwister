import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { GameSetsEffects } from './game-sets.effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

describe('GameSetsEffects', () => {
  beforeEach(() =>
    MockBuilder([GameSetsEffects])
      .provide(provideMockStore({}))
      .provide(provideMockActions(() => new Observable<Action>()))
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should be created', () => {
    const fixture = MockRender(GameSetsEffects);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
