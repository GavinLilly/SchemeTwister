import { StoreOfStores } from '../../factories';
import { VillainGroup, Mastermind } from '../cards';
import {
  IGameSetup,
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
} from '../interfaces';
import {
  DECK_TYPE,
  NumPlayers,
  SchemeMinusRules,
  numPlayers as numPlayersCount,
} from '../types';

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

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    if (selectedMastermind.name.includes('Lilith')) {
      numPlayersCount.forEach(
        (num) => (this.rules[num].villainDeck.numTwists = 1)
      );
    }

    return super.getSetup(
      numPlayers,
      selectedMastermind,
      store,
      advancedSolo,
      partialHeroDeck,
      partialVillainDeck,
      partialAdditionalDeck
    );
  }
}
