import { CardStore } from '../../../factories';
import { randomize } from '../../../utils/randomize';
import { Hero } from '../../cards';
import { ITeam } from '../../interfaces';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireTeam implements IRequireCardBehaviour<Hero> {
  constructor(private _team: ITeam) {}

  getRequiredCard(store: CardStore<Hero>): Hero | Hero[] {
    const teamHeroes = store.availableCards.filter(
      (hero) => hero.team === this._team
    );

    return randomize(teamHeroes);
  }
}
