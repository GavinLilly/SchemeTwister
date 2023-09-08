import { StoreOfStores } from '../../factories/storeOfStores';
import { Mastermind, Hero } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class PlayerPicksAHeroScheme extends Scheme {
  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const nonPickedHeroes: Hero[] = [];
    for (let i = 1; i <= numPlayers; i++) {
      nonPickedHeroes.push(
        new Hero({
          gameSet: this.gameSet,
          id: `79131ea5-5bea-4ae2-89e6-d024cda16a5${i}`,
          name: `Player ${i} picks a hero`,
        })
      );
    }

    partialHeroDeck.heroes = Scheme.addToDeck(
      partialHeroDeck.heroes ?? new Set(),
      nonPickedHeroes[0],
      this.rules[numPlayers].villainDeck.numVillainGroups,
      ...nonPickedHeroes.slice(1)
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
