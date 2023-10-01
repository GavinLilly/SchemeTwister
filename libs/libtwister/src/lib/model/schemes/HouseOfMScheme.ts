import { X_MEN } from '../../data/teams';
import { Hero } from '../cards';
import { IGameSetup } from '../interfaces';
import { DECK_TYPE, SchemeMinusRules } from '../types';

import { IGetSetupConfig, Scheme } from './Scheme';
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

  public override getSetup(config: IGetSetupConfig): IGameSetup {
    const xMenHeroes = config.store.heroStore.pickRandom(
      4,
      (hero) => hero.team === X_MEN
    ) as Hero[];
    const otherHeroes = config.store.heroStore.pickRandom(
      2,
      (hero) => hero.team !== X_MEN && hero !== this._required
    ) as Hero[];

    return super.getSetup({
      ...config,
      partialHeroDeck: {
        heroes: Scheme.addToDeck(
          config.partialHeroDeck?.heroes ?? new Set(),
          otherHeroes[0],
          this.rules[config.numPlayers].heroDeck.numHeroes,
          otherHeroes[1],
          ...xMenHeroes
        ),
      },
    });
  }
}
