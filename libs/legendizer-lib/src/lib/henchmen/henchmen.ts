import { CardSet } from '../cardSet';
import { CivilWar } from './civilWar.henchmen';
import { DarkCity } from './darkCity.henchmen';
import { Dimensions } from './dimensions.henchmen';
import { IHenchmen } from './henchmen.interface';
import { IntoTheCosmos } from './intoTheCosmos.henchmen';
import { Legendary } from './legendary.henchmen';
import { MarvelStudios } from './marvelStudios.henchmen';
import { Revelations } from './revelations.henchmen';
import { SecretWarsVolume1 } from './secretWarsVolume1.henchmen';
import { SecretWarsVolume2 } from './secretWarsVolume2.henchmen';
import { Villains } from './villains.henchmen';
import { WorldWarHulk } from './worldWarHulk.henchmen';
import { X_Men } from './xMen.henchmen';

export class Henchmen extends CardSet<IHenchmen> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly X_MEN = X_Men;
  public static readonly DIMENSIONS = Dimensions;
  public static readonly CIVIL_WAR = CivilWar;
  public static readonly INTO_THE_COSMOS = IntoTheCosmos;
  public static readonly MARVEL_STUDIOS = MarvelStudios;
  public static readonly REVELATIONS = Revelations;
  public static readonly SECRET_WARS_VOLUME_1 = SecretWarsVolume1;
  public static readonly SECRET_WARS_VOLUME_2 = SecretWarsVolume2;
  public static readonly VILLAINS = Villains;
  public static readonly WORLD_WAR_HULK = WorldWarHulk;

  public static readonly ALL = [
    ...Object.values(Henchmen.LEGENDARY),
    ...Object.values(Henchmen.DARK_CITY),
    ...Object.values(Henchmen.X_MEN),
    ...Object.values(Henchmen.DIMENSIONS),
    ...Object.values(Henchmen.CIVIL_WAR),
    ...Object.values(Henchmen.INTO_THE_COSMOS),
    ...Object.values(Henchmen.MARVEL_STUDIOS),
    ...Object.values(Henchmen.REVELATIONS),
    ...Object.values(Henchmen.SECRET_WARS_VOLUME_1),
    ...Object.values(Henchmen.SECRET_WARS_VOLUME_2),
    ...Object.values(Henchmen.VILLAINS),
    ...Object.values(Henchmen.WORLD_WAR_HULK),
  ];
}
