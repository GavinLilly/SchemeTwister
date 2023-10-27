import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';
import { CookieService } from 'ngx-cookie-service';
import { map, withLatestFrom } from 'rxjs/operators';

import {
  addGameSet,
  migrateGameSetsCookie,
  noGameSetCookie,
  migrateGameSetsCookieSuccess,
  removeGameSet,
  setGameSets,
  setGameSetsFailure,
  setGameSetsSuccess,
} from '../actions/game-sets.actions';
import { IGameSetsState } from '../reducers/game-sets.reducer';

@Injectable()
export class GameSetsEffects {
  private static readonly _cookieName = 'SelectedGameSets';

  readonly validateSetGameSets$ = createEffect(() =>
    this._actions$.pipe(
      ofType(setGameSets),
      map((action) =>
        LibTwister.validateGameSetIds(action.gameSetIds)
          ? setGameSetsSuccess({ gameSetIds: action.gameSetIds })
          : setGameSetsFailure()
      )
    )
  );

  readonly validateAddGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSetIds]) => {
        const newGameSetIds: string[] = gameSetIds.concat(action.gameSetId);

        return LibTwister.validateGameSetIds(newGameSetIds)
          ? setGameSetsSuccess({ gameSetIds: newGameSetIds })
          : setGameSetsFailure();
      })
    )
  );

  readonly validateRemoveGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(removeGameSet),
      withLatestFrom(this._store.select((state) => state.gameSets.gameSetIds)),
      map(([action, gameSets]) => {
        const deleteIdx = gameSets.indexOf(action.gameSetId);

        const firstSection = gameSets.slice(0, deleteIdx);
        const secondSection = gameSets.slice(deleteIdx + 1);

        const newGameSetIds = [...firstSection, ...secondSection];

        return LibTwister.validateGameSetIds(newGameSetIds)
          ? setGameSetsSuccess({ gameSetIds: newGameSetIds })
          : setGameSetsFailure();
      })
    )
  );

  loadCookieGameSet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(migrateGameSetsCookie),
      map(() => {
        if (this._cookieService.check(GameSetsEffects._cookieName)) {
          console.log(
            'Old Game Sets Cookie found. Migrating to local storage...'
          );
          const gameSetsString: string = this._cookieService.get(
            GameSetsEffects._cookieName
          );
          const gameSetIds: string[] = gameSetsString.split('|');

          console.log('Deleting old Game Sets Cookie...');

          this._cookieService.deleteAll('/randomize');

          console.log(
            `Old Game Sets Cookie migration complete. Migrated ${gameSetIds.length} Game Sets`
          );

          return migrateGameSetsCookieSuccess({ gameSetIds: gameSetIds });
        }

        console.log(
          "Old Game Sets Cookie not found. Assuming it's already migrated or this is a new user"
        );

        return noGameSetCookie();
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{
      gameSets: IGameSetsState;
    }>,
    private _cookieService: CookieService
  ) {}
}
