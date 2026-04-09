import { Component, computed, Signal, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLock, faLockOpen, faCog } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { Henchmen, Hero, IHeroDeck } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import {
  HeroCardContentComponent,
  HenchmenCardContentComponent,
} from '@schemetwister/web-app/ui';

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
  imports: [
    FaIconComponent,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    HeroCardContentComponent,
    HenchmenCardContentComponent,
  ],
  standalone: true,
})
export class HeroDeckComponent {
  private readonly _store = inject<
    Store<{
      gameSetup: IGameSetupState;
    }>
  >(Store);
  private readonly _dialog = inject(MatDialog);
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
    const dialogRef = this._dialog.open(HeroSelectorComponent);
    dialogRef.componentInstance.availableHeroesInput =
      this._availableCards();
    dialogRef.componentInstance.numberOfHeroes = numHeroes();
    dialogRef.componentInstance.lockedHeroes = this.lockedCards().heroes;

    dialogRef.componentInstance.chosenItems.subscribe(
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
