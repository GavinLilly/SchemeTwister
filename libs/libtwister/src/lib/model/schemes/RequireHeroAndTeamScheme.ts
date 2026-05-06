import { StoreOfStores } from '../../factories';
import { Hero } from '../cards/hero';
import { IHeroDeck, INumPlayerRules, ITeam } from '../interfaces';
import { DECK_TYPE, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireHero,
} from './cardInDeck';

export class RequireHeroAndTeamScheme extends RequireCardInDeckScheme<Hero> {
  constructor(
    scheme: SchemeMinusRules,
    private readonly _requiredHero: Hero,
    private readonly _requiredTeam: ITeam,
    private readonly _numFromRequiredTeam: number,
    private readonly _numNotFromRequiredTeam: number
  ) {
    super(
      scheme,
      new RequireCard(_requiredHero),
      new RequireHero(),
      DECK_TYPE.villain
    );
  }

  protected override initialiseHeroDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): IHeroDeck {
    const requiredTeamHeroes = store.heroStore.pickRandom({
      count: this._numFromRequiredTeam,
      filter: (hero) => hero.team === this._requiredTeam,
    });
    const otherHeroes = store.heroStore.pickRandom({
      count: this._numNotFromRequiredTeam,
      filter: (hero) =>
        hero.team !== this._requiredTeam && hero !== this._requiredHero,
    });

    const superDeck = super.initialiseHeroDeck(rules, store, numPlayers);

    return {
      ...superDeck,
      heroes: Scheme.addToDeck(
        superDeck.heroes ?? [],
        otherHeroes[0],
        rules.heroDeck.numHeroes,
        otherHeroes[1],
        ...requiredTeamHeroes
      ),
    };
  }
}
