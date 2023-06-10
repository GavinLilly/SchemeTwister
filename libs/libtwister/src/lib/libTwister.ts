import * as GameSets from './data/gameSets';
import { SingleCardFactory, StoreOfStores } from './factories';
import {
  GameSet,
  GameSetSize,
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
   * Create a LibTwister instance with the given Game Set IDs
   * @param gameSetIds an array of Game Set IDs
   * @returns a LibTwister instance
   */
  public static withGameSets(gameSetIds: string[]): LibTwister {
    const gameSets: GameSet[] = LibTwister.gameSetIdsToGameSets(gameSetIds);

    return new LibTwister(gameSets);
  }

  /**
   * Create a LibTwiser instance with all Game Sets
   * @returns a LibTwister instance
   */
  public static withAllGameSets(): LibTwister {
    return new LibTwister(LibTwister.allGameSets.asArray());
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

  public static validateGameSetIds(gameSetIds: string[]): boolean {
    const gameSets = LibTwister.gameSetIdsToGameSets(gameSetIds);

    return gameSets.some((gameSet) =>
      [GameSetSize.CORE, GameSetSize.LARGE].includes(gameSet.size)
    );
  }

  /**
   * Get all the game sets available in this app
   * @returns a map of Game Set IDs to GameSet objects
   */
  public static get allGameSets(): GameSetMap {
    const gamesetMap = new GameSetMap();

    const gamesets = Object.values(GameSets);

    gamesets.forEach((gameset) => {
      gamesetMap.set(gameset.default.id, gameset.default);
    });

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
