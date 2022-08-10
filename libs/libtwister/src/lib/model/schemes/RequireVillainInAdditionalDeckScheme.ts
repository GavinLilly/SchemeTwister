import { MultiCardStore } from '../../factories';
import { AbstractMastermind } from '../AbstractMastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireVillainInAdditionalDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _requiredVillain: IVillainGroup
  ) {
    super(scheme);
  }

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
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): Promise<IGameSetup> {
    const villain = villainStore.getOne(this._requiredVillain.id);

    if (
      this.rules[numPlayers].additionalDeck !== undefined &&
      this.rules[numPlayers].additionalDeck?.deck !== undefined &&
      this.rules[numPlayers].additionalDeck?.deck?.numVillainGroups !==
        undefined
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
