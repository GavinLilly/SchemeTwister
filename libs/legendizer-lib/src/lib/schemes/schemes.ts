import { CardSet } from '../cardSet';
import { AntMan } from './antMan.schemes';
import { DarkCity } from './darkCity.schemes';
import { FantasticFour } from './fantasticFour.schemes';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.schemes';
import { HeroesOfAsgard } from './heroesOfAsgard.schemes';
import { Legendary } from './legendary.schemes';
import { PaintTheTownRed } from './paintTheTown.schemes';
import { IScheme } from './scheme.interface';
import { Shield } from './shield.schemes';
import { WorldWarHulk } from './worldWarHulk.schemes';
import { X_Men } from './xMen.schemes';

export class Schemes extends CardSet<IScheme> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard;
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy;
  public static readonly ANT_MAN = AntMan;
  public static readonly FANTASTIC_FOUR = FantasticFour;
  public static readonly PAINT_THE_TOWN_RED = PaintTheTownRed;
  public static readonly X_MEN = X_Men;
  public static readonly SHIELD = Shield;
  public static readonly WORLD_WAR_HULK = WorldWarHulk;

  public static readonly ALL = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD),
    ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Schemes.ANT_MAN),
    ...Object.values(Schemes.FANTASTIC_FOUR),
    ...Object.values(Schemes.PAINT_THE_TOWN_RED),
    ...Object.values(Schemes.X_MEN),
    ...Object.values(Schemes.SHIELD),
    ...Object.values(Schemes.WORLD_WAR_HULK),
  ];
}
