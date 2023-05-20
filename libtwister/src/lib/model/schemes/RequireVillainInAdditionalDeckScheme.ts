import { StoreOfStores } from '../../factories/storeOfStores';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IVillainGroup,
  SchemeMinusRules,
  VillainDeckMinimal,
} from '../interfaces';
import { Mastermind } from '../mastermind';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireVillainInAdditionalDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _requiredVillain: IVillainGroup
  ) {
    super(scheme);
  }

  public override async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): Promise<IGameSetup> {
    const villain = store.villainStore.getOne(this._requiredVillain.id);

    if (
      this.rules[numPlayers].additionalDeck &&
      this.rules[numPlayers].additionalDeck?.deck &&
      this.rules[numPlayers].additionalDeck?.deck?.numVillainGroups
    ) {
      partialAdditionalDeck.villains = Scheme.addToDeck(
        partialAdditionalDeck.villains,
        villain,
        this.rules[numPlayers].additionalDeck?.deck?.numVillainGroups
      );
    }

    return await super.getSetup(
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
