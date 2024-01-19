import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { HeroDeckComponent } from './hero-deck.component';

describe('HeroDeckComponent', () => {
  let component: HeroDeckComponent;
  let fixture: ComponentFixture<HeroDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDeckComponent],
      imports: [NgbAccordionModule],
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
    fixture = TestBed.createComponent(HeroDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
