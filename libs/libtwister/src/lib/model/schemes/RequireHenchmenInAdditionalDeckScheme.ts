import { StoreOfStores } from '../../factories';
import { Henchmen, Mastermind } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';

export class RequireHenchmenInAdditionalDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _requiredHenchmen: Henchmen) {
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
    const henchmen = store.henchmenStore.getOne(this._requiredHenchmen.id);

    partialAdditionalDeck.henchmen = Scheme.addToDeck(
      partialAdditionalDeck.henchmen ?? [],
      henchmen,
      this.rules[numPlayers].additionalDeck?.deck?.numHenchmenGroups
    );

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
