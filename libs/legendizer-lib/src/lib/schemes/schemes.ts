import { CardSet } from '../cardSet';
import { Legendary } from './legendary.schemes';
import { DarkCity } from './darkCity.schemes';
import { HeroesOfAsgard } from "./heroesOfAsgard.schemes";
import { IScheme } from './scheme.interface';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.schemes';

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
