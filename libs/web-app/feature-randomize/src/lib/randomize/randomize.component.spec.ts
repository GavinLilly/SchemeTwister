import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { MockBuilder, MockRender } from 'ng-mocks';

import { RandomizeComponent } from './randomize.component';

describe('RandomizeComponent', () => {
  beforeEach(() =>
    MockBuilder(RandomizeComponent)
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
  );

  it('should create', () => {
    const fixture = MockRender(RandomizeComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
