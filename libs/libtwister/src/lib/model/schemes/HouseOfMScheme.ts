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
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireHero,
} from './cardInDeck';

export class HouseOfMScheme extends RequireCardInDeckScheme<Hero> {
  constructor(scheme: SchemeMinusRules, private _required: Hero) {
    super(
      scheme,
      new RequireCard(_required),
      new RequireHero(),
      DECK_TYPE.villain
    );
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
    const xMenHeroes = store.heroStore.pickRandom(
      4,
      (hero) => hero.team === X_MEN
    ) as Hero[];
    const otherHeroes = store.heroStore.pickRandom(
      2,
      (hero) => hero.team !== X_MEN && hero !== this._required
    ) as Hero[];

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
