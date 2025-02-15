import { Component, Signal } from '@angular/core';
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

@Component({
  selector: 'schemetwister-villain-deck',
  templateUrl: './villain-deck.component.html',
  styleUrls: ['./villain-deck.component.scss'],
})
export class VillainDeckComponent {
  villainDeck: Signal<IVillainDeck> =
    this._store.selectSignal(selectVillainDeck);

  lockedCards = this._store.selectSignal(selectLockedVillainDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;
  blankImage = BLANK_IMAGE_BASE64;

  constructor(
    private readonly _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}

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
