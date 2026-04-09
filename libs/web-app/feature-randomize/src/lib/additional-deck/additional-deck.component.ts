import { Component, Signal, inject } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { IAdditionalDeck } from '@schemetwister/libtwister';
import {
  HenchmenCardContentComponent,
  VillaingroupCardContentComponent,
  HeroCardContentComponent,
  MastermindCardContentComponent,
} from '@schemetwister/web-app/ui';

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
  imports: [
    MatExpansionModule,
    MatButtonModule,
    HenchmenCardContentComponent,
    VillaingroupCardContentComponent,
    HeroCardContentComponent,
    MastermindCardContentComponent,
  ],
  standalone: true,
})
export class AdditionalDeckComponent {
  private readonly _store = inject<
    Store<{
      gameSetup: IGameSetupState;
    }>
  >(Store);

  additionalDecks: Signal<IAdditionalDeck[]> = this._store.selectSignal(
    selectAdditionalDecks
  );
  lockedCards = this._store.selectSignal(selectLockedAdditionalDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;
  blankImage = BLANK_IMAGE_BASE64;
}
