import { StoreOfStores } from '../../factories';
import { Hero } from '../cards/hero';
import { INumPlayerRules, IHeroDeck } from '../interfaces';

import { Scheme } from './Scheme';

export class PlayerPicksAHeroScheme extends Scheme {
  protected override initialiseHeroDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): IHeroDeck {
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
