import { Injectable } from '@angular/core';
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
  private _gameSets: BehaviorSubject<IGameSet[]> = new BehaviorSubject(
    GameSets.ALL
  );
  private _numPlayers: BehaviorSubject<number> = new BehaviorSubject(2);
  private _setup: GameSetup = new GameSetup(...this._gameSets.getValue());
  private _gameSetup: BehaviorSubject<IGameSetup> = new BehaviorSubject(
    this._setup.generateGame(this._numPlayers.getValue() as numPlayers)
  );

  public readonly gameSets: Observable<
    IGameSet[]
  > = this._gameSets.asObservable();
  public readonly gameSetup: Observable<
    IGameSetup
  > = this._gameSetup.asObservable();
  public readonly numPlayers: Observable<
    number
  > = this._numPlayers.asObservable();

  constructor() {
    this.numPlayers.subscribe((next) => {
      this.shuffle();
    });
    this.gameSets.subscribe((next) => {
      this._setup = new GameSetup(...this._gameSets.getValue());
      this.shuffle();
    })
  }

  setGameSets(gameSets: IGameSet[]) {
    this._gameSets.next(gameSets);
  }

  setNumPlayers(numberPlayers: number) {
    this._numPlayers.next(numberPlayers);
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
}
