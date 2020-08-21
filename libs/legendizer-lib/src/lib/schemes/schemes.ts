import { CardSet } from '../cardSet';
import { DarkCity } from './darkCity.schemes';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.schemes';
import { HeroesOfAsgard } from "./heroesOfAsgard.schemes";
import { Legendary } from './legendary.schemes';
import { IScheme } from './scheme.interface';

export class Schemes extends CardSet<IScheme> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard;
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy

  public static readonly ALL = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD),
    ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY)
  ];
}
