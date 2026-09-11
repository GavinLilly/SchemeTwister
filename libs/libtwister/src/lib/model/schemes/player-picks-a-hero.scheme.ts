import { v4 as uuidV4 } from 'uuid';

import { StoreOfStores } from '../../stores/store-of-stores';
import { Hero } from '../cards/hero';
import { HeroDeck } from '../interfaces/deck.interface';
import { NumPlayerRules } from '../interfaces/rules.interface';

import { Scheme } from './scheme';

export class PlayerPicksAHeroScheme extends Scheme {
  protected override initialiseHeroDeck(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): HeroDeck {
    const nonPickedHeroes: Hero[] = [];
    for (let i = 1; i <= numPlayers; i++) {
      nonPickedHeroes.push(
        new Hero({
          gameSet: this.gameSet,
          id: uuidV4(),
          name: `Player ${i} picks a hero`,
        })
      );
    }

    return {
      heroes: Scheme.addToDeck(
        [],
        nonPickedHeroes[0],
        rules.villainDeck.numVillainGroups,
        ...nonPickedHeroes.slice(1)
      ),
    };
  }
}
