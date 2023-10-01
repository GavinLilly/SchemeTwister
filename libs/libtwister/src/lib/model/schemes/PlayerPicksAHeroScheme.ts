import { Hero } from '../cards';
import { IGameSetup } from '../interfaces';

import { IGetSetupConfig, Scheme } from './Scheme';

export class PlayerPicksAHeroScheme extends Scheme {
  public override getSetup(config: IGetSetupConfig): IGameSetup {
    const nonPickedHeroes: Hero[] = [];
    for (let i = 1; i <= config.numPlayers; i++) {
      nonPickedHeroes.push(
        new Hero({
          gameSet: this.gameSet,
          id: `79131ea5-5bea-4ae2-89e6-d024cda16a5${i}`,
          name: `Player ${i} picks a hero`,
        })
      );
    }

    return super.getSetup({
      ...config,
      partialHeroDeck: {
        heroes: Scheme.addToDeck(
          config.partialHeroDeck?.heroes ?? new Set(),
          nonPickedHeroes[0],
          this.rules[config.numPlayers].villainDeck.numVillainGroups,
          ...nonPickedHeroes.slice(1)
        ),
      },
    });
  }
}
