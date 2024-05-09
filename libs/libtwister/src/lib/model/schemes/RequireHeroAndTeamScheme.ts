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
    private _requiredHero: Hero,
    private _requiredTeam: ITeam,
    private _numFromRequiredTeam: number,
    private _numNotFromRequiredTeam: number
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
    const requiredTeamHeroes = store.heroStore.pickRandom(
      this._numFromRequiredTeam,
      (hero) => hero.team === this._requiredTeam
    ) as Hero[];
    const otherHeroes = store.heroStore.pickRandom(
      this._numNotFromRequiredTeam,
      (hero) => hero.team !== this._requiredTeam && hero !== this._requiredHero
    ) as Hero[];

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
