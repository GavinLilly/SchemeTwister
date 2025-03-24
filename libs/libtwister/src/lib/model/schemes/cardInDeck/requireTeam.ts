import { CardStore } from '../../../factories/cardStore';
import { Random } from '../../../utils/random';
import { Hero } from '../../cards/hero';
import { ITeam } from '../../interfaces/team.interface';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireTeam implements IRequireCardBehaviour<Hero> {
  constructor(private readonly _team: ITeam) {}

  getRequiredCard(store: CardStore<Hero>): Hero | Hero[] {
    const teamHeroes = store.availableCards.filter(
      (hero) => hero.team === this._team
    );

    return Random.choice(teamHeroes);
  }
}
