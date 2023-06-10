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

export class RequireHenchmenInVillainDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _requiredHenchmen: Henchmen) {
    super(scheme);
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
    const henchmen = store.henchmenStore.getOne(this._requiredHenchmen.id);

    partialVillainDeck.henchmen = Scheme.addToDeck(
      partialVillainDeck.henchmen,
      henchmen,
      this.rules[numPlayers].villainDeck.numHenchmenGroups
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
