import * as GameSets from './data/gameSets';
import { SingleCardFactory, StoreOfStores } from './factories';
import {
  GameSet,
  GAME_SET_SIZE,
  GameSetup,
  Hero,
  Henchmen,
  Mastermind,
  NumPlayers,
  VillainGroup,
  SchemeMinusRules,
  GameSetMap,
} from './model';
import instantiateScheme from './utils/instantiateScheme';

/**
 * A class to store which game sets are available and have been selected along
 * with all of the associated cards
 */
export class LibTwister {
  private _schemeFactory!: SingleCardFactory<SchemeMinusRules>;
  private _stores!: StoreOfStores;
  private readonly _selectedGameSets: GameSet[] = [];

  /**
   * Create a new LibTwister instance with the given GameSets
   * @param selectedGameSets an array of Game Set items to create the LibTwister instance with
   */
  constructor(selectedGameSets: GameSet[]) {
    this._selectedGameSets = selectedGameSets;
    this._selectedGameSets.sort(GameSet.sorter);
    this._onGameSetsChange();
  }

  /**
   * The factory to pick schemes
   */
  public get schemeFactory() {
    return this._schemeFactory;
  }

  /**
   * The stores for each of the card types
   */
  public get stores() {
    return this._stores;
  }

  /**
   * The selected game sets
   */
  public get selectedGameSets(): GameSet[] {
    return this._selectedGameSets;
  }

  /**
   * Create a LibTwiser instance with all Game Sets
   * @returns a LibTwister instance
   */
  public static of(): LibTwister;
  /**
   * Create a LibTwister instance with the given Game Set IDs
   * @param gameSetIds an array of Game Set IDs
   * @returns a LibTwister instance
   */
  public static of(...gameSetIds: string[]): LibTwister;
  public static of(...gameSetIds: string[]): LibTwister {
    if (gameSetIds.length === 0) {
      return new LibTwister(LibTwister.allGameSets.asArray());
    }

    const gameSets: GameSet[] = LibTwister.gameSetIdsToGameSets(gameSetIds);

    return new LibTwister(gameSets);
  }

  /**
   * Gets the Game Set with the given ID
   * @param gameSetId the ID of the Game Set to get
   * @returns a GameSet instance
   */
  public static gameSetIdToGameSet(gameSetId: string): GameSet | undefined {
    return this.allGameSets.get(gameSetId);
  }

  /**
   * Transforms the provided Game Set ID array into a GameSet array
   * @param gameSetIds the array of Game Set IDs to get
   * @returns an array of Game Sets
   */
  public static gameSetIdsToGameSets(gameSetIds: string[]): GameSet[] {
    return this.allGameSets
      .asArray()
      .filter((gameSet) => gameSetIds.includes(gameSet.id));
  }

  /**
   * Checks the array of game set IDs to make sure it's valid. This includes
   * ensuring that all the IDs exist and that there is at least 1 core or large
   * game set
   * @param gameSetIds an array of game set IDs to check
   * @returns true if the array of game set IDs is valid
   */
  public static validateGameSetIds(gameSetIds: string[]): boolean {
    const gameSets = LibTwister.gameSetIdsToGameSets(gameSetIds);

    if (gameSets.length !== gameSetIds.length) {
      return false;
    }

    return gameSets.some((gameSet) =>
      [GAME_SET_SIZE.core, GAME_SET_SIZE.large].includes(gameSet.size)
    );
  }

  /**
   * Get all the game sets available in this app
   * @returns a map of Game Set IDs to GameSet objects
   */
  public static get allGameSets(): GameSetMap {
    const gamesetMap = new GameSetMap();

    const gamesets = Object.values(GameSets);

    gamesets.forEach((gameset) =>
      gamesetMap.set(gameset.GAME_SET.id, gameset.GAME_SET)
    );

    return gamesetMap;
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
    scheme = this.schemeFactory.getOneRandom(),
    mastermind = this.stores.mastermindStore.getOneRandom(),
    advancedSolo = false
  ): GameSetup {
    this._stores.reset();

    const createdScheme = instantiateScheme(scheme);

    const setup = createdScheme.getSetup(
      numPlayers,
      mastermind,
      this.stores,
      advancedSolo
    );

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

    this._schemeFactory = new SingleCardFactory(schemes);
  }
}
