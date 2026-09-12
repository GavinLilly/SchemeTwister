import { SinglePlayerError } from '../errors/single-player-error';
import { GameSetup } from '../game-setup/game-setup.interface';

import { Scheme, SetupConfigWithStore } from './scheme.model';

export class SoloBannedScheme extends Scheme {
  public override getSetup(config: SetupConfigWithStore): GameSetup {
    if (config.numPlayers === 1) {
      throw new SinglePlayerError();
    }

    return super.getSetup(config);
  }
}
