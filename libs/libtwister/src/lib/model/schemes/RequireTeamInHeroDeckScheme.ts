import { MultiCardStore } from '../../factories';
import { randomize } from '../../utils/randomize';
import { AbstractMastermind } from '../AbstractMastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  IHero,
  ITeam,
  IVillainGroup,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireTeamInHeroDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _team: ITeam) {
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
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const teamHeroes = heroStore.availableCards.filter(
      (merc) => merc.team === this._team
    );

    const hero = randomize(teamHeroes, 1)[0];

    const heroPicked = heroStore.getOne(hero.id);

    partialHeroDeck.heroes = Scheme.addToDeck(
      partialHeroDeck.heroes,
      heroPicked,
      this.rules[numPlayers].heroDeck.numHeroes
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
