import isUUID from 'validator/lib/isUUID';

import {
  VillainGroup,
  Henchmen,
  Hero,
  ICardType,
  IPlayableObject,
} from '../model';

import { CardStore } from './cardStore';
import { MastermindStore, MastermindType } from './mastermindStore';

export class StoreOfStores {
  private _mastermindStore!: CardStore<MastermindType>;
  private _heroStore!: CardStore<Hero>;
  private _villainStore!: CardStore<VillainGroup>;
  private _henchmenStore!: CardStore<Henchmen>;

  constructor(
    heroes: Hero[],
    masterminds: MastermindType[],
    villains: VillainGroup[],
    henchmen: Henchmen[]
  ) {
    this._heroStore = new CardStore(heroes);
    this._mastermindStore = new MastermindStore(masterminds);
    this._villainStore = new CardStore(villains);
    this._henchmenStore = new CardStore(henchmen);
  }

  /**
   * The mastermind store and picker
   * @returns A store for Masterminds
   */
  public get mastermindStore() {
    return this._mastermindStore;
  }

  /**
   * The hero store and picker
   * @returns A store for Heroes
   */
  public get heroStore() {
    return this._heroStore;
  }

  /**
   * The villain store and picker
   * @returns A store for Villains
   */
  public get villainStore() {
    return this._villainStore;
  }

  /**
   * The henchmen store and picker
   * @returns A store for Henchmen
   */
  public get henchmenStore() {
    return this._henchmenStore;
  }

  private get _allStores() {
    return [
      this.heroStore,
      this.villainStore,
      this.henchmenStore,
      this.mastermindStore,
    ];
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

  public getCardById(id: string): (IPlayableObject & ICardType) | undefined {
    if (!isUUID(id)) {
      throw new Error(`The provided card ID (${id}) is not a valid UUID`);
    }

    for (const store of this._allStores) {
      try {
        return store.get(id);
      } catch (e) {
        console.log(
          `Error caught while looking for card ID (${id}) in ${store.getStoreType()} store. This is expected so continuing to the next store...`
        );
      }
    }

    return undefined;
  }
}
