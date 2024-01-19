import { Component, Signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { GameSet, GAME_SET_SIZE, LibTwister } from '@schemetwister/libtwister';

import { gameSetSelectionActions as fromGameSetDialog } from '../+state/actions/game-sets.actions';
import { IGameSetsState } from '../+state/reducers/game-sets.reducer';
import { selectGameSets } from '../+state/selectors/game-sets.selectors';

@Component({
  selector: 'schemetwister-game-set-select',
  templateUrl: './game-set-select.component.html',
  styleUrls: ['./game-set-select.component.scss'],
})
export class GameSetSelectComponent {
  selectedGameSets: Signal<GameSet[]> =
    this._store.selectSignal(selectGameSets);

  gameSelectError: Signal<string> = this._store.selectSignal(
    (state) => state.gameSets.error
  );

  private _allGameSets: GameSet[] = LibTwister.allGameSets
    .asArray()
    .sort((a, b) => GameSet.sorter(a, b));

  coreSets = this._allGameSets.filter(
    (item) => item.size === GAME_SET_SIZE.core
  );
  lrgSets = this._allGameSets.filter(
    (item) => item.size === GAME_SET_SIZE.large
  );
  medSets = this._allGameSets.filter(
    (item) => item.size === GAME_SET_SIZE.medium
  );
  smlSets = this._allGameSets.filter(
    (item) => item.size === GAME_SET_SIZE.small
  );
  promoSets = this._allGameSets.filter(
    (item) => item.size === GAME_SET_SIZE.promo
  );

  constructor(
    public activeModal: NgbActiveModal,
    private _store: Store<{ gameSets: IGameSetsState }>
  ) {}

  onSelectedUpdate(selected: GameSet[]) {
    this._store.dispatch(
      fromGameSetDialog.setGameSets({
        gameSetIds: selected.map((item) => item.id),
      })
    );
  }
}
