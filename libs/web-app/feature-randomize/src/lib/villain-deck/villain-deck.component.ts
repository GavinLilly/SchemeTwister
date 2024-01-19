import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IVillainDeck } from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { selectVillainDeck } from '../+state/selectors/game-setup-scheme.selectors';

@Component({
  selector: 'schemetwister-villain-deck',
  templateUrl: './villain-deck.component.html',
  styleUrls: ['./villain-deck.component.scss'],
})
export class VillainDeckComponent {
  villainDeck: Signal<IVillainDeck> =
    this._store.selectSignal(selectVillainDeck);

  constructor(
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}
}
