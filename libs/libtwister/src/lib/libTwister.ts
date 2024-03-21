import isUUID from 'validator/lib/isUUID';

import { CardFactory, StoreOfStores } from './factories';
import {
  GameSet,
  GAME_SET_SIZE,
  GameSetup,
  NumPlayers,
  SchemeMinusRules,
  GameSetMap,
} from './model';
import { Hero, Henchmen, Mastermind, VillainGroup } from './model/cards';
import { ISeries } from './model/interfaces/series.interface';
import instantiateScheme from './utils/instantiateScheme';

/**
 * A class to store which game sets are available and have been selected along
 * with all of the associated cards
 */
export class LibTwister {
  private _schemeFactory!: CardFactory<SchemeMinusRules>;
  private _stores!: StoreOfStores;
  private _selectedGameSets: GameSet[] = [];
  private readonly _series: ISeries[];

  /**
   * Create a new LibTwister instance with the given Series and optionally the
   * game sets
   * @param series the series to enable in this instance of LibTwister
   */
  constructor(...series: ISeries[]) {
    this._series = series;

    this._selectedGameSets = this.allGameSets;
    this._selectedGameSets.sort(GameSet.sorter);
    this._onGameSetsChange();
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
    if (!gameSets.every((gameSet) => this.allGameSets.includes(gameSet))) {
      throw new Error('Selected game set(s) not part of the select serie');
    }
    this._selectedGameSets = gameSets;
    this._onGameSetsChange();
  }

  public get allGameSets(): GameSet[] {
    return this._series.flatMap((series) => series.gameSets);
  }

  /**
   * Get all the game sets available in this app
   * @returns a map of Game Set IDs to GameSet objects
   */
  public get allGameSetsMap(): GameSetMap {
    const gamesetMap = new GameSetMap();

    this.allGameSets.forEach((gameset) => gamesetMap.set(gameset.id, gameset));

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
      return this.allGameSetsMap
        .asArray()
        .filter((gameSet) => gameSetIdOrIds.includes(gameSet.id));
    }

    return this.allGameSetsMap.get(gameSetIdOrIds);
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
   * @param numPlayers the number of players to set up for. Must be between 1 and 5
   * @param scheme the scheme to set up for. If not provided then a random one will be used
   * @param mastermind the mastermind to set up for. If not provided then a random one will be used
   * @param advancedSolo if it is being set up for 1 player mode then this will enable "Advanced Solo"
   * @returns a promise of a GameSetup
   */
  public getSetup(
    numPlayers: NumPlayers,
    scheme = this.schemeFactory.getRandom(),
    mastermind = this.stores.mastermindStore.getRandom(),
    advancedSolo = false
  ): GameSetup {
    this._stores.reset();

    const createdScheme = instantiateScheme(scheme);

    this._stores.mastermindStore.removeCard(mastermind);

    const setup = createdScheme.getSetup({
      numPlayers,
      selectedMastermind: mastermind,
      store: this.stores,
      advancedSolo,
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
}
