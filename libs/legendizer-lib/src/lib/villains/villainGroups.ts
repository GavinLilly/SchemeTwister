import { CardSet } from '../cardSet';
import { AntMan } from './antMan.villains';
import { DarkCity } from './darkCity.villains';
import { FantasticFour } from './fantasticFour.villains';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.villains';
import { HeroesOfAsgard } from "./heroesOfAsgard.villains";
import { Legendary } from './legendary.villains';
import { PaintTheTownRed } from './paintTheTown.villains';
import { IVillainGroup } from './villainGroup.interface';

export class VillainGroups extends CardSet<IVillainGroup> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy
  public static readonly ANT_MAN = AntMan;
  public static readonly FANTASTIC_FOUR = FantasticFour;
  public static readonly PAINT_THE_TOWN_RED = PaintTheTownRed

  public static readonly ALL = [
    ...Object.values(VillainGroups.LEGENDARY),
    ...Object.values(VillainGroups.DARK_CITY),
    ...Object.values(VillainGroups.HEROES_OF_ASGARD),
    ...Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(VillainGroups.ANT_MAN),
    ...Object.values(VillainGroups.FANTASTIC_FOUR),
    ...Object.values(VillainGroups.PAINT_THE_TOWN_RED)
  ];
}
