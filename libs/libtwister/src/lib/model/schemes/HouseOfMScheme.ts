import { X_MEN } from '../../data/teams';
import { StoreOfStores } from '../../factories';
import { Hero, Mastermind } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers, SchemeMinusRules } from '../types';

import { RequireHeroInVillainDeckScheme } from './RequireHeroInVillainDeckScheme';
import { Scheme } from './Scheme';

export class HouseOfMScheme extends RequireHeroInVillainDeckScheme {
  constructor(scheme: SchemeMinusRules, requiredHero: Hero) {
    super(scheme, requiredHero);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const xMenHeroes = store.heroStore.getManyRandom(
      4,
      (hero) => hero.team === X_MEN
    );
    const otherHeroes = store.heroStore.getManyRandom(
      2,
      (hero) => hero.team !== X_MEN && hero !== this.requiredHero
    );

    partialHeroDeck.heroes = Scheme.addToDeck(
      partialHeroDeck.heroes ?? [],
      otherHeroes[0],
      this.rules[numPlayers].heroDeck.numHeroes,
      otherHeroes[1],
      ...xMenHeroes
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
