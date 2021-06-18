import { CardSet } from '../cardSet';
import { AntMan } from './antMan.villains';
import { CaptainAmerica } from './captainAmerica.villains';
import { Champions } from './champions.villains';
import { CivilWar } from './civilWar.villains';
import { DarkCity } from './darkCity.villains';
import { Deadpool } from './deadpool.villains';
import { FantasticFour } from './fantasticFour.villains';
import { FearItself } from './fearItself.villains';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.villains';
import { HeroesOfAsgard } from './heroesOfAsgard.villains';
import { IntoTheCosmos } from './intoTheCosmos.villains';
import { Legendary } from './legendary.villains';
import { MarvelStudios } from './marvelStudios.villains';
import { NewMutants } from './newMutants.villains';
import { Noir } from './noir.villains';
import { PaintTheTownRed } from './paintTheTown.villains';
import { RealmOfKings } from './realmOfKings.villains';
import { Revelations } from './revelations.villains';
import { SecretWarsVolume1 } from './secretWarsVolume1.villains';
import { SecretWarsVolume2 } from './secretWarsVolume2.villains';
import { Shield } from './shield.villains';
import { SpiderManHomecoming } from './spiderManHomecoming.villains';
import { Venom } from './venom.villains';
import { IVillainGroup } from './villainGroup.interface';
import { Villains } from './villains.villains';
import { WorldWarHulk } from './worldWarHulk.villains';
import { X_Men } from './xMen.villains';

export class VillainGroups extends CardSet<IVillainGroup> {
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
    ...Object.values(VillainGroups.LEGENDARY),
    ...Object.values(VillainGroups.DARK_CITY),
    ...Object.values(VillainGroups.HEROES_OF_ASGARD),
    ...Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(VillainGroups.ANT_MAN),
    ...Object.values(VillainGroups.FANTASTIC_FOUR),
    ...Object.values(VillainGroups.PAINT_THE_TOWN_RED),
    ...Object.values(VillainGroups.X_MEN),
    ...Object.values(VillainGroups.SHIELD),
    ...Object.values(VillainGroups.CAPTAIN_AMERICA),
    ...Object.values(VillainGroups.CHAMPIONS),
    ...Object.values(VillainGroups.CIVIL_WAR),
    ...Object.values(VillainGroups.DEADPOOL),
    ...Object.values(VillainGroups.FEAR_ITSELF),
    ...Object.values(VillainGroups.INTO_THE_COSMOS),
    ...Object.values(VillainGroups.MARVEL_STUDIOS),
    ...Object.values(VillainGroups.NEW_MUTANTS),
    ...Object.values(VillainGroups.NOIR),
    ...Object.values(VillainGroups.REALM_OF_KINGS),
    ...Object.values(VillainGroups.REVELATIONS),
    ...Object.values(VillainGroups.SPIDERMAN_HOMECOMING),
    ...Object.values(VillainGroups.SECRET_WARS_VOLUME_1),
    ...Object.values(VillainGroups.SECRET_WARS_VOLUME_2),
    ...Object.values(VillainGroups.VENOM),
    ...Object.values(VillainGroups.VILLAINS),
    ...Object.values(VillainGroups.WORLD_WAR_HULK),
  ];
}
