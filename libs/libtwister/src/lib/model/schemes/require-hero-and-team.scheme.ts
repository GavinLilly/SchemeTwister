import { StoreOfStores } from '../../stores/store-of-stores';
import { Hero } from '../cards/hero';
import { DECK_TYPE } from '../constants/deck-type.const';
import { HeroDeck } from '../interfaces/deck.interface';
import { NumPlayerRules } from '../interfaces/rules.interface';
import { Team } from '../interfaces/team.interface';
import { SchemeMinusRules } from '../types/scheme-minus-rules.type';

import { RequireCardInDeckScheme } from './cardInDeck/require-card-in-deck.scheme';
import { RequireCard } from './cardInDeck/require-card.behaviour';
import { RequireHero } from './cardInDeck/require-hero.behaviour';
import { Scheme } from './scheme';

export class RequireHeroAndTeamScheme extends RequireCardInDeckScheme<Hero> {
  constructor(
    scheme: SchemeMinusRules,
    private readonly _requiredHero: Hero,
    private readonly _requiredTeam: Team,
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
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): HeroDeck {
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
