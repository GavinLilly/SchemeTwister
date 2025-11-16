import { Component, Signal, inject } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  Henchmen,
  Hero,
  IVillainDeck,
  Mastermind,
  VillainGroup,
} from '@schemetwister/libtwister';

import { villainDeckActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectLockedVillainDeckCards,
  selectVillainDeck,
} from '../+state/selectors/game-setup-scheme.selectors';
import { BLANK_IMAGE_BASE64 } from '../constants';
import { VillainAdditionalDeckCardType } from '../villainAdditionalDeckCard.type';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HenchmenCardContentComponent } from '../../../../ui/src/lib/henchmen-card-content/henchmen-card-content.component';
import { VillaingroupCardContentComponent } from '../../../../ui/src/lib/villaingroup-card-content/villaingroup-card-content.component';
import { HeroCardContentComponent } from '../../../../ui/src/lib/hero-card-content/hero-card-content.component';
import { MastermindCardContentComponent } from '../../../../ui/src/lib/mastermind-card-content/mastermind-card-content.component';

@Component({
    selector: 'schemetwister-villain-deck',
    templateUrl: './villain-deck.component.html',
    styleUrls: ['./villain-deck.component.scss'],
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, FaIconComponent, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, HenchmenCardContentComponent, VillaingroupCardContentComponent, HeroCardContentComponent, MastermindCardContentComponent]
})
export class VillainDeckComponent {
  private readonly _store = inject<Store<{
    gameSetup: IGameSetupState;
}>>(Store);

  villainDeck: Signal<IVillainDeck> =
    this._store.selectSignal(selectVillainDeck);

  lockedCards = this._store.selectSignal(selectLockedVillainDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;
  blankImage = BLANK_IMAGE_BASE64;

  isCardLocked(card: VillainAdditionalDeckCardType) {
    const lockedCards = this.lockedCards();

    if (lockedCards !== undefined) {
      if (card instanceof Hero) {
        return lockedCards.heroes?.includes(card);
      }

      if (card instanceof Henchmen) {
        return lockedCards.henchmen?.includes(card);
      }

      if (card instanceof VillainGroup) {
        return lockedCards.villains?.includes(card);
      }

      if (card instanceof Mastermind) {
        return lockedCards.masterminds?.includes(card);
      }
    }

    return false;
  }

  toggleLocked(card: VillainAdditionalDeckCardType) {
    if (this.isCardLocked(card)) {
      this._store.dispatch(villainDeckActions.removeCard({ card }));
    } else {
      this._store.dispatch(villainDeckActions.addCard({ card }));
    }
  }
}
