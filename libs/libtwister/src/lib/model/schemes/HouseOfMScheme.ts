import { X_MEN } from '../../data/teams';
import { StoreOfStores } from '../../factories';
import { Hero, Mastermind } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { DECK_TYPE, NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';
import { RequireHeroInDeckScheme } from './requireHeroInDeckScheme';

export class HouseOfMScheme extends RequireHeroInDeckScheme {
  constructor(scheme: SchemeMinusRules, required: Hero) {
    super(scheme, required, DECK_TYPE.VILLAIN);
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
      (hero) => hero.team !== X_MEN && hero !== this.required
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
