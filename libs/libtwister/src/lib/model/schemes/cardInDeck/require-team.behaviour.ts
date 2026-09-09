import { CardStore } from '../../../stores/card-store';
import { randomize } from '../../../utils/randomize';
import { Hero } from '../../cards/hero';
import { ITeam } from '../../interfaces/team.interface';

import { IRequireCardBehaviour } from './require-card-behaviour.interface';

export class RequireTeam implements IRequireCardBehaviour<Hero> {
  constructor(private readonly _team: ITeam) {}

  getRequiredCard(store: CardStore<Hero>): Hero | Hero[] {
    const teamHeroes = store.availableCards.filter(
      (hero) => hero.team === this._team
    );

    return randomize(teamHeroes);
  }
}
