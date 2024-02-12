import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAdditionalDeck } from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { selectAdditionalDecks } from '../+state/selectors/game-setup-scheme.selectors';

@Component({
  selector: 'schemetwister-additional-deck',
  templateUrl: './additional-deck.component.html',
  styleUrls: ['./additional-deck.component.scss'],
})
export class AdditionalDeckComponent {
  additionalDecks: Signal<IAdditionalDeck[]> = this._store.selectSignal(
    selectAdditionalDecks
  );

  constructor(
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}
}
