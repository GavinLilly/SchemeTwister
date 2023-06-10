import { StoreOfStores } from '../../factories/storeOfStores';
import { Mastermind } from '../cards';
import { SinglePlayerError } from '../errors';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class SoloBannedScheme extends Scheme {
  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    if (numPlayers === 1) {
      throw new SinglePlayerError();
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
