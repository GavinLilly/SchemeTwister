import { Component, computed, Signal, inject } from '@angular/core';
import { faLock, faLockOpen, faCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Henchmen, Hero, IHeroDeck } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import {
  heroDeckActions,
  randomizePageActions,
} from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { selectLibTwister } from '../+state/selectors/game-sets.selectors';
import {
  selectHeroDeck,
  selectLockedHeroDeckCards,
} from '../+state/selectors/game-setup-scheme.selectors';
import { BLANK_IMAGE_BASE64 } from '../constants';
import { HeroSelectorComponent } from '../hero-selector/hero-selector.component';

/**
 * @todo check if bystanders are brought in
 */
@Component({
  selector: 'schemetwister-hero-deck',
  templateUrl: './hero-deck.component.html',
  styleUrls: ['./hero-deck.component.scss'],
  standalone: false,
})
export class HeroDeckComponent {
  private readonly _store = inject<
    Store<{
      gameSetup: IGameSetupState;
    }>
  >(Store);
  private readonly _modalService = inject(NgbModal);
  private readonly _seriesRegister = inject(SERIES_REGISTER_TOKEN);

  private readonly _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );
  private readonly _availableCards = computed(
    () => this._libTwister().stores.heroStore.availableCards
  );

  heroDeck: Signal<IHeroDeck> = this._store.selectSignal(selectHeroDeck);
  lockedCards = this._store.selectSignal(selectLockedHeroDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;
  faCog = faCog;
  blankImage = BLANK_IMAGE_BASE64;

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

  pickHeroes() {
    const numHeroes = computed(() => this.heroDeck().heroes.length);

    const modalSelector = this._modalService.open(HeroSelectorComponent);
    modalSelector.componentInstance.availableHeroesInput =
      this._availableCards();
    modalSelector.componentInstance.numberOfHeroes = numHeroes();
    modalSelector.componentInstance.lockedHeroes = this.lockedCards().heroes;

    modalSelector.componentInstance.chosenItems.subscribe(
      (receivedHeroes: Hero[] | undefined) =>
        this._handleChosenItems(receivedHeroes)
    );
  }

  private _handleChosenItems(receivedHeroes: Hero[] | undefined) {
    this._store.dispatch(heroDeckActions.reset());
    if (receivedHeroes !== undefined) {
      for (const hero of receivedHeroes) {
        this._store.dispatch(heroDeckActions.addCard({ card: hero }));
      }

      this._store.dispatch(randomizePageActions.generateGameSetup());
    }
  }
}
