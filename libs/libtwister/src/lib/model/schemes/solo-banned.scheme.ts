import { SinglePlayerError } from '../errors/single-player-error';
import { IGameSetup } from '../interfaces/game-setup.interface';

import { ISetupConfigWithStore, Scheme } from './scheme';

export class SoloBannedScheme extends Scheme {
  public override getSetup(config: ISetupConfigWithStore): IGameSetup {
    if (config.numPlayers === 1) {
      throw new SinglePlayerError();
    }

    return super.getSetup(config);
  }
}
