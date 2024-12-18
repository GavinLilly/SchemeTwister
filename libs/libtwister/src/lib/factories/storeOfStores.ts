import { GameSetup } from '../model';
import { Henchmen, Hero, VillainGroup } from '../model/cards';
import { ICardType, IGameSetup, IPlayableObject } from '../model/interfaces';

import { CardStore } from './cardStore';
import { MastermindStore, MastermindType } from './mastermindStore';

export class StoreOfStores {
  private readonly _mastermindStore!: CardStore<MastermindType>;
  private readonly _heroStore!: CardStore<Hero>;
  private readonly _villainStore!: CardStore<VillainGroup>;
  private readonly _henchmenStore!: CardStore<Henchmen>;

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
    for (const store of this._allStores) {
      const card = store.get(id);
      if (card !== undefined) {
        return card;
      }
    }

    return undefined;
  }

  public resetForSetup(setup: IGameSetup) {
    const gameSetup = new GameSetup(setup);

    for (const card of gameSetup.getSelectedHeroes()) {
      this._heroStore.resetCard(card);
    }

    for (const card of gameSetup.getSelectedVillains()) {
      this._villainStore.resetCard(card);
    }

    for (const card of gameSetup.getSelectedHenchmen()) {
      this._henchmenStore.resetCard(card);
    }

    for (const card of gameSetup.getSelectedMasterminds()) {
      this._mastermindStore.resetCard(card);
    }
  }
}
