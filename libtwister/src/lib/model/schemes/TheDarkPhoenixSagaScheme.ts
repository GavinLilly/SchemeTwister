import { StoreOfStores } from '../../factories/storeOfStores';
import { Hero } from '../hero';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IVillainGroup,
  SchemeMinusRules,
  VillainDeckMinimal,
} from '../interfaces';
import { Mastermind } from '../mastermind';
import { NumPlayers } from '../types';

import { RequireVillainsInVillainDeckScheme } from './RequireVillainsInVillainDeckScheme';
import { Scheme } from './Scheme';

export class TheDarkPhoenixSagaScheme extends RequireVillainsInVillainDeckScheme {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: IVillainGroup,
    private _preferredHero: Hero,
    private _backupHero: Hero
  ) {
    super(scheme, requiredVillain);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const hero = store.heroStore.isAvailable(this._preferredHero)
      ? this._preferredHero
      : this._backupHero;

    const pickedHero = store.heroStore.getOne(hero.id);

    partialVillainDeck.heroes = Scheme.addToDeck(
      partialVillainDeck.heroes,
      pickedHero,
      this.rules[numPlayers].villainDeck.numHeroes
    );

    return super.getSetup(
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
