import { VillainGroup } from '../cards/villainGroup';
import { IGameSetup } from '../interfaces/gameSetup.interface';
import {
  DECK_TYPE,
  SchemeMinusRules,
  numPlayers as numPlayersCount,
} from '../types';

import { IGetSetupConfig } from './Scheme';
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireVillainGroup,
} from './cardInDeck';

/**
 * This scheme class checks if Lilith is the mastermind and if so it sets the number of twists to 1.
 */
export class RitualSacrificeToSummonChthonScheme extends RequireCardInDeckScheme<VillainGroup> {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: RequireCard<VillainGroup>
  ) {
    super(
      scheme,
      requiredVillain,
      new RequireVillainGroup(),
      DECK_TYPE.villain
    );
  }

  public override getSetup(config: IGetSetupConfig): IGameSetup {
    if (config.selectedMastermind?.name.includes('Lilith')) {
      numPlayersCount.forEach(
        (num) => (this.rules[num].villainDeck.numTwists = 1)
      );
    }

    return super.getSetup(config);
  }
}
