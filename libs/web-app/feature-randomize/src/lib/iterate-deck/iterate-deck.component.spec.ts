import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardType, GameSets } from '@legendizer/legendizer-lib';

import { IterateDeckComponent } from './iterate-deck.component';
import { HenchmenComponent } from 'libs/web-app/ui/src/lib/henchmen/henchmen.component';
import { VillainGroupComponent } from 'libs/web-app/ui/src/lib/villain-group/villain-group.component';
import { HeroesComponent } from 'libs/web-app/ui/src/lib/heroes/heroes.component';
import { MastermindComponent } from 'libs/web-app/ui/src/lib/mastermind/mastermind.component';

describe('IterateDeckComponent', () => {
  let component: IterateDeckComponent;
  let fixture: ComponentFixture<IterateDeckComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          IterateDeckComponent,
          HenchmenComponent,
          VillainGroupComponent,
          HeroesComponent,
          MastermindComponent,
        ],
        imports: [NgbModule],
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
