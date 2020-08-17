import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IGameSetup,
  GameSetup,
  GameSets,
  IScheme,
  IMastermind,
  numPlayers
} from '@legendizer/legendizer-lib';

@Injectable()
export class GameSetupStore {
  private _setup: GameSetup = new GameSetup(...GameSets.ALL);
  private _gameSetup: BehaviorSubject<IGameSetup> = new BehaviorSubject(
    this._setup.generateGame(2)
  );

  public readonly gameSetup: Observable<
    IGameSetup
  > = this._gameSetup.asObservable();

  constructor() {}

  shuffle(numberPlayers: number, scheme?: IScheme, mastermind?: IMastermind) {
    this._gameSetup.next(
      this._setup.generateGame(numberPlayers as numPlayers, scheme, mastermind)
    );
  }
}
