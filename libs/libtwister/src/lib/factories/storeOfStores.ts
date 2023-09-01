import {
  Mastermind,
  VillainGroup,
  Henchmen,
  Hero,
  ICardType,
  IPlayableObject,
} from '../model';
import { CardType } from '../model/types/cardType.type';

import { CardStore } from './cardStore';

export class StoreOfStores {
  private _mastermindStore!: CardStore<Mastermind>;
  private _heroStore!: CardStore<Hero>;
  private _villainStore!: CardStore<VillainGroup>;
  private _henchmenStore!: CardStore<Henchmen>;

  constructor(
    heroes: Hero[],
    masterminds: Mastermind[],
    villains: VillainGroup[],
    henchmen: Henchmen[]
  ) {
    this._heroStore = new CardStore(heroes);
    this._mastermindStore = new CardStore(masterminds);
    this._villainStore = new CardStore(villains);
    this._henchmenStore = new CardStore(henchmen);
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

  public getCardById(
    id: string,
    type: CardType
  ): (IPlayableObject & ICardType) | undefined {
    switch (type) {
      case 'Henchmen':
        return this.henchmenStore.allCardsMap.get(id);
      case 'Hero':
        return this.heroStore.allCardsMap.get(id);
      case 'Mastermind':
        return this.mastermindStore.allCardsMap.get(id);
      case 'Villain Group':
        return this.villainStore.allCardsMap.get(id);
      default:
        return undefined;
    }
  }
}
