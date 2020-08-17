import { CardSet } from '../cardSet';
import { IVillainGroup } from './villainGroup.interface';
import { Legendary } from './legendary.villains';
import { DarkCity } from './darkCity.villains';
import { HeroesOfAsgard } from "./heroesOfAsgard.villains";

export class VillainGroups extends CardSet<IVillainGroup> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard

  public static readonly ALL = [
    ...Object.values(VillainGroups.LEGENDARY),
    ...Object.values(VillainGroups.DARK_CITY),
    ...Object.values(VillainGroups.HEROES_OF_ASGARD)
  ];
}
