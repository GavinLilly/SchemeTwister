import { Mastermind, VillainGroup, Henchmen, Hero } from '../model';

import { MultiCardStore } from './multiCardStore';

export class StoreOfStores {
  private _mastermindStore!: MultiCardStore<Mastermind>;
  private _heroStore!: MultiCardStore<Hero>;
  private _villainStore!: MultiCardStore<VillainGroup>;
  private _henchmenStore!: MultiCardStore<Henchmen>;

  constructor();
  constructor(
    heroes: Hero[],
    masterminds: Mastermind[],
    villains: VillainGroup[],
    henchmen: Henchmen[]
  );
  constructor(
    heroes: Hero[] = [],
    masterminds: Mastermind[] = [],
    villains: VillainGroup[] = [],
    henchmen: Henchmen[] = []
  ) {
    this._heroStore = new MultiCardStore(heroes);
    this._mastermindStore = new MultiCardStore(masterminds);
    this._villainStore = new MultiCardStore(villains);
    this._henchmenStore = new MultiCardStore(henchmen);
  }

  /**
   * The mastermind store and picker
   */
  public get mastermindStore() {
    return this._mastermindStore;
  }

  /**
   * The hero store and picker
   */
  public get heroStore() {
    return this._heroStore;
  }

  /**
   * The villain store and picker
   */
  public get villainStore() {
    return this._villainStore;
  }

  /**
   * The henchmen store and picker
   */
  public get henchmenStore() {
    return this._henchmenStore;
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
