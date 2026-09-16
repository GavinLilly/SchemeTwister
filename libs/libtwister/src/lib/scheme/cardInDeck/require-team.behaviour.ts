import { Hero } from '../../hero/hero.model';
import { Team } from '../../shared/team.interface';
import { randomize } from '../../shared/utils/randomize';
import { CardStore } from '../../store/card-store';

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
