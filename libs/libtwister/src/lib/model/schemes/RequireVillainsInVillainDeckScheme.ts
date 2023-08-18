import { StoreOfStores } from '../../factories';
import { randomize } from '../../utils/randomize';
import { VillainGroup, Mastermind } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';

export class RequireVillainsInVillainDeckScheme extends Scheme {
  private _requiredVillains: VillainGroup[];

  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: VillainGroup,
    private _numberRequired = 1,
    private _removeOthers = false,
    ...requiredVillains: VillainGroup[]
  ) {
    super(scheme);

    if (_numberRequired > 1 && requiredVillains === undefined) {
      throw new Error(
        'The number of supplied villains must be more than 1 if the number of required villains is more than 1'
      );
    }

    this._requiredVillains = [requiredVillain, ...requiredVillains];
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
    const chosenVillains =
      this._requiredVillains.length === 1
        ? this._requiredVillains
        : randomize(this._requiredVillains, this._numberRequired);

    const villains = chosenVillains.map((villain) =>
      store.villainStore.getOne(villain.id)
    );

    const extraVillains = villains.length > 1 ? villains.slice(1) : [];

    partialVillainDeck.villains = Scheme.addToDeck(
      partialVillainDeck.villains ?? [],
      villains[0],
      this.rules[numPlayers].villainDeck.numVillainGroups,
      ...extraVillains
    );

    if (this._removeOthers) {
      this._requiredVillains
        .filter((villain) => !villains.includes(villain))
        .forEach((villain) => store.villainStore.removeCard(villain.id));
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
