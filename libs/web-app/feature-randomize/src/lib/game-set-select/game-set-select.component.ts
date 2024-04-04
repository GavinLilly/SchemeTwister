import { Component, Inject, Signal, computed } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { GameSet, GAME_SET_SIZE, ISeries } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { gameSetSelectionActions as fromGameSetDialog } from '../+state/actions/game-sets.actions';
import { IGameSetsState } from '../+state/reducers/game-sets.reducer';
import {
  selectGameSetIds,
  selectLibTwister,
} from '../+state/selectors/game-sets.selectors';

@Component({
  selector: 'schemetwister-game-set-select',
  templateUrl: './game-set-select.component.html',
})
export class GameSetSelectComponent {
  private _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );
  private _selectedGameSetIds = this._store.selectSignal(selectGameSetIds);
  private _allGameSets: GameSet[] = this._libTwister()
    .allGameSets.asArray()
    .sort((a, b) => GameSet.sorter(a, b));

  selectedGameSets = computed(() =>
    this._libTwister().gameSetIdsToGameSets(this._selectedGameSetIds())
  );
  gameSelectError: Signal<string> = this._store.selectSignal(
    (state) => state.gameSets.error
  );

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
    private _store: Store<{ gameSets: IGameSetsState }>,
    @Inject(SERIES_REGISTER_TOKEN) private _seriesRegister: ISeries[]
  ) {}

  onSelectedUpdate(selected: GameSet[]) {
    this._store.dispatch(
      fromGameSetDialog.setGameSets({
        gameSetIds: selected.map((item) => item.id),
      })
    );
  }
}
