import { StoreOfStores } from '../../factories/storeOfStores';
import { randomize } from '../../utils/randomize';
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

    partialVillainDeck.villains =
      villains.length > 1
        ? Scheme.addToDeck(
            partialVillainDeck.villains,
            villains[0],
            this.rules[numPlayers].villainDeck.numVillainGroups,
            ...villains.slice(1)
          )
        : Scheme.addToDeck(
            partialVillainDeck.villains,
            villains[0],
            this.rules[numPlayers].villainDeck.numVillainGroups
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
