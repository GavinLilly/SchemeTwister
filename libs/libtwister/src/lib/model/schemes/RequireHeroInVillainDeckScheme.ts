import { StoreOfStores } from '../../factories/storeOfStores';
import { Hero } from '../hero';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { Mastermind } from '../mastermind';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireHeroInVillainDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, protected requiredHero: Hero) {
    super(scheme);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const hero = store.heroStore.getOne(this.requiredHero.id);

    partialVillainDeck.heroes = Scheme.addToDeck(
      partialVillainDeck.heroes,
      hero,
      this.rules[numPlayers].villainDeck.numHeroes
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
