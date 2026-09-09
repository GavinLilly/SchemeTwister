import { StoreOfStores } from '../../factories/storeOfStores';
import { Hero } from '../cards/hero';
import { IHeroDeck } from '../interfaces/deck.interface';
import { INumPlayerRules } from '../interfaces/rules.interface';
import { ITeam } from '../interfaces/team.interface';
import { DECK_TYPE } from '../types/deckType.type';
import { SchemeMinusRules } from '../types/schemeMinusRules.type';

import { RequireCard } from './cardInDeck/requireCard';
import { RequireCardInDeckScheme } from './cardInDeck/requireCardInDeckScheme';
import { RequireHero } from './cardInDeck/requireHero';

import { Scheme } from './Scheme';

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
