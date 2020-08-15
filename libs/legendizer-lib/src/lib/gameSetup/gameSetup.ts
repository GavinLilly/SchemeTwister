import { IGameSet } from '../gamesets';
import { IGameSetup } from './gameSetup.interface';
import { Schemes, IScheme } from '../schemes';
import { Masterminds, IMastermind } from '../masterminds';
import { Heroes, IHero } from '../heroes';
import { CardType } from '../cardSet';
import { Henchmen } from '../henchmen';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup, VillainGroups } from '../villains';
import { isArray } from 'util';

type numPlayersRange = 2 | 3 | 4 | 5;
type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export class GameSetup {
  private schemes: Schemes;
  private masterminds: Masterminds;
  private heroes: Heroes;
  private henchmen: Henchmen;
  private villains: VillainGroups;

  constructor(
    gameSets: IGameSet[] | IGameSet,
    private numPlayers: numPlayersRange
  ) {
    if (gameSets === undefined || (isArray(gameSets) && gameSets.length === 0))
      throw new Error('At least 1 game set must be chosen');

    if (!isArray(gameSets)) gameSets = [gameSets];

    this.schemes = new Schemes(Schemes.ALL, gameSets);
    this.masterminds = new Masterminds(Masterminds.ALL, gameSets);
    this.heroes = new Heroes(Heroes.ALL, gameSets);
    this.henchmen = new Henchmen(Henchmen.ALL, gameSets);
    this.villains = new VillainGroups(VillainGroups.ALL, gameSets);
  }

  /**
   * @todo Allow for heroes, henchemen and villains to be seeded
   * @param existingSetup An IGameSetup object containing a scheme and/or mastermind to seed a new setup
   */
  public generateGame(existingSetup: Partial<IGameSetup> = {}): IGameSetup {
    // We currently only support pre-setting the scheme or mastermind
    if (
      existingSetup.heroDeck !== undefined ||
      existingSetup.villainDeck !== undefined
    ) {
      throw new Error(
        'Currently only pre-setting the scheme or mastermind is supported'
      );
    }

    // Only shuffle the scheme if it's not already defined
    const scheme: IScheme =
      existingSetup.scheme === undefined
        ? (existingSetup.scheme = this.schemes.shuffle())
        : existingSetup.scheme;

    // Only shuffle the mastermind if it's not already defined
    const mastermind: IMastermind =
      existingSetup.mastermind === undefined
        ? (existingSetup.mastermind = this.masterminds.shuffle())
        : existingSetup.mastermind;

    let requiredHero: IHero;
    const requiredHenchmen: IHenchmen[] = [];
    const requiredVillains: IVillainGroup[] = [];

    // Check to see if there are any scheme required cards in the villain deck
    if (
      scheme.requiredCards !== undefined &&
      scheme.requiredCards.inVillainDeck !== undefined
    ) {
      switch (scheme.requiredCards.inVillainDeck.cardType) {
        case CardType.HERO:
          requiredHero = scheme.requiredCards.inVillainDeck;
          break;
        case CardType.HENCHMEN:
          requiredHenchmen.push(
            scheme.requiredCards.inVillainDeck as IHenchmen
          );
          break;
        case CardType.VILLAINGROUP:
          requiredVillains.push(
            scheme.requiredCards.inVillainDeck as IVillainGroup
          );
          break;
      }
    }

    // Check to see if there are any mastermind required cards in the villain deck
    if (mastermind.alwaysLeads.cardType === CardType.HENCHMEN)
      requiredHenchmen.push(mastermind.alwaysLeads as IHenchmen);
    else if (mastermind.alwaysLeads.cardType === CardType.VILLAINGROUP)
      requiredVillains.push(mastermind.alwaysLeads as IVillainGroup);

    // Shuffle our hero deck while excluding heroes required for the villain deck
    const heroDeck: IHero[] = this.heroes.shuffle(
      existingSetup.scheme.rules.heroDeck.numHeroes[this.numPlayers],
      undefined,
      [requiredHero]
    );

    const villainDeck: {
      henchmen: IHenchmen[];
      villains: IVillainGroup[];
      hero: IHero;
    } = {
      // Shuffle our henchmen deck and include any required henchemen
      henchmen: this.henchmen.shuffle(
        existingSetup.scheme.rules.villainDeck.numHenchmenGroups[
          this.numPlayers
        ],
        requiredHenchmen
      ),
      // Shuffle our villain deck and include any required villains
      villains: this.villains.shuffle(
        scheme.rules.villainDeck.numVillainGroups[this.numPlayers],
        requiredVillains
      ),
      hero:
        existingSetup.scheme.requiredCards !== undefined &&
        existingSetup.scheme.requiredCards.inVillainDeck !== undefined &&
        existingSetup.scheme.requiredCards.inVillainDeck.cardType ===
          CardType.HERO
          ? existingSetup.scheme.requiredCards.inVillainDeck
          : undefined,
    };

    // A small hack to ensure that Henchmen is an array rather than a single entry
    if (!isArray(villainDeck.henchmen))
      villainDeck.henchmen = [villainDeck.henchmen];

    return {
      scheme: scheme,
      mastermind: mastermind,
      numPlayers: this.numPlayers,
      heroDeck: heroDeck,
      villainDeck: villainDeck
    };
  }
}
