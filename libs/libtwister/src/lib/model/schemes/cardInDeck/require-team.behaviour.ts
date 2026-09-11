import { CardStore } from '../../../stores/card-store';
import { randomize } from '../../../utils/randomize';
import { Hero } from '../../cards/hero';
import { Team } from '../../interfaces/team.interface';

import { RequireCardBehaviour } from './require-card-behaviour.interface';

export class RequireTeam implements RequireCardBehaviour<Hero> {
  constructor(private readonly _team: Team) {}

  getRequiredCard(store: CardStore<Hero>): Hero | Hero[] {
    const teamHeroes = store.availableCards.filter(
      (hero) => hero.team === this._team
    );

    return randomize(teamHeroes);
  }
}
