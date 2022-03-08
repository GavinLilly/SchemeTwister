import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAdditionalDeck } from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

import { IGameSetupState } from '../..';

@Component({
  selector: 'schemetwister-additional-deck',
  templateUrl: './additional-deck.component.html',
  styleUrls: ['./additional-deck.component.scss'],
})
export class AdditionalDeckComponent {
  gameSetup$: Observable<IAdditionalDeck> = this._store.select(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (state) => state.gameSetup.gameSetup.additionalDeck!
  );

  constructor(
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}
}
