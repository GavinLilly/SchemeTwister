import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { LibTwister } from '@schemetwister/libtwister';

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
              gameSetIds: LibTwister.allGameSets
                .asArray()
                .map((gameSet) => gameSet.id),
            },
            numPlayers: 2,
          },
        }),
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
