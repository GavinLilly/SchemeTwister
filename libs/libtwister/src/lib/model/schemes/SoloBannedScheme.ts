import { SinglePlayerError } from '../errors';
import { IGameSetup } from '../interfaces';

import { IGetSetupConfig, Scheme } from './Scheme';

export class SoloBannedScheme extends Scheme {
  public override getSetup(config: IGetSetupConfig): IGameSetup {
    if (config.numPlayers === 1) {
      throw new SinglePlayerError();
    }

    return super.getSetup(config);
  }
}
