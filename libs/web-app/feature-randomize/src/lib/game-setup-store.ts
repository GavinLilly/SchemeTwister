import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  CardType,
  GameSets,
  GameSetup,
  IGameSet,
  IGameSetup,
  IMastermind,
  IScheme,
  numPlayers,
} from '@schemetwister/libtwister';

import { IDefinedItem } from './defined-item.interface';

@Injectable()
export class GameSetupStore {
  // Variables for storing selected game sets
  private GAMESET_COOKIE_NAME = 'SelectedGameSets';
  private _gameSets: BehaviorSubject<IGameSet[]>;
  public readonly gameSets: Observable<IGameSet[]>;

  // Variables for storing the number of players
  private NUMPLAYERS_COOKIE_NAME = 'NumberPlayers';
  private _numPlayers: BehaviorSubject<number>;
  public readonly numPlayers: Observable<number>;

  // Our class for generating game setups
  private _setup: GameSetup;

  // Our variables for storing the generated setup
  private _gameSetup: BehaviorSubject<IGameSetup>;
  public readonly gameSetup: Observable<IGameSetup>;

  // Our variables for storing defined schemes or random choice
  private _definedScheme: BehaviorSubject<IDefinedItem>;
  public readonly definedScheme: Observable<IDefinedItem>;

  // Our variables for storing defined schemes or random choice
  private _definedMastermind: BehaviorSubject<IDefinedItem>;
  public readonly definedMastermind: Observable<IDefinedItem>;

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

    this._definedScheme = new BehaviorSubject({
      random: true,
    } as IDefinedItem);
    this.definedScheme = this._definedScheme.asObservable();

    this._definedMastermind = new BehaviorSubject({
      random: true,
    } as IDefinedItem);
    this.definedMastermind = this._definedMastermind.asObservable();

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

  setDefinedItem(item: IDefinedItem, cardType: CardType) {
    if (cardType === CardType.SCHEME) this._definedScheme.next(item);
    else if (cardType === CardType.MASTERMIND)
      this._definedMastermind.next(item);

    this.shuffle();
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

  shuffle(mastermind?: IMastermind) {
    const definedScheme: IDefinedItem = this._definedScheme.getValue();
    const definedMastermind: IDefinedItem = this._definedMastermind.getValue();

    this._gameSetup.next(
      this._setup.generateGame(
        this._numPlayers.getValue() as numPlayers,
        definedScheme.random
          ? undefined
          : (definedScheme.definedItem as IScheme),
        definedMastermind.random
          ? undefined
          : (definedMastermind.definedItem as IMastermind)
      )
    );
  }

  private cookieToArray(idString: string): IGameSet[] {
    const idArray: string[] = idString.split('|');
    return GameSets.ALL.filter((item) => idArray.includes(item.id));
  }
}
