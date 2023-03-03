import { StoreOfStores } from '../../factories/storeOfStores';
import { AbstractMastermind } from '../AbstractMastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireHenchmenInVillainDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _requiredHenchmen: IHenchmen) {
    super(scheme);
  }

  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const henchmen = store.henchmenStore.getOne(this._requiredHenchmen.id);

    partialVillainDeck.henchmen = Scheme.addToDeck(
      partialVillainDeck.henchmen,
      henchmen,
      this.rules[numPlayers].villainDeck.numHenchmenGroups
    );

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
