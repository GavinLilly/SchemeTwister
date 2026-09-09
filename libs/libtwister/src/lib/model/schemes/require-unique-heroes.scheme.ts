import { IGameSetup } from '../interfaces/game-setup.interface';
import { SchemeMinusRules } from '../types/scheme-minus-rules.type';

import { ISetupConfigWithStore, Scheme } from './scheme';

export class RequireUniqueHeroesScheme extends Scheme {
  private static readonly _maxIterations = 10;

  constructor(scheme: SchemeMinusRules) {
    super(scheme);
  }

  public getSetup(config: Readonly<ISetupConfigWithStore>): IGameSetup {
    let setup: IGameSetup = super.getSetup(config);

    let isHeroesOk = false;
    let iterations = 0;

    while (
      !isHeroesOk &&
      iterations < RequireUniqueHeroesScheme._maxIterations
    ) {
      const heroNames = setup.heroDeck.heroes.map((hero) => hero.name);
      const uniqueHeroNames = new Set(heroNames);

      if (heroNames.length === uniqueHeroNames.size) {
        isHeroesOk = true;
      } else {
        config.store.resetForSetup(setup);
        setup = super.getSetup(config);

        iterations++;
      }
    }

    return setup;
  }
}
