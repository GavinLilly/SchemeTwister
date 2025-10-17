import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { MastermindCardComponent } from './mastermind-card.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('MastermindCardComponent', () => {
  beforeEach(() =>
    MockBuilder(MastermindCardComponent)
      .replace(FontAwesomeModule, FontAwesomeTestingModule)
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
    const fixture = MockRender(MastermindCardComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
