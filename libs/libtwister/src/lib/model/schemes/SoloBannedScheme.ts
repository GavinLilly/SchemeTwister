import { SinglePlayerError } from '../errors/SinglePlayerError';
import { IGameSetup } from '../interfaces/gameSetup.interface';

import { IGetSetupConfig, Scheme } from './Scheme';

export class SoloBannedScheme extends Scheme {
  public override getSetup(config: IGetSetupConfig): IGameSetup {
    if (config.numPlayers === 1) {
      throw new SinglePlayerError();
    }

    return super.getSetup(config);
  }
}
