import * as GameSets from './data/gameSets';
import { MultiCardStore, SingleCardFactory } from './factories';
import {
  AbstractMastermind,
  AbstractScheme,
  GameSet,
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
  public static defaultSeedUUID = 'cad42c6f-bdfd-4956-8b91-6d4c2829bb4c';
  /**
   * The factory to pick schemes
   */
  public get schemeFactory() {
    return this._schemeFactory;
  }
  private _schemeFactory!: SingleCardFactory<AbstractScheme>;

  /**
   * The mastermind store and picker
   */
  public get mastermindStore() {
    return this._mastermindStore;
  }
  private _mastermindStore!: MultiCardStore<AbstractMastermind>;

  /**
   * The hero store and picker
   */
  public get heroStore() {
    return this._heroStore;
  }
  private _heroStore!: MultiCardStore<IHero>;

  /**
   * The villain store and picker
   */
  public get villainStore() {
    return this._villainStore;
  }
  private _villainStore!: MultiCardStore<IVillainGroup>;

  /**
   * The henchmen store and picker
   */
  public get henchmenStore() {
    return this._henchmenStore;
  }
  private _henchmenStore!: MultiCardStore<IHenchmen>;

  private _selectedGameSetIds: string[] = [];

  /**
   * Get the selected game sets IDs
   */
  public get selectedGameSetsIds(): string[] {
    return this._selectedGameSetIds;
  }

  /**
   * Set the selected game sets using IDs
   */
  public set selectedGameSetsIds(gameSetIds: string[]) {
    gameSetIds.forEach((item) => {
      if (LibTwister.allGameSets.has(item)) {
        this._selectedGameSetIds.push(item);
      } else {
        throw new Error(`Game set with ID ${item} is not recognised`);
      }
    });

    const heroes: IHero[] = [];
    const masterminds: AbstractMastermind[] = [];
    const schemes: AbstractScheme[] = [];
    const villains: IVillainGroup[] = [];
    const henchmen: IHenchmen[] = [];

    this.selectedGameSets.forEach((gameSet) => {
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

  /**
   * The selected game sets
   */
  public get selectedGameSets(): GameSet[] {
    const gameSets: GameSet[] = [];

    this._selectedGameSetIds.forEach((id) => {
      const gameSet = LibTwister.allGameSets.get(id);

      if (gameSet !== undefined) {
        gameSets.push(gameSet);
      }
    });

    return gameSets.sort((a, b) => {
      if (a.size > b.size) return -1;
      else if (a.size < b.size) return 1;
      else {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      }
    });
  }

  public set selectedGameSets(gameSets: GameSet[]) {
    this.selectedGameSetsIds = gameSets.map((gameSet) => gameSet.id);
  }

  constructor(
    selectedGameSetIds: string[],
    private seedUUID = LibTwister.defaultSeedUUID
  ) {
    this.selectedGameSetsIds = selectedGameSetIds;
  }

  public static gameSetIdsToGameSets(gameSetIds: string[]): GameSet[] {
    return this.allGameSets
      .asArray()
      .filter((gameSet) => gameSetIds.includes(gameSet.id));
  }

  /**
   * Get all the game sets available in this app
   */
  public static get allGameSets(): GameSetMap {
    const gamesetMap = new GameSetMap();

    const gamesets = Object.values(GameSets);

    gamesets.forEach((gameset) => {
      gamesetMap.set(gameset.default.id, gameset.default);
    });

    return gamesetMap;
  }

  public async getSetup(
    numPlayers: NumPlayers,
    scheme = this.schemeFactory.getOneRandom(),
    mastermind = this.mastermindStore.getOneRandom(),
    advancedSolo = false
  ): Promise<GameSetup> {
    this._henchmenStore.resetStore();
    this._heroStore.resetStore();
    this._mastermindStore.resetStore();
    this._villainStore.resetStore();

    const setup = await scheme.getSetup(
      numPlayers,
      mastermind,
      this.heroStore,
      this.villainStore,
      this.henchmenStore,
      this.mastermindStore,
      advancedSolo
    );

    return new GameSetup(setup, this.seedUUID);
  }
}
