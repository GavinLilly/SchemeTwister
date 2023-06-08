import { StoreOfStores } from '../../factories/storeOfStores';
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

export class RequireHeroInAdditionalDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _requiredHero: Hero) {
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
    const hero = store.heroStore.getOne(this._requiredHero.id);

    partialAdditionalDeck.heroes = Scheme.addToDeck(
      partialAdditionalDeck.heroes,
      hero,
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
