import { v4 as uuidV4 } from 'uuid';

import { HeroDeck } from '../game-setup/deck/hero-deck.model';
import { NumPlayerRules } from '../game-setup/rules/num-player-rules';
import { Hero } from '../hero/hero.model';
import { StoreOfStores } from '../store/store-of-stores';

import { Scheme } from './scheme.model';

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
