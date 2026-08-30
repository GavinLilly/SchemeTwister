import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AdditionalDeckComponent } from './additional-deck.component';

import { GameSetup } from '@schemetwister/libtwister';


describe('AdditionalDeckComponent', () => {
  let component: AdditionalDeckComponent;
  let fixture: ComponentFixture<AdditionalDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AdditionalDeckComponent],
    providers: [
        provideMockStore({
            initialState: {
                gameSetup: {
                    gameSetup: GameSetup.empty(),
                },
                numPlayers: 2,
            },
        }),
    ],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
