import { CardSet } from '../cardSet';
import { IMastermind } from './mastermind.interface';
import { Legendary } from './legendary.masterminds';
import { DarkCity } from './darkCity.masterminds';
import { HeroesOfAsgard } from "./heroesOfAsgard.masterminds";
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.masterminds';

export class Masterminds extends CardSet<IMastermind> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard;
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy;

  public static readonly ALL = [
    ...Object.values(Masterminds.LEGENDARY),
    ...Object.values(Masterminds.DARK_CITY),
    ...Object.values(Masterminds.HEROES_OF_ASGARD),
    ...Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY)
  ];
}
