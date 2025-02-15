import { Component, Signal } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IAdditionalDeck } from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectAdditionalDecks,
  selectLockedAdditionalDeckCards,
} from '../+state/selectors/game-setup-scheme.selectors';
import { BLANK_IMAGE_BASE64 } from '../constants';

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
  blankImage = BLANK_IMAGE_BASE64;

  constructor(
    private readonly _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}
}
