import { StoreOfStores } from '../../factories/storeOfStores';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  SchemeMinusRules,
  VillainDeckMinimal,
} from '../interfaces';
import { Mastermind } from '../mastermind';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireHenchmenInVillainDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _requiredHenchmen: IHenchmen) {
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
