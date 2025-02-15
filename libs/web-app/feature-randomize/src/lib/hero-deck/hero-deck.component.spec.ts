import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';

import { HeroDeckComponent } from './hero-deck.component';

describe('HeroDeckComponent', () => {
  beforeEach(() =>
    MockBuilder(HeroDeckComponent)
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
      .mock(NgbAccordionModule)
      .mock(FontAwesomeModule)
  );

  it('should create', () => {
    const fixture = MockRender(HeroDeckComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
