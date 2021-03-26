import { CardSet } from '../cardSet';
import { AntMan } from './antMan.masterminds';
import { CaptainAmerica } from './captainAmerica.masterminds';
import { Champions } from './champions.masterminds';
import { CivilWar } from './civilWar.masterminds';
import { DarkCity } from './darkCity.masterminds';
import { Deadpool } from './deadpool.masterminds';
import { Dimensions } from './dimensions.masterminds';
import { FantasticFour } from './fantasticFour.masterminds';
import { FearItself } from './fearItself.masterminds';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.masterminds';
import { HeroesOfAsgard } from './heroesOfAsgard.masterminds';
import { IntoTheCosmos } from './intoTheCosmos.masterminds';
import { Legendary } from './legendary.masterminds';
import { MarvelStudios } from './marvelStudios.masterminds';
import { IMastermind } from './mastermind.interface';
import { NewMutants } from './newMutants.masterminds';
import { Noir } from './noir.masterminds';
import { PaintTheTownRed } from './paintTheTown.masterminds';
import { RealmOfKings } from './realmOfKings.masterminds';
import { Revelations } from './revelations.masterminds';
import { SecretWarsVolume1 } from './secretWarsVolume1.masterminds';
import { SecretWarsVolume2 } from './secretWarsVolume2.masterminds';
import { Shield } from './shield.masterminds';
import { SpiderManHomecoming } from './spiderManHomecoming.masterminds';
import { Venom } from './venom.masterminds';
import { Villains } from './villains.masterminds';
import { WorldWarHulk } from './worldWarHulk.masterminds';
import { X_Men } from './xMen.masterminds';

export class Masterminds extends CardSet<IMastermind> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard;
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy;
  public static readonly ANT_MAN = AntMan;
  public static readonly FANTASTIC_FOUR = FantasticFour;
  public static readonly PAINT_THE_TOWN_RED = PaintTheTownRed;
  public static readonly X_MEN = X_Men;
  public static readonly SHIELD = Shield;
  public static readonly CAPTAIN_AMERICA = CaptainAmerica;
  public static readonly CHAMPIONS = Champions;
  public static readonly CIVIL_WAR = CivilWar;
  public static readonly DEADPOOL = Deadpool;
  public static readonly DIMENSIONS = Dimensions;
  public static readonly FEAR_ITSELF = FearItself;
  public static readonly INTO_THE_COSMOS = IntoTheCosmos;
  public static readonly MARVEL_STUDIOS = MarvelStudios;
  public static readonly NEW_MUTANTS = NewMutants;
  public static readonly NOIR = Noir;
  public static readonly REALM_OF_KINGS = RealmOfKings;
  public static readonly REVELATIONS = Revelations;
  public static readonly SPIDERMAN_HOMECOMING = SpiderManHomecoming;
  public static readonly SECRET_WARS_VOLUME_1 = SecretWarsVolume1;
  public static readonly SECRET_WARS_VOLUME_2 = SecretWarsVolume2;
  public static readonly VENOM = Venom;
  public static readonly VILLAINS = Villains;
  public static readonly WORLD_WAR_HULK = WorldWarHulk;

  public static readonly ALL = [
    ...Object.values(Masterminds.LEGENDARY),
    ...Object.values(Masterminds.DARK_CITY),
    ...Object.values(Masterminds.HEROES_OF_ASGARD),
    ...Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Masterminds.ANT_MAN),
    ...Object.values(Masterminds.FANTASTIC_FOUR),
    ...Object.values(Masterminds.PAINT_THE_TOWN_RED),
    ...Object.values(Masterminds.X_MEN),
    ...Object.values(Masterminds.SHIELD),
    ...Object.values(Masterminds.CAPTAIN_AMERICA),
    ...Object.values(Masterminds.CHAMPIONS),
    ...Object.values(Masterminds.CIVIL_WAR),
    ...Object.values(Masterminds.DEADPOOL),
    ...Object.values(Masterminds.DIMENSIONS),
    ...Object.values(Masterminds.FEAR_ITSELF),
    ...Object.values(Masterminds.INTO_THE_COSMOS),
    ...Object.values(Masterminds.MARVEL_STUDIOS),
    ...Object.values(Masterminds.NEW_MUTANTS),
    ...Object.values(Masterminds.NOIR),
    ...Object.values(Masterminds.REALM_OF_KINGS),
    ...Object.values(Masterminds.REVELATIONS),
    ...Object.values(Masterminds.SPIDERMAN_HOMECOMING),
    ...Object.values(Masterminds.SECRET_WARS_VOLUME_1),
    ...Object.values(Masterminds.SECRET_WARS_VOLUME_2),
    ...Object.values(Masterminds.VENOM),
    ...Object.values(Masterminds.VILLAINS),
    ...Object.values(Masterminds.WORLD_WAR_HULK),
  ];
}
