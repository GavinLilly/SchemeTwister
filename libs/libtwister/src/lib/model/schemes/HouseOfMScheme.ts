import { Hero } from '../cards/hero';
import { ITeam } from '../interfaces';
import { IGameSetup } from '../interfaces/gameSetup.interface';
import { DECK_TYPE, SchemeMinusRules } from '../types';

import { IGetSetupConfig, Scheme } from './Scheme';
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireHero,
} from './cardInDeck';

export class HouseOfMScheme extends RequireCardInDeckScheme<Hero> {
  constructor(
    scheme: SchemeMinusRules,
    private _requiredHero: Hero,
    private _requiredTeam: ITeam
  ) {
    super(
      scheme,
      new RequireCard(_requiredHero),
      new RequireHero(),
      DECK_TYPE.villain
    );
  }

  public override getSetup(config: IGetSetupConfig): IGameSetup {
    const xMenHeroes = config.store.heroStore.pickRandom(
      4,
      (hero) => hero.team === this._requiredTeam
    ) as Hero[];
    const otherHeroes = config.store.heroStore.pickRandom(
      2,
      (hero) => hero.team !== this._requiredTeam && hero !== this._requiredHero
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
