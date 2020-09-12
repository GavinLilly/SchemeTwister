import { CardType, ICard } from '../cardSet';
import { GameSets, GameSetSize, IGameSet } from '../gamesets';
import { Henchmen, IHenchmen } from '../henchmen';
import { Heroes, IHero } from '../heroes';
import { IMastermind, Masterminds } from '../masterminds';
import { IScheme, numPlayers, Schemes } from '../schemes';
import { IVillainGroup, VillainGroups } from '../villains';
import { IGameSetup, IHeroDeck, IVillainDeck } from './gameSetup.interface';

export class GameSetup {
  private schemes: Schemes;
  private masterminds: Masterminds;
  private heroes: Heroes;
  private henchmen: Henchmen;
  private villains: VillainGroups;
  private gameSets: IGameSet[] = [];

  constructor(...gameSets: IGameSet[]) {
    if (gameSets.length === 0 || gameSets.includes(undefined)) {
      throw new Error('A game set or game sets must be chosen');
    } else if (
      !gameSets.some((item) =>
        [GameSetSize.LARGE, GameSetSize.CORE].includes(item.size)
      )
    ) {
      throw new Error(`A core box or big box game set must be chosen. These include:
${GameSets.ALL.filter((item) =>
  [GameSetSize.LARGE, GameSetSize.CORE].includes(item.size)
).map((item) => item.name)}`);
    }

    this.gameSets = this.gameSets.concat(gameSets);

    this.schemes = new Schemes(Schemes.ALL, this.gameSets);
    this.masterminds = new Masterminds(Masterminds.ALL, this.gameSets);
    this.heroes = new Heroes(Heroes.ALL, this.gameSets);
    this.henchmen = new Henchmen(Henchmen.ALL, this.gameSets);
    this.villains = new VillainGroups(VillainGroups.ALL, this.gameSets);
  }

  /**
   * @todo Allow for heroes, henchemen and villains to be seeded
   * @param existingSetup An IGameSetup object containing a scheme and/or mastermind to seed a new setup
   */
  public generateGame(
    numberPlayers: numPlayers,
    scheme: IScheme = this.schemes.shuffle(),
    mastermind: IMastermind = this.masterminds.shuffle()
  ): IGameSetup {
    if (numberPlayers === undefined)
      throw new RangeError('Number of players must be between 2 and 5');

    if (!this.gameSets.includes(scheme.gameSet))
      throw new Error(
        'The specified scheme is not in the list of selected game sets'
      );

    const sortNameComparator = function (item1: ICard, item2: ICard) {
      if (item1.name < item2.name) return -1;
      else if (item1.name > item2.name) return 1;
      else return 0;
    };

    const requiredVillainHeroes: IHero[] = [];
    const requiredHenchmen: IHenchmen[] = [];
    const requiredVillains: IVillainGroup[] = [];

    // Check to see if there are any scheme required cards in the villain deck
    if (
      scheme.requiredCards !== undefined &&
      scheme.requiredCards.inVillainDeck !== undefined
    ) {
      if (scheme.requiredCards.inVillainDeck.heroes !== undefined) {
        if (
          scheme === Schemes.X_MEN.THE_DARK_PHOENIX_SAGA &&
          !this.gameSets.includes(GameSets.DARK_CITY)
        )
          requiredVillainHeroes.push(Heroes.X_MEN.PHOENIX);
        else {}
          requiredVillainHeroes.push(
            ...scheme.requiredCards.inVillainDeck.heroes
          );
      }

      if (scheme.requiredCards.inVillainDeck.henchmen !== undefined) {
        requiredHenchmen.push(...scheme.requiredCards.inVillainDeck.henchmen);
      }

      if (scheme.requiredCards.inVillainDeck.villains !== undefined) {
        requiredVillains.push(...scheme.requiredCards.inVillainDeck.villains);
      }
    }

    // Check to see if there are any mastermind required cards in the villain deck
    mastermind.alwaysLeads.forEach((item) => {
      if (
        requiredHenchmen.length <
          scheme.rules.villainDeck.numHenchmenGroups[numberPlayers] &&
        item.cardType === CardType.HENCHMEN
      )
        requiredHenchmen.push(item as IHenchmen);
      else if (
        requiredVillains.length <
          scheme.rules.villainDeck.numVillainGroups[numberPlayers] &&
        item.cardType === CardType.VILLAINGROUP
      )
        requiredVillains.push(item as IVillainGroup);
    });

    // Shuffle our hero deck while excluding heroes required for the villain deck
    const heroDeck: IHeroDeck = {
      heroes: this.heroes
        .shuffle(
          scheme.rules.heroDeck.numHeroes[numberPlayers],
          undefined,
          requiredVillainHeroes
        )
        .sort(sortNameComparator),
      bystanders: scheme.rules.heroDeck.numBystanders
        ? scheme.rules.heroDeck.numBystanders[numberPlayers]
        : undefined,
    };

    let selectedHenchmen: IHenchmen[] = [];
    selectedHenchmen = selectedHenchmen.concat(
      this.henchmen.shuffle(
        scheme.rules.villainDeck.numHenchmenGroups[numberPlayers],
        requiredHenchmen
      )
    );

    heroDeck.henchmen = scheme.rules.heroDeck.numHenchmen
      ? this.henchmen.shuffle(
          scheme.rules.heroDeck.numHenchmen[numberPlayers],
          undefined,
          [...requiredHenchmen, ...selectedHenchmen]
        )
      : undefined;

    let selectedVillains: IVillainGroup[] = [];
    selectedVillains = selectedVillains.concat(
      this.villains.shuffle(
        scheme.rules.villainDeck.numVillainGroups[numberPlayers],
        requiredVillains
      )
    );

    if (
      scheme.rules.villainDeck.numHeroes !== undefined &&
      requiredVillainHeroes.length <
        scheme.rules.villainDeck.numHeroes[numberPlayers]
    ) {
      requiredVillainHeroes.push(
        ...this.heroes.shuffle(
          scheme.rules.villainDeck.numHeroes[numberPlayers] -
            requiredVillainHeroes.length,
          undefined,
          [...heroDeck.heroes, ...requiredVillainHeroes]
        )
      );
    }

    const villainDeck: IVillainDeck = {
      bystanders: scheme.rules.villainDeck.numBystanders[numberPlayers],
      // Shuffle our henchmen deck and include any required henchemen
      henchmen: selectedHenchmen.sort(sortNameComparator),
      heroes: requiredVillainHeroes,
      twists: scheme.rules.villainDeck.numTwists[numberPlayers],
      // Shuffle our villain deck and include any required villains
      villains: selectedVillains.sort(sortNameComparator),
    };

    return {
      scheme: scheme,
      mastermind: mastermind,
      numPlayers: numberPlayers,
      heroDeck: heroDeck,
      villainDeck: villainDeck,
    };
  }
}
