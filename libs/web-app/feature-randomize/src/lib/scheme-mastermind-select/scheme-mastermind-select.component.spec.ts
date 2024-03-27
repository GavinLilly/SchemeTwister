import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  NgbAccordionModule,
  NgbActiveModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { CARD_TYPE, GameSetup } from '@schemetwister/libtwister';
import {
  mainline,
  marvelSeries,
} from '@schemetwister/schemetwister-series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { SchemeMastermindSelectComponent } from './scheme-mastermind-select.component';

describe('SchemeMastermindSelectComponent', () => {
  let component: SchemeMastermindSelectComponent;
  let fixture: ComponentFixture<SchemeMastermindSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemeMastermindSelectComponent],
      imports: [NgbModalModule, FormsModule, NgbAccordionModule],
      providers: [
        NgbActiveModal,
        provideMockStore({
          initialState: {
            gameSetup: {
              gameSetup: GameSetup.empty(),
            },
            numPlayers: 2,
            gameSets: {
              gameSetIds: Object.values(mainline).map(
                (gameset) => gameset.GAME_SET.id
              ),
            },
          },
        }),
        {
          provide: SERIES_REGISTER_TOKEN,
          useValue: [marvelSeries],
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeMastermindSelectComponent);
    component = fixture.componentInstance;
    component.itemType = CARD_TYPE.mastermind;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
