import { StoreOfStores } from '../../factories/storeOfStores';
import { randomize } from '../../utils/randomize';
import { AbstractMastermind } from '../AbstractMastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHero,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireHeroNameInAdditionalDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _heroName: string) {
    super(scheme);
  }

  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): Promise<IGameSetup> {
    const heroes: IHero[] = store.heroStore.availableCards.filter((hero) =>
      hero.name.toLowerCase().includes(this._heroName.toLowerCase())
    );

    if (heroes.length > 0) {
      const hero = randomize(heroes, 1)[0];

      const pickedHero = store.heroStore.getOne(hero.id);

      partialAdditionalDeck.heroes = Scheme.addToDeck(
        partialAdditionalDeck.heroes,
        pickedHero,
        this.rules[numPlayers].additionalDeck?.deck?.numHeroes
      );

      return await super.getSetup(
        numPlayers,
        selectedMastermind,
        store,
        advancedSolo,
        partialHeroDeck,
        partialVillainDeck,
        partialAdditionalDeck
      );
    } else {
      throw new Error(
        `No card with ${this._heroName} in it's name is available to be selected`
      );
    }
  }
}
