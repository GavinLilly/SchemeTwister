import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { SchemeCardComponent } from './scheme-card.component';

describe('SchemeCardComponent', () => {
  beforeEach(() =>
    MockBuilder(SchemeCardComponent)
      .provide(
        provideMockStore({
          initialState: {
            gameSetup: {
              gameSetup: GameSetup.empty(),
            },
            numPlayers: 2,
          },
        })
      )
      .provide(MockProvider(SERIES_REGISTER_TOKEN, [marvelSeries]))
  );

  it('should create', () => {
    const fixture = MockRender(SchemeCardComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
