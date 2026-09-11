import { GameSetup } from '../interfaces/game-setup.interface';

import { Scheme, SchemeConfig, SetupConfigWithStore } from './scheme';

export class RequireUniqueHeroesScheme extends Scheme {
  private static readonly _maxIterations = 10;

  constructor(scheme: SchemeConfig) {
    super(scheme);
  }

  public override getSetup(config: Readonly<SetupConfigWithStore>): GameSetup {
    let setup: GameSetup = super.getSetup(config);

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
