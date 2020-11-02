import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  GameSets,
  GameSetup,
  IGameSet,
  IGameSetup,
  IMastermind,
  IScheme,
  numPlayers,
} from '@legendizer/legendizer-lib';

@Injectable()
export class GameSetupStore {
  private GAMESET_COOKIE_NAME = 'SelectedGameSets';
  private _gameSets: BehaviorSubject<IGameSet[]>;
  public readonly gameSets: Observable<IGameSet[]>;

  private NUMPLAYERS_COOKIE_NAME = 'NumberPlayers';
  private _numPlayers: BehaviorSubject<number>;
  public readonly numPlayers: Observable<number>;

  private _setup: GameSetup;
  private _gameSetup: BehaviorSubject<IGameSetup>;
  public readonly gameSetup: Observable<IGameSetup>;

  constructor(private cookieService: CookieService) {
    this._gameSets = new BehaviorSubject(
      this.cookieService.check(this.GAMESET_COOKIE_NAME)
        ? this.cookieToArray(this.cookieService.get(this.GAMESET_COOKIE_NAME))
        : GameSets.ALL
    );

    this.gameSets = this._gameSets.asObservable();

    this._numPlayers = new BehaviorSubject(
      this.cookieService.check(this.NUMPLAYERS_COOKIE_NAME)
        ? parseInt(this.cookieService.get(this.NUMPLAYERS_COOKIE_NAME), 10)
        : 2
    );

    this.numPlayers = this._numPlayers.asObservable();

    this._setup = new GameSetup(...this._gameSets.getValue());
    this._gameSetup = new BehaviorSubject(
      this._setup.generateGame(this._numPlayers.getValue() as numPlayers)
    );

    this.gameSetup = this._gameSetup.asObservable();

    this.numPlayers.subscribe(() => {
      this.shuffle();
    });
    this.gameSets.subscribe(() => {
      this._setup = new GameSetup(...this._gameSets.getValue());
      this.shuffle();
    });
  }

  setGameSets(gameSets: IGameSet[]) {
    this._gameSets.next(gameSets);
    this.cookieService.set(
      this.GAMESET_COOKIE_NAME,
      gameSets.map((item) => item.id).join('|'),
      {
        expires: 365,
        path: '/',
      }
    );
  }

  setNumPlayers(numberPlayers: number) {
    this._numPlayers.next(numberPlayers);
    this.cookieService.set(
      this.NUMPLAYERS_COOKIE_NAME,
      numberPlayers.toString(),
      {
        expires: 365,
        path: '/',
      }
    );
  }

  shuffle(scheme?: IScheme, mastermind?: IMastermind) {
    this._gameSetup.next(
      this._setup.generateGame(
        this._numPlayers.getValue() as numPlayers,
        scheme,
        mastermind
      )
    );
  }

  private cookieToArray(idString: string): IGameSet[] {
    const idArray: string[] = idString.split('|');
    return GameSets.ALL.filter((item) => idArray.includes(item.id));
  }
}
