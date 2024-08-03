import isUUID from 'validator/lib/isUUID';

import { CardFactory, StoreOfStores } from './factories';
import {
  GameSet,
  GAME_SET_SIZE,
  GameSetup,
  SchemeMinusRules,
  GameSetMap,
  NumPlayers,
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
} from './model';
import { Hero, Henchmen, Mastermind, VillainGroup } from './model/cards';
import { ISeries } from './model/interfaces/series.interface';
import instantiateScheme from './utils/instantiateScheme';

export interface IBlacklist {
  heroes: Hero[];
}

export interface ISetupConfig {
  /** The number of players to build the setup for */
  numPlayers: NumPlayers;
  /** The scheme to setup with */
  scheme?: SchemeMinusRules;
  /** The mastermind to inject into this setup */
  mastermind?: Mastermind;
  /** If the number of players is 1, whether to enable the advance solo mode (harder gameplay) */
  advancedSolo?: boolean;
  /** A hero deck to start the setup from */
  partialHeroDeck?: HeroDeckMinimal;
  /** A villain deck to start the setup from */
  partialVillainDeck?: VillainDeckMinimal;
  /** An additional deck to start the setup from */
  partialAdditionalDeck?: AdditionalDeckDeckMinimal;
  /** Any cards to blacklist */
  blacklist?: IBlacklist;
}

export interface ILibTwisterConfig {
  series: ISeries[];
  gameSets?: GameSet[];
  blacklist?: IBlacklist;
}

/**
 * A class to store which game sets are available and have been selected along
 * with all of the associated cards
 */
export class LibTwister {
  private _schemeFactory!: CardFactory<SchemeMinusRules>;
  private _stores!: StoreOfStores;
  private _selectedGameSets: GameSet[] = [];
  private readonly _series: ISeries[];
  private readonly _blacklist?: IBlacklist;

  /**
   * Create a new LibTwister instance with the given Series and optionally the
   * game sets
   * @param config configuration options for this setup of LibTwister
   */
  constructor(config: Readonly<ILibTwisterConfig>) {
    this._series = config.series;

    if (config.gameSets !== undefined && config.gameSets.length > 0) {
      this.selectedGameSets = config.gameSets;
    } else {
      this.selectedGameSets = this._allGameSets;
    }

    this._blacklist = config.blacklist;

    this._selectedGameSets.sort(GameSet.sorter);
  }

  /**
   * The factory to pick schemes
   * @returns The scheme factory in use
   */
  public get schemeFactory(): CardFactory<SchemeMinusRules> {
    return this._schemeFactory;
  }

  /**
   * The stores for each of the card types
   * @returns The StoreOfStores used in this LibTwister instance
   */
  public get stores() {
    return this._stores;
  }

  /**
   * The selected game sets
   * @returns An array of Game Sets used in this LibTwiser instance
   */
  public get selectedGameSets(): GameSet[] {
    return this._selectedGameSets;
  }

  public set selectedGameSets(gameSets: GameSet[]) {
    if (gameSets.length === 0) {
      throw new Error('No game set(s) selected');
    }
    if (!gameSets.every((gameSet) => this._allGameSets.includes(gameSet))) {
      throw new Error('Selected game set(s) not part of the select serie');
    }
    this._selectedGameSets = gameSets;
    this._onGameSetsChange();
  }

  /**
   * Get all the game sets available in this app
   * @returns a map of Game Set IDs to GameSet objects
   */
  public get allGameSets(): GameSetMap {
    const gamesetMap = new GameSetMap();

    this._allGameSets.forEach((gameset) => gamesetMap.set(gameset.id, gameset));

    return gamesetMap;
  }

  /**
   * Gets the Game Set with the given ID
   * @param gameSetId The ID of the Game Set to get
   * @returns A GameSet instance
   */
  public gameSetIdsToGameSets(gameSetId: string): GameSet;
  /**
   * Transforms the provided Game Set ID array into a GameSet array
   * @param gameSetIds the array of Game Set IDs to get
   * @returns an array of Game Sets
   */
  public gameSetIdsToGameSets(gameSetIds: string[]): GameSet[];
  public gameSetIdsToGameSets(
    gameSetIdOrIds: string | string[]
  ): GameSet | GameSet[] | undefined {
    if (gameSetIdOrIds instanceof Array) {
      return this.allGameSets
        .asArray()
        .filter((gameSet) => gameSetIdOrIds.includes(gameSet.id));
    }

    return this.allGameSets.get(gameSetIdOrIds);
  }

  /**
   * Checks the array of game set IDs to make sure it's valid. This includes
   * ensuring that all the IDs exist and that there is at least 1 core or large
   * game set
   * @param gameSetIds an array of game set IDs to check
   * @returns true if the array of game set IDs is valid
   */
  public validateGameSetIds(gameSetIds: string[]): boolean {
    const invalidIds = gameSetIds.filter((id) => !isUUID(id));

    if (invalidIds.length > 0) {
      throw new Error(
        `The provided game set IDs (${invalidIds}) are not valid UUIDs`
      );
    }

    const gameSets = this.gameSetIdsToGameSets(gameSetIds);

    if (gameSets.length !== gameSetIds.length) {
      return false;
    }

    return gameSets.some((gameSet) =>
      [GAME_SET_SIZE.core, GAME_SET_SIZE.large].includes(gameSet.size)
    );
  }

  /**
   * Sets up a game with the given parameters
   * @param config the configuration to use to create a setup
   * @returns a promise of a GameSetup
   */
  public getSetup(config: Readonly<ISetupConfig>): GameSetup {
    this._stores.reset();

    const blackListedHeroes = [
      ...(this._blacklist?.heroes ?? []),
      ...(config.blacklist?.heroes ?? []),
    ];

    blackListedHeroes.forEach((hero) => this.stores.heroStore.removeCard(hero));

    const createdScheme = instantiateScheme(
      config.scheme ?? this.schemeFactory.getRandom()
    );

    const setup = createdScheme.getSetup({
      ...config,
      store: this.stores,
    });

    return new GameSetup(setup);
  }

  /**
   * Performs actions when the selected Game Sets change
   */
  private _onGameSetsChange() {
    const heroes: Hero[] = [];
    const masterminds: Mastermind[] = [];
    const schemes: SchemeMinusRules[] = [];
    const villains: VillainGroup[] = [];
    const henchmen: Henchmen[] = [];

    this._selectedGameSets.forEach((gameSet) => {
      heroes.push(...gameSet.heroes);

      if (gameSet.masterminds) {
        masterminds.push(...gameSet.masterminds);
      }

      if (gameSet.schemes) {
        schemes.push(...gameSet.schemes);
      }

      if (gameSet.villains) {
        villains.push(...gameSet.villains);
      }

      if (gameSet.henchmen) {
        henchmen.push(...gameSet.henchmen);
      }
    });

    this._stores = new StoreOfStores(heroes, masterminds, villains, henchmen);

    this._schemeFactory = new CardFactory(schemes);
  }

  private get _allGameSets(): GameSet[] {
    return this._series.flatMap((series) => series.gameSets);
  }
}
