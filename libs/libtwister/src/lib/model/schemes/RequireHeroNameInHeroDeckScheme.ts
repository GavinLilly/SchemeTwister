import { StoreOfStores } from '../../factories';
import { randomize } from '../../utils/randomize';
import { Mastermind, Hero } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';

export class RequireHeroNameInHeroDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _heroName: string,
    private _numberRequired = 1,
    private _removeOthers = false
  ) {
    super(scheme);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const heroes: Hero[] = store.heroStore.availableCards.filter((hero) =>
      hero.name.toLowerCase().includes(this._heroName.toLowerCase())
    );

    if (heroes.length === 0) {
      throw new Error(
        `No card with ${this._heroName} in it's name is available to be selected`
      );
    }

    const chosenHeroes = randomize(heroes, this._numberRequired);

    const pickedHeroes = chosenHeroes.map((hero) =>
      store.heroStore.getOne(hero.id)
    );

    heroes.forEach((hero) => store.heroStore.removeCard(hero.id));

    partialHeroDeck.heroes =
      pickedHeroes.length > 1
        ? Scheme.addToDeck(
            partialHeroDeck.heroes,
            pickedHeroes[0],
            this.rules[numPlayers].heroDeck.numHeroes,
            ...pickedHeroes.slice(1)
          )
        : Scheme.addToDeck(
            partialHeroDeck.heroes,
            pickedHeroes[0],
            this.rules[numPlayers].heroDeck.numHeroes
          );

    if (this._removeOthers) {
      heroes
        .filter((hero) => !pickedHeroes.includes(hero))
        .forEach((hero) => store.heroStore.removeCard(hero.id));
    }

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
