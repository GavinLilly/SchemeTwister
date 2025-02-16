import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { WebAppUiModule } from '@schemetwister/web-app/ui';
import { MockBuilder, MockRender } from 'ng-mocks';

import { ReplacePipe } from '../replace.pipe';

import { RandomizeComponent } from './randomize.component';

describe('RandomizeComponent', () => {
  beforeEach(() =>
    MockBuilder(RandomizeComponent)
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
      .provide(RandomizeComponent)
      .provide(ReplacePipe)
      .mock(FormsModule)
      .mock(WebAppUiModule)
      .mock(FontAwesomeModule)
      .mock(NgbModalModule)
      .mock(NgbAccordionModule)
  );

  it('should create', () => {
    const fixture = MockRender(RandomizeComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
