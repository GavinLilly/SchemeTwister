import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IHeroDeck } from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

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
  heroDeck$: Observable<IHeroDeck> = this._store.select(selectHeroDeck);

  constructor(
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}
}
