import * as GameSets from './data/gameSets';
import { MultiCardStore, SingleCardFactory } from './factories';
import {
  AbstractMastermind,
  AbstractScheme,
  GameSet,
  GameSetSize,
  GameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
  NumPlayers,
} from './model';
import { GameSetMap } from './model/gameSetMap';

/**
 * A class to store which game sets are available and have been selected along
 * with all the of the associated cards
 */
export class LibTwister {
  private _schemeFactory!: SingleCardFactory<AbstractScheme>;
  /**
   * The factory to pick schemes
   */
  public get schemeFactory() {
    return this._schemeFactory;
  }

  private _mastermindStore!: MultiCardStore<AbstractMastermind>;
  /**
   * The mastermind store and picker
   */
  public get mastermindStore() {
    return this._mastermindStore;
  }

  private _heroStore!: MultiCardStore<IHero>;
  /**
   * The hero store and picker
   */
  public get heroStore() {
    return this._heroStore;
  }

  private _villainStore!: MultiCardStore<IVillainGroup>;
  /**
   * The villain store and picker
   */
  public get villainStore() {
    return this._villainStore;
  }

  private _henchmenStore!: MultiCardStore<IHenchmen>;
  /**
   * The henchmen store and picker
   */
  public get henchmenStore() {
    return this._henchmenStore;
  }

  /**
   * The selected game sets
   */
  private _selectedGameSets: GameSet[] = [];
  public get selectedGameSets(): GameSet[] {
    return this._selectedGameSets;
  }

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
  public async getSetup(
    numPlayers: NumPlayers,
    scheme = this.schemeFactory.getOneRandom(),
    mastermind = this.mastermindStore.getOneRandom(),
    advancedSolo = false
  ): Promise<GameSetup> {
    this._resetStores();

    const setup = await scheme.getSetup(
      numPlayers,
      mastermind,
      this.heroStore,
      this.villainStore,
      this.henchmenStore,
      this.mastermindStore,
      advancedSolo
    );

    return new GameSetup(setup);
  }

  /**
   * Resets the stores, removing any picked cards
   */
  private _resetStores() {
    this._henchmenStore.resetStore();
    this._heroStore.resetStore();
    this._mastermindStore.resetStore();
    this._villainStore.resetStore();
  }

  /**
   * Performs actions when the selected Game Sets change
   */
  private _onGameSetsChange() {
    const heroes: IHero[] = [];
    const masterminds: AbstractMastermind[] = [];
    const schemes: AbstractScheme[] = [];
    const villains: IVillainGroup[] = [];
    const henchmen: IHenchmen[] = [];

    this._selectedGameSets.forEach((gameSet) => {
      heroes.push(...gameSet.heroes);

      if (gameSet.masterminds !== undefined) {
        masterminds.push(...gameSet.masterminds);
      }

      if (gameSet.schemes !== undefined) {
        schemes.push(...gameSet.schemes);
      }

      if (gameSet.villains !== undefined) {
        villains.push(...gameSet.villains);
      }

      if (gameSet.henchmen !== undefined) {
        henchmen.push(...gameSet.henchmen);
      }
    });

    this._heroStore = new MultiCardStore(heroes);
    this._mastermindStore = new MultiCardStore(masterminds);
    this._schemeFactory = new SingleCardFactory(schemes);
    this._villainStore = new MultiCardStore(villains);
    this._henchmenStore = new MultiCardStore(henchmen);
  }
}
