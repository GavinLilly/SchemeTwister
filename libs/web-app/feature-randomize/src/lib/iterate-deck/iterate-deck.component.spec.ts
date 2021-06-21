import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardType, GameSets } from '@schemetwister/libtwister';
import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { IterateDeckComponent } from './iterate-deck.component';

describe('IterateDeckComponent', () => {
  let component: IterateDeckComponent;
  let fixture: ComponentFixture<IterateDeckComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IterateDeckComponent],
        imports: [NgbModule, WebAppUiModule],
      }).compileComponents();
    })
  );

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
