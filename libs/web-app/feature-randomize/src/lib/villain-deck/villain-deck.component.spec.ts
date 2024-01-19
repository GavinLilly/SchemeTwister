import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';

import { VillainDeckComponent } from './villain-deck.component';

describe('VillainDeckComponent', () => {
  let component: VillainDeckComponent;
  let fixture: ComponentFixture<VillainDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillainDeckComponent],
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
    fixture = TestBed.createComponent(VillainDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
