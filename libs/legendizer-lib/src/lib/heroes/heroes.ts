import { CardSet } from '../cardSet';
import { AntMan } from './antMan.heroes';
import { DarkCity } from './darkCity.heroes';
import { FantasticFour } from './fantasticFour.heroes';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.heroes';
import { IHero } from './hero.interface';
import { HeroesOfAsgard } from './heroesOfAsgard.heroes';
import { Legendary } from './legendary.heroes';
import { PaintTheTownRed } from './paintTheTown.heroes';
import { Shield } from './shield.heroes';
import { WorldWarHulk } from './worldWarHulk.heroes';
import { X_Men } from './xMen.heroes';

export class Heroes extends CardSet<IHero> {
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
    ...Object.values(Heroes.LEGENDARY),
    ...Object.values(Heroes.DARK_CITY),
    ...Object.values(Heroes.HEROES_OF_ASGARD),
    ...Object.values(Heroes.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Heroes.ANT_MAN),
    ...Object.values(Heroes.FANTASTIC_FOUR),
    ...Object.values(Heroes.PAINT_THE_TOWN_RED),
    ...Object.values(Heroes.X_MEN),
    ...Object.values(Heroes.SHIELD),
    ...Object.values(Heroes.WORLD_WAR_HULK),
  ];
}
