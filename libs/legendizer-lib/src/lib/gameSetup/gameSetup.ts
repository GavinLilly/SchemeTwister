import { IGameSet, GameSets } from '../gamesets';
import { IGameSetup, IHeroDeck, IVillainDeck } from './gameSetup.interface';
import { Schemes, IScheme } from '../schemes';
import { Masterminds, IMastermind } from '../masterminds';
import { Heroes, IHero } from '../heroes';
import { CardType, ICard } from '../cardSet';
import { Henchmen } from '../henchmen';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup, VillainGroups } from '../villains';
import { numPlayers } from '../schemes';
import { isArray } from 'util';

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
    } else if (!gameSets.some((item) => item.essential)) {
      throw new Error(`A big box game set must be chosen. These include:
${GameSets.ALL.map((item) => {
  if (item.essential) return item.name;
})}`);
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

    const sortNameComparator = function(item1: ICard, item2: ICard) {
      if (item1.name < item2.name)
        return -1;
      else if (item1.name > item2.name)
        return 1;
      else
        return 0;
    }

    let requiredHero: IHero;
    const requiredHenchmen: IHenchmen[] = [];
    const requiredVillains: IVillainGroup[] = [];

    // Check to see if there are any scheme required cards in the villain deck
    if (
      scheme.requiredCards !== undefined &&
      scheme.requiredCards.inVillainDeck !== undefined
    ) {
      if (!isArray(scheme.requiredCards.inVillainDeck)) {
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
      } else {
        requiredVillains.push(...scheme.requiredCards.inVillainDeck);
      }
    }

    // Check to see if there are any mastermind required cards in the villain deck
    if (
      requiredHenchmen.length <
        scheme.rules.villainDeck.numHenchmenGroups[numberPlayers] &&
      mastermind.alwaysLeads.cardType === CardType.HENCHMEN
    )
      requiredHenchmen.push(mastermind.alwaysLeads as IHenchmen);
    else if (
      requiredVillains.length <
        scheme.rules.villainDeck.numVillainGroups[numberPlayers] &&
      mastermind.alwaysLeads.cardType === CardType.VILLAINGROUP
    )
      requiredVillains.push(mastermind.alwaysLeads as IVillainGroup);

    // Shuffle our hero deck while excluding# heroes required for the villain deck
    const heroDeck: IHeroDeck = {
      heroes: this.heroes.shuffle(
        scheme.rules.heroDeck.numHeroes[numberPlayers],
        undefined,
        [requiredHero]
      ).sort(sortNameComparator),
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

    let selectedVillains: IVillainGroup[] = [];
    selectedVillains = selectedVillains.concat(
      this.villains.shuffle(
        scheme.rules.villainDeck.numVillainGroups[numberPlayers],
        requiredVillains
      )
    );

    let villainHero: IHero;
    if (scheme.rules.villainDeck.numHeroes !== undefined) {
      villainHero =
        scheme.requiredCards !== undefined &&
        scheme.requiredCards.inVillainDeck !== undefined &&
        !isArray(scheme.requiredCards.inVillainDeck) &&
        scheme.requiredCards.inVillainDeck.cardType === CardType.HERO
          ? scheme.requiredCards.inVillainDeck
          : this.heroes.shuffle(
              scheme.rules.villainDeck.numHeroes[numberPlayers],
              undefined,
              heroDeck.heroes
            )[0];
    }

    const villainDeck: IVillainDeck = {
      bystanders: scheme.rules.villainDeck.numBystanders[numberPlayers],
      // Shuffle our henchmen deck and include any required henchemen
      henchmen: selectedHenchmen.sort(sortNameComparator),
      hero: villainHero,
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
