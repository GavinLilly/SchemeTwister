import { Component, Signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
// NgFor and NgIf are not needed because this template uses the project's custom @for/@if syntax
// and Angular's built-in directives are not used here.
import { Store } from '@ngrx/store';
import { GameSet, GAME_SET_SIZE } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { gameSetSelectionActions as fromGameSetDialog } from '../+state/actions/game-sets.actions';
import { IGameSetsState } from '../+state/reducers/game-sets.reducer';
import {
  selectGameSetIds,
  selectLibTwister,
} from '../+state/selectors/game-sets.selectors';

@Component({
  standalone: true,
    selector: 'schemetwister-game-set-select',
    templateUrl: './game-set-select.component.html',
    imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class GameSetSelectComponent {
  dialogRef = inject(MatDialogRef<GameSetSelectComponent>);
  private readonly _store = inject<
    Store<{
      gameSets: IGameSetsState;
    }>
  >(Store);
  private readonly _seriesRegister = inject(SERIES_REGISTER_TOKEN);

  private readonly _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );
  private readonly _selectedGameSetIds =
    this._store.selectSignal(selectGameSetIds);
  private readonly _allGameSets: GameSet[] = this._libTwister()
    .allGameSets.asArray()
    .toSorted((a, b) => GameSet.sorter(a, b));

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

  onSelectedUpdate(selected: GameSet[]) {
    this._store.dispatch(
      fromGameSetDialog.setGameSets({
        gameSetIds: selected.map((item) => item.id),
      })
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
