import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IHeroDeck } from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { selectHeroDeck } from '../+state/selectors/game-setup-scheme.selectors';

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

  constructor(
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}
}
