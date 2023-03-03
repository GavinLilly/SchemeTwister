import LEGENDARY from '../data/gameSets/legendary';
import {
  AbstractMastermind,
  IHero,
  IVillainGroup,
  IHenchmen,
  GameSet,
} from '../model';

import { MultiCardStore } from './multiCardStore';

export class StoreOfStores {
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

  constructor();
  constructor(
    heroes: IHero[],
    masterminds: AbstractMastermind[],
    villains: IVillainGroup[],
    henchmen: IHenchmen[]
  );
  constructor(
    heroes: IHero[] = LEGENDARY.heroes,
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    masterminds: AbstractMastermind[] = LEGENDARY.masterminds!,
    villains: IVillainGroup[] = LEGENDARY.villains!,
    henchmen: IHenchmen[] = LEGENDARY.henchmen!
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  ) {
    this._heroStore = new MultiCardStore(heroes);
    this._mastermindStore = new MultiCardStore(masterminds);
    this._villainStore = new MultiCardStore(villains);
    this._henchmenStore = new MultiCardStore(henchmen);
  }

  /**
   * Resets the stores, removing any picked cards
   */
  public reset() {
    this._henchmenStore.resetStore();
    this._heroStore.resetStore();
    this._mastermindStore.resetStore();
    this._villainStore.resetStore();
  }
}

interface Build {
  build(): StoreOfStores;
}

interface StepD {
  withHenchmenGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): Build;
}

interface StepC {
  withVillainGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepD;
}

interface StepB {
  withMastermindGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepC;
}

interface StepA {
  withHeroGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepB;
}

export class StoreBuilder implements StepA, StepB, StepC, StepD, Build {
  private readonly _heroGamesets: GameSet[] = [];
  private readonly _villainGamesets: GameSet[] = [];
  private readonly _mastermindGamesets: GameSet[] = [];
  private readonly _henchmenGamesets: GameSet[] = [];

  withHeroGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepB {
    this._heroGamesets.push(gameset);
    this._heroGamesets.push(...otherGamesets);
    return this;
  }

  withVillainGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepD {
    this._villainGamesets.push(gameset);
    this._villainGamesets.push(...otherGamesets);
    return this;
  }

  withMastermindGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepC {
    this._mastermindGamesets.push(gameset);
    this._mastermindGamesets.push(...otherGamesets);
    return this;
  }

  withHenchmenGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): Build {
    this._henchmenGamesets.push(gameset);
    this._henchmenGamesets.push(...otherGamesets);
    return this;
  }

  withSingleGameset(gameset: GameSet): Build {
    this._heroGamesets.push(gameset);
    this._villainGamesets.push(gameset);
    this._mastermindGamesets.push(gameset);
    this._henchmenGamesets.push(gameset);
    return this;
  }

  build(): StoreOfStores {
    const heroes: IHero[] = this._heroGamesets.flatMap(
      (gameSet) => gameSet.heroes
    );

    const masterminds: AbstractMastermind[] = this._mastermindGamesets
      .flatMap((gameSet) => gameSet.masterminds)
      .filter((mastermind): mastermind is AbstractMastermind => !!mastermind);

    const villains: IVillainGroup[] = this._villainGamesets
      .flatMap((gameSet) => gameSet.villains)
      .filter((villain): villain is IVillainGroup => !!villain);

    const henchmen: IHenchmen[] = this._henchmenGamesets
      .flatMap((gameSet) => gameSet.henchmen)
      .filter((henchmen): henchmen is IHenchmen => !!henchmen);

    return new StoreOfStores(heroes, masterminds, villains, henchmen);
  }
}
