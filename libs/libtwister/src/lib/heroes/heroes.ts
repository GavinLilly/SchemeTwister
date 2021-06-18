import { CardSet } from '../cardSet';
import { AntMan } from './antMan.heroes';
import { CaptainAmerica } from './captainAmerica.heroes';
import { Champions } from './champions.heroes';
import { CivilWar } from './civilWar.heroes';
import { DarkCity } from './darkCity.heroes';
import { Deadpool } from './deadpool.heroes';
import { Dimensions } from './dimensions.heroes';
import { FantasticFour } from './fantasticFour.heroes';
import { FearItself } from './fearItself.heroes';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.heroes';
import { IHero } from './hero.interface';
import { HeroesOfAsgard } from './heroesOfAsgard.heroes';
import { IntoTheCosmos } from './intoTheCosmos.heroes';
import { Legendary } from './legendary.heroes';
import { MarvelStudios } from './marvelStudios.heroes';
import { NewMutants } from './newMutants.heroes';
import { Noir } from './noir.heroes';
import { PaintTheTownRed } from './paintTheTown.heroes';
import { RealmOfKings } from './realmOfKings.heroes';
import { Revelations } from './revelations.heroes';
import { SecretWarsVolume1 } from './secretWarsVolume1.heroes';
import { SecretWarsVolume2 } from './secretWarsVolume2.heroes';
import { Shield } from './shield.heroes';
import { SpiderManHomecoming } from './spiderManHomecoming.heroes';
import { ThreeD } from './threeD.heroes';
import { Venom } from './venom.heroes';
import { Villains } from './villains.heroes';
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
  public static readonly CAPTAIN_AMERICA = CaptainAmerica;
  public static readonly THREE_D = ThreeD;
  public static readonly CHAMPIONS = Champions;
  public static readonly CIVIL_WAR = CivilWar;
  public static readonly DEADPOOL = Deadpool;
  public static readonly DIMENSIONS = Dimensions;
  public static readonly FEAR_ITSELF = FearItself;
  public static readonly INTO_THE_COSMOS = IntoTheCosmos;
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
  public static readonly MARVEL_STUDIOS = MarvelStudios;

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
    ...Object.values(Heroes.CAPTAIN_AMERICA),
    ...Object.values(Heroes.THREE_D),
    ...Object.values(Heroes.CHAMPIONS),
    ...Object.values(Heroes.CIVIL_WAR),
    ...Object.values(Heroes.DEADPOOL),
    ...Object.values(Heroes.DIMENSIONS),
    ...Object.values(Heroes.FEAR_ITSELF),
    ...Object.values(Heroes.INTO_THE_COSMOS),
    ...Object.values(Heroes.NEW_MUTANTS),
    ...Object.values(Heroes.NOIR),
    ...Object.values(Heroes.REALM_OF_KINGS),
    ...Object.values(Heroes.REVELATIONS),
    ...Object.values(Heroes.SPIDERMAN_HOMECOMING),
    ...Object.values(Heroes.SECRET_WARS_VOLUME_1),
    ...Object.values(Heroes.SECRET_WARS_VOLUME_2),
    ...Object.values(Heroes.VENOM),
    ...Object.values(Heroes.VILLAINS),
    ...Object.values(Heroes.WORLD_WAR_HULK),
    ...Object.values(Heroes.MARVEL_STUDIOS),
  ];
}
