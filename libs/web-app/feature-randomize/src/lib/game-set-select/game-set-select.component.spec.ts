import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import {
  mainline,
  marvelSeries,
} from '@schemetwister/schemetwister-series-marvel';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { GameSetSelectComponent } from './game-set-select.component';

describe('GameSetSelectComponent', () => {
  let component: GameSetSelectComponent;
  let fixture: ComponentFixture<GameSetSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GameSetSelectComponent],
      imports: [NgbModalModule, FormsModule],
      providers: [
        NgbActiveModal,
        provideMockStore({
          initialState: {
            gameSets: {
              gameSetIds: Object.values(mainline).map(
                (gameset) => gameset.GAME_SET.id
              ),
            },
            numPlayers: 2,
          },
        }),
        {
          provide: SERIES_REGISTER_TOKEN,
          useValue: [marvelSeries],
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
