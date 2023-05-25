import { StoreOfStores } from '../../factories/storeOfStores';
import { randomize } from '../../utils/randomize';
import { Hero } from '../hero';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  SchemeMinusRules,
  VillainDeckMinimal,
} from '../interfaces';
import { Mastermind } from '../mastermind';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireHeroNameInAdditionalDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _heroName: string) {
    super(scheme);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): IGameSetup {
    const heroes: Hero[] = store.heroStore.availableCards.filter((hero) =>
      hero.name.toLowerCase().includes(this._heroName.toLowerCase())
    );

    if (heroes.length === 0) {
      throw new Error(
        `No card with ${this._heroName} in it's name is available to be selected`
      );
    }

    const hero = randomize(heroes, 1)[0];

    const pickedHero = store.heroStore.getOne(hero.id);

    partialAdditionalDeck.heroes = Scheme.addToDeck(
      partialAdditionalDeck.heroes,
      pickedHero,
      this.rules[numPlayers].additionalDeck?.deck?.numHeroes
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
