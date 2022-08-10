import { MultiCardStore } from '../../factories';
import { AbstractMastermind } from '../AbstractMastermind';
import { SinglePlayerError } from '../errors';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class SoloBannedScheme extends Scheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    if (numPlayers === 1) {
      throw new SinglePlayerError();
    } else {
      return await super.getSetup(
        numPlayers,
        selectedMastermind,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore,
        advancedSolo,
        partialHeroDeck,
        partialVillainDeck,
        partialAdditionalDeck
      );
    }
  }
}
