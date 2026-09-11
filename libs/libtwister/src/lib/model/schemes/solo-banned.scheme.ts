import { SinglePlayerError } from '../errors/single-player-error';
import { GameSetup } from '../interfaces/game-setup.interface';

import { Scheme, SetupConfigWithStore } from './scheme';

export class SoloBannedScheme extends Scheme {
  public override getSetup(config: SetupConfigWithStore): GameSetup {
    if (config.numPlayers === 1) {
      throw new SinglePlayerError();
    }

    return super.getSetup(config);
  }
}
