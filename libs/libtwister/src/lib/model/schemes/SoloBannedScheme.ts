import { SinglePlayerError } from '../errors/SinglePlayerError';
import { IGameSetup } from '../interfaces/gameSetup.interface';

import { ISetupConfigWithStore, Scheme } from './Scheme';

export class SoloBannedScheme extends Scheme {
  public override getSetup(config: ISetupConfigWithStore): IGameSetup {
    if (config.numPlayers === 1) {
      throw new SinglePlayerError();
    }

    return super.getSetup(config);
  }
}
