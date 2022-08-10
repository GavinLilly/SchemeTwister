import { X_MEN } from '../../data/teams';
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

import { RequireHeroInVillainDeckScheme } from './RequireHeroInVillainDeckScheme';
import { Scheme } from './Scheme';

export class HouseOfMScheme extends RequireHeroInVillainDeckScheme {
  constructor(scheme: SchemeMinusRules, requiredHero: IHero) {
    super(scheme, requiredHero);
  }

  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const xMenHeroes = heroStore.getManyRandom(
      4,
      (hero) => hero.team === X_MEN
    );
    const otherHeroes = heroStore.getManyRandom(
      2,
      (hero) => hero.team !== X_MEN && hero !== this.requiredHero
    );

    partialHeroDeck.heroes = Scheme.addToDeck(
      partialHeroDeck.heroes,
      otherHeroes[0],
      this.rules[numPlayers].heroDeck.numHeroes,
      otherHeroes[1],
      ...xMenHeroes
    );

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
