import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { MastermindCardComponent } from './mastermind-card.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
// import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
// import { WebAppUiModule } from '@schemetwister/web-app/ui';

describe('MastermindCardComponent', () => {
  beforeEach(() =>
    MockBuilder(MastermindCardComponent)
      // .mock(WebAppUiModule)
      .keep(FontAwesomeTestingModule)
      // .mock(FontAwesomeModule)
      // .mock(NgbAccordionModule)
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
