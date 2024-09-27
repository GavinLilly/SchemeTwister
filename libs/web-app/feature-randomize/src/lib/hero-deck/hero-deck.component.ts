import { Component, Signal } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Henchmen, Hero, IHeroDeck } from '@schemetwister/libtwister';

import { heroDeckActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectHeroDeck,
  selectLockedHeroDeckCards,
} from '../+state/selectors/game-setup-scheme.selectors';

/**
 * @todo check if bystanders are brought in
 */
@Component({
  selector: 'schemetwister-hero-deck',
  templateUrl: './hero-deck.component.html',
  styleUrls: ['./hero-deck.component.scss'],
})
export class HeroDeckComponent {
  heroDeck: Signal<IHeroDeck> = this._store.selectSignal(selectHeroDeck);
  lockedCards = this._store.selectSignal(selectLockedHeroDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;

  constructor(
    private readonly _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}

  isCardLocked(card: Hero | Henchmen) {
    const lockedCards = this.lockedCards();

    if (card instanceof Hero) {
      return lockedCards.heroes?.includes(card);
    }

    if (card instanceof Henchmen) {
      return lockedCards.henchmen?.includes(card);
    }

    return false;
  }

  toggleLocked(card: Hero | Henchmen) {
    if (this.isCardLocked(card)) {
      this._store.dispatch(heroDeckActions.removeCard({ card }));
    } else {
      this._store.dispatch(heroDeckActions.addCard({ card }));
    }
  }
}
