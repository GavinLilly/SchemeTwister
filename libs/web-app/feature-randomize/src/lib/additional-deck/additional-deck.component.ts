import { Component, Signal } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  Henchmen,
  Hero,
  IAdditionalDeck,
  Mastermind,
  VillainGroup,
} from '@schemetwister/libtwister';

import { additionalDeckActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectAdditionalDecks,
  selectLockedAdditionalDeckCards,
} from '../+state/selectors/game-setup-scheme.selectors';
import { VillainAdditionalDeckCardType } from '../villainAdditionalDeckCard.type';

@Component({
  selector: 'schemetwister-additional-deck',
  templateUrl: './additional-deck.component.html',
  styleUrls: ['./additional-deck.component.scss'],
})
export class AdditionalDeckComponent {
  additionalDecks: Signal<IAdditionalDeck[]> = this._store.selectSignal(
    selectAdditionalDecks
  );
  lockedCards = this._store.selectSignal(selectLockedAdditionalDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;

  constructor(
    private _store: Store<{
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

  dispatchLock = (card: VillainAdditionalDeckCardType) =>
    this._store.dispatch(additionalDeckActions.addCard({ card }));

  dispatchReset = (card: VillainAdditionalDeckCardType) =>
    this._store.dispatch(additionalDeckActions.removeCard({ card }));
}
