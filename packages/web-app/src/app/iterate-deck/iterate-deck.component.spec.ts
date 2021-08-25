import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { CardType, GameSets } from 'libtwister';

import { IterateDeckComponent } from './iterate-deck.component';

describe('IterateDeckComponent', () => {
  let component: IterateDeckComponent;
  let fixture: ComponentFixture<IterateDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IterateDeckComponent],
      imports: [NgbAccordionModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateDeckComponent);
    component = fixture.componentInstance;
    component.deckName = 'Test deck';
    component.deck = {
      numBystanders: 1,
      numTwists: 1,
      numWounds: 1,
      cards: [
        {
          cardType: CardType.HERO,
          gameSet: GameSets.LEGENDARY,
          id: '398504a4-d758-46e5-9916-92924acae173',
          name: 'Test Hero',
        },
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
