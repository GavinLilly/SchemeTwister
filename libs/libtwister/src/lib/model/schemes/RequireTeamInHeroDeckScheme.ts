import { StoreOfStores } from '../../factories';
import { randomize } from '../../utils/randomize';
import { Mastermind } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  ITeam,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';

export class RequireTeamInHeroDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _team: ITeam) {
    super(scheme);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
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
