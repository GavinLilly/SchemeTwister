import { StoreOfStores } from '../../factories/storeOfStores';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  SchemeMinusRules,
  VillainDeckMinimal,
} from '../interfaces';
import { Mastermind } from '../mastermind';
import { NumPlayers } from '../types';
import { VillainGroup } from '../villainGroup';

import { Scheme } from './Scheme';

export class RequireVillainInAdditionalDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _requiredVillain: VillainGroup
  ) {
    super(scheme);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): IGameSetup {
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
