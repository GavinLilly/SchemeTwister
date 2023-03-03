import { StoreOfStores } from '../../factories/storeOfStores';
import { randomize } from '../../utils/randomize';
import { AbstractMastermind } from '../AbstractMastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  ITeam,
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
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const teamHeroes = store.heroStore.availableCards.filter(
      (merc) => merc.team === this._team
    );

    const hero = randomize(teamHeroes, 1)[0];

    const heroPicked = store.heroStore.getOne(hero.id);

    partialHeroDeck.heroes = Scheme.addToDeck(
      partialHeroDeck.heroes,
      heroPicked,
      this.rules[numPlayers].heroDeck.numHeroes
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
