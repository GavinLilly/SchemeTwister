import { BaseModel } from '@legendizer/shared/base/types';
import { IHero } from './hero.interface';
import { Team } from './team.enum';

export class HeroModel extends BaseModel<IHero> implements IHero {
  private static VALUES: HeroModel[] = [];
  team?: Team;

  protected constructor(hero: IHero) {
    super(hero);

    this.team = hero.team;

    HeroModel.VALUES.push(this);
  }

  public static values() {
    return HeroModel.VALUES;
  }
}
