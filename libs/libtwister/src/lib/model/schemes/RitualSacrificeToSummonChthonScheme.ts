import { StoreOfStores } from '../../factories/storeOfStores';
import {
  IGameSetup,
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  SchemeMinusRules,
  IVillainGroup,
} from '../interfaces';
import { Mastermind } from '../mastermind';
import { NumPlayers, numPlayers as numPlayersCount } from '../types';

import { RequireVillainsInVillainDeckScheme } from './RequireVillainsInVillainDeckScheme';

export class RitualSacrificeToSummonChthonScheme extends RequireVillainsInVillainDeckScheme {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: IVillainGroup,
    numberRequired = 1,
    removeOthers = false,
    ...requiredVillains: IVillainGroup[]
  ) {
    super(
      scheme,
      requiredVillain,
      numberRequired,
      removeOthers,
      ...requiredVillains
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
