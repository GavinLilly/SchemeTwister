import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  CardType,
  GameSets,
  GameSetup,
  IGameSet,
  IGameSetup,
  IGenerateOptions,
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

  // Our variables for storing whether to use advanced solo
  private ADVANCED_SOLO_NAME = 'AdvancedSolo';
  private _advancedSolo: BehaviorSubject<boolean>;
  public readonly advancedSolo: Observable<boolean>;

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

    this._advancedSolo = new BehaviorSubject(
      this.cookieService.check(this.ADVANCED_SOLO_NAME)
        ? this.cookieService.get(this.ADVANCED_SOLO_NAME) === 'true'
        : false
    );

    this.advancedSolo = this._advancedSolo.asObservable();

    this._setup = new GameSetup(...this._gameSets.getValue());
    this._gameSetup = new BehaviorSubject(
      this._setup.generateGame(this._numPlayers.getValue() as numPlayers, {
        advancedSolo: this._advancedSolo.getValue(),
      })
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

  setAdvancedSolo(checked: boolean) {
    this._advancedSolo.next(checked);
    this.cookieService.set(
      this.ADVANCED_SOLO_NAME,
      checked ? 'true' : 'false',
      {
        expires: 365,
        path: '/',
      }
    );
  }

  shuffle() {
    const definedScheme: IDefinedItem = this._definedScheme.getValue();
    const definedMastermind: IDefinedItem = this._definedMastermind.getValue();

    const gameOptions: IGenerateOptions = {};

    if (!definedScheme.random)
      gameOptions.scheme = definedScheme.definedItem as IScheme;

    if (!definedMastermind.random)
      gameOptions.mastermind = definedMastermind.definedItem as IMastermind;

    if (this._numPlayers.getValue() == 1)
      gameOptions.advancedSolo = this._advancedSolo.getValue();

    this._gameSetup.next(
      this._setup.generateGame(
        this._numPlayers.getValue() as numPlayers,
        gameOptions
      )
    );
  }

  private cookieToArray(idString: string): IGameSet[] {
    const idArray: string[] = idString.split('|');
    return GameSets.ALL.filter((item) => idArray.includes(item.id));
  }
}
