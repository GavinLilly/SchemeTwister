import { StoreOfStores } from '../../factories/storeOfStores';
import { AbstractMastermind } from '../AbstractMastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHero,
  IVillainGroup,
  SchemeMinusRules,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers } from '../types';

import { RequireVillainsInVillainDeckScheme } from './RequireVillainsInVillainDeckScheme';
import { Scheme } from './Scheme';

export class TheDarkPhoenixSagaScheme extends RequireVillainsInVillainDeckScheme {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: IVillainGroup,
    private _preferredHero: IHero,
    private _backupHero: IHero
  ) {
    super(scheme, requiredVillain);
  }

  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const hero = store.heroStore.isAvailable(this._preferredHero)
      ? this._preferredHero
      : this._backupHero;

    const pickedHero = store.heroStore.getOne(hero.id);

    partialVillainDeck.heroes = Scheme.addToDeck(
      partialVillainDeck.heroes,
      pickedHero,
      this.rules[numPlayers].villainDeck.numHeroes
    );

    return await super.getSetup(
      numPlayers,
      selectedMastermind,
      store,
      advancedSolo,
      partialHeroDeck,
      partialVillainDeck,
      partialAdditionalDeck
    );
  }
}
