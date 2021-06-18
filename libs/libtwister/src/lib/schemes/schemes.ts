import { CardSet } from '../cardSet';
import { AntMan } from './antMan.schemes';
import { CaptainAmerica } from './captainAmerica.schemes';
import { Champions } from './champions.schemes';
import { CivilWar } from './civilWar.schemes';
import { DarkCity } from './darkCity.schemes';
import { Deadpool } from './deadpool.schemes';
import { FantasticFour } from './fantasticFour.schemes';
import { FearItself } from './fearItself.schemes';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.schemes';
import { HeroesOfAsgard } from './heroesOfAsgard.schemes';
import { IntoTheCosmos } from './intoTheCosmos.schemes';
import { Legendary } from './legendary.schemes';
import { MarvelStudios } from './marvelStudios.schemes';
import { NewMutants } from './newMutants.schemes';
import { Noir } from './noir.schemes';
import { PaintTheTownRed } from './paintTheTown.schemes';
import { RealmOfKings } from './realmOfKings.schemes';
import { Revelations } from './revelations.schemes';
import { IScheme } from './scheme';
import { SecretWarsVolume1 } from './secretWarsVolume1.schemes';
import { SecretWarsVolume2 } from './secretWarsVolume2.schemes';
import { Shield } from './shield.schemes';
import { SpiderManHomecoming } from './spiderManHomecoming.schemes';
import { Venom } from './venom.schemes';
import { Villains } from './villains.schemes';
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
  public static readonly CAPTAIN_AMERICA = CaptainAmerica;
  public static readonly CHAMPIONS = Champions;
  public static readonly CIVIL_WAR = CivilWar;
  public static readonly DEADPOOL = Deadpool;
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
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD),
    ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Schemes.ANT_MAN),
    ...Object.values(Schemes.FANTASTIC_FOUR),
    ...Object.values(Schemes.PAINT_THE_TOWN_RED),
    ...Object.values(Schemes.X_MEN),
    ...Object.values(Schemes.SHIELD),
    ...Object.values(Schemes.CAPTAIN_AMERICA),
    ...Object.values(Schemes.CHAMPIONS),
    ...Object.values(Schemes.CIVIL_WAR),
    ...Object.values(Schemes.DEADPOOL),
    ...Object.values(Schemes.FEAR_ITSELF),
    ...Object.values(Schemes.INTO_THE_COSMOS),
    ...Object.values(Schemes.MARVEL_STUDIOS),
    ...Object.values(Schemes.NEW_MUTANTS),
    ...Object.values(Schemes.NOIR),
    ...Object.values(Schemes.REALM_OF_KINGS),
    ...Object.values(Schemes.REVELATIONS),
    ...Object.values(Schemes.SPIDERMAN_HOMECOMING),
    ...Object.values(Schemes.SECRET_WARS_VOLUME_1),
    ...Object.values(Schemes.SECRET_WARS_VOLUME_2),
    ...Object.values(Schemes.VENOM),
    ...Object.values(Schemes.VILLAINS),
    ...Object.values(Schemes.WORLD_WAR_HULK),
  ];
}
