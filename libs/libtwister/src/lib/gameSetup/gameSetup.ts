import { ICard } from '../cardSet';
import { CardType } from '../enums';
import { GameSetSize, GameSets, IGameSet } from '../gamesets';
import { Henchmen, IHenchmen } from '../henchmen';
import { Heroes } from '../heroes';
import { IKeyword } from '../keywords/keyword.interface';
import { IMastermind, Masterminds } from '../masterminds';
import {
  IDeckRequirements,
  INumPlayerRules,
  IRequiredTeam,
  IScheme,
  Schemes,
  numPlayers,
} from '../schemes';
import { ITeam, Teams } from '../teams';
import { VillainGroups } from '../villains';

import {
  IAdditionalDeck,
  IGameSetup,
  IGenerateOptions,
} from './gameSetup.interface';

export class GameSetup {
  public static soloBannedSchemes = [
    Schemes.LEGENDARY.SUPER_HERO_CIVIL_WAR,
    Schemes.LEGENDARY.NEGATIVE_ZONE_PRISON_BREAKOUT,
    Schemes.MARVEL_STUDIOS.SUPER_HERO_CIVIL_WAR,
    Schemes.FEAR_ITSELF.THE_TRAITOR,
  ];

  private schemes: Schemes;
  private masterminds: Masterminds;
  private heroes: Heroes;
  private henchmen: Henchmen;
  private villains: VillainGroups;
  private gameSets: IGameSet[] = [];

  constructor(...gameSets: IGameSet[]) {
    if (gameSets.length === 0) {
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

  // Type guard to check if the we're requiring teams or specific cards
  private isRequiredTeam(
    inHeroDeck: ICard[] | IRequiredTeam
  ): inHeroDeck is IRequiredTeam {
    return (inHeroDeck as IRequiredTeam).team !== undefined;
  }

  /**
   * This function will return a random scheme from those available based on the
   * selected gamesets. If it's a solo play game then some schemes will be
   * excluded as they're not compatible.
   * @param numPlayers The number of players in this setup. Must be between 1 and 5
   * @returns A single scheme
   */
  private selectScheme(numPlayers: number): IScheme {
    if (numPlayers != 1) {
      return this.schemes.shuffle(1)[0];
    } else {
      const availSchemes = this.schemes.getCards().filter((scheme) => {
        return !GameSetup.soloBannedSchemes.includes(scheme);
      });
      return this.getRandomElementsFromArray(availSchemes, 1)[0];
    }
  }

  /**
   * @todo Allow for heroes, henchemen and villains to be seeded
   */
  public generateGame(
    numberPlayers: numPlayers,
    options?: IGenerateOptions
  ): IGameSetup {
    // Set defaults
    // If options hasn't been specified then ensure we have a scheme and mastermind
    if (options === undefined) {
      options = {
        scheme: this.selectScheme(numberPlayers),
        mastermind: this.masterminds.shuffle(1)[0],
      };
    }

    if (options.scheme === undefined)
      options.scheme = this.selectScheme(numberPlayers);

    if (options.mastermind === undefined)
      options.mastermind = this.masterminds.shuffle(1)[0];

    // Get the rules for the number of players
    const rules: INumPlayerRules = options.scheme.rules[numberPlayers];

    // Create our decks
    let villainDeck: ICard[] = [];
    let heroDeck: ICard[] = [];
    let additionalDeck: ICard[] = [];

    // Error check
    if (numberPlayers === undefined)
      throw new RangeError('Number of players must be between 1 and 5');

    if (!this.gameSets.includes(options.scheme.gameSet))
      throw new Error(
        'The specified scheme is not in the list of selected game sets'
      );

    if (
      numberPlayers == 1 &&
      GameSetup.soloBannedSchemes.includes(options.scheme)
    )
      throw new Error('The selected scheme is not possible in solo play');

    if (numberPlayers != 1 && options.advancedSolo)
      throw new Error('Advanced solo only works with 1 player');

    // Check for any scheme required cards
    if (options.scheme.requiredCards !== undefined) {
      if (options.scheme.requiredCards.inVillainDeck !== undefined) {
        // Scheme requires villains
        if (
          options.scheme === Schemes.X_MEN.THE_DARK_PHOENIX_SAGA &&
          !this.gameSets.includes(GameSets.DARK_CITY)
        ) {
          // Dark Phoenix Saga requires Jean Grey but if the user does not have
          // Dark City then we use Phoenix as a back up
          const jgIndex = options.scheme.requiredCards.inVillainDeck.indexOf(
            Heroes.DARK_CITY.JEAN_GREY
          );
          if (jgIndex !== -1) {
            options.scheme.requiredCards.inVillainDeck.splice(
              jgIndex,
              1,
              Heroes.X_MEN.PHOENIX
            );
          }
        } else if (options.scheme === Schemes.SHIELD.SHIELD_VS_HYDRA_WAR) {
          /**
           * @todo Ensure that it's not possible to pick both villain groups. Currently it's possible that the other group gets picked lower down in this class
           * @todo https://github.com/GavinLilly/legendizer/pull/45/checks?check_run_id=2858775412
           */
          // Shield vs Hydra War reqires either AIM or Hydra Elite but not both
          const possibleVillains = [
            VillainGroups.SHIELD.AIM_HYDRA_OFFSHOOT,
            VillainGroups.SHIELD.HYDRA_ELITE,
          ];
          const shieldDeck = options.scheme.requiredCards.inVillainDeck.filter(
            (item) => !possibleVillains.includes(item)
          );
          shieldDeck.push(
            ...this.getRandomElementsFromArray(possibleVillains, 1)
          );
          options.scheme.requiredCards.inVillainDeck = shieldDeck;
        }

        villainDeck.push(...options.scheme.requiredCards.inVillainDeck);
      }

      if (options.scheme.requiredCards.inHeroDeck !== undefined) {
        if (this.isRequiredTeam(options.scheme.requiredCards.inHeroDeck)) {
          // If we require  heroes from a specific team then push them into our deck
          const numHeroes = options.scheme.requiredCards.inHeroDeck.numHeroes;
          const team = options.scheme.requiredCards.inHeroDeck.team;

          const xHeroes = this.heroes.getCards().filter((hero) => {
            if (villainDeck.includes(hero)) return false;
            else if (hero.team === team) return true;
            else return false;
          });

          heroDeck.push(...this.getRandomElementsFromArray(xHeroes, numHeroes));
        } else {
          // Otherwise just push the specified required cards
          heroDeck.push(...options.scheme.requiredCards.inHeroDeck);
        }
      }

      if (options.scheme.requiredCards.inAdditionalDeck !== undefined)
        additionalDeck.push(...options.scheme.requiredCards.inAdditionalDeck);
    } // End check for scheme required cards

    if (numberPlayers != 1) {
      // Check to see if there are any mastermind required cards in the villain deck
      options.mastermind.alwaysLeads.forEach((item) => {
        if (!villainDeck.includes(item)) {
          if (
            (item.cardType === CardType.VILLAINGROUP &&
              villainDeck.filter(
                (villain) => villain.cardType === CardType.VILLAINGROUP
              ).length < rules.villainDeck.numVillainGroups) ||
            (item.cardType === CardType.HENCHMEN &&
              villainDeck.filter(
                (villain) => villain.cardType === CardType.HENCHMEN
              ).length < rules.villainDeck.numHenchmenGroups)
          )
            villainDeck.push(item);
        }
      });
    }

    // Scheme specific checks
    if (options.scheme === Schemes.WORLD_WAR_HULK.FALL_OF_THE_HULKS) {
      // Fall of the Hulks requires exactly 2 Hulk heroes. No more, no less
      const allHulks = this.heroes
        .getCards()
        .filter((hero) => hero.name.toUpperCase().includes('HULK'));

      const selectedHulks = this.getRandomElementsFromArray(allHulks, 2);
      heroDeck.push(
        ...this.heroes.shuffle(rules.heroDeck.numHeroes, selectedHulks, [
          ...heroDeck,
          ...villainDeck,
          ...allHulks.filter((item) => !selectedHulks.includes(item)),
        ])
      );
    } else if (options.scheme === Schemes.CIVIL_WAR.AVENGERS_VS_XMEN) {
      // Avengers vs X-Men requires 2 teams and 3 heroes from each
      const teams: Set<ITeam | undefined> = new Set<ITeam | undefined>(
        this.heroes.getCards().map((hero) => hero.team)
      );
      if (teams.has(undefined)) teams.delete(undefined);
      const teamsFiltered = [...teams];

      for (let i = 0; i < 2; i++) {
        const team = teamsFiltered.splice(Math.random(), 1);
        const teamHeroes = this.heroes
          .getCards()
          .filter((hero) => team.includes(hero.team));
        heroDeck.push(...this.getRandomElementsFromArray(teamHeroes, 3));
      }
    } else if (
      options.scheme === Schemes.INTO_THE_COSMOS.DESTROY_THE_NOVA_CORPS
    ) {
      // The scheme states that we should include "exactly 1 Nova" but he
      // appears in 2 gamesets so shuffle between them
      if (this.gameSets.includes(GameSets.CHAMPIONS))
        heroDeck.push(
          ...this.getRandomElementsFromArray(
            [Heroes.INTO_THE_COSMOS.NOVA, Heroes.CHAMPIONS.NOVA],
            1
          )
        );
      else heroDeck.push(Heroes.INTO_THE_COSMOS.NOVA);
    } else if (options.scheme === Schemes.REVELATIONS.HOUSE_OF_M) {
      const nonXHeroes = this.heroes
        .getCards()
        .filter((hero) => hero.team !== Teams.X_MEN);
      heroDeck.push(...this.getRandomElementsFromArray(nonXHeroes, 2));
    }

    // This function will build out the rest of the deck after all the
    // required cards have been processed
    const buildRemainingDeck = (
      deckRequirements: IDeckRequirements,
      deck: ICard[]
    ): ICard[] => {
      const excludeDecks = [...heroDeck, ...villainDeck, ...additionalDeck];
      const numPicked = (cardType: CardType) =>
        deck.filter((card) => card.cardType === cardType).length;
      if (
        deckRequirements.numHenchmenGroups !== undefined &&
        deckRequirements.numHenchmenGroups > numPicked(CardType.HENCHMEN)
      ) {
        const excHench: IHenchmen[] = excludeDecks.filter(
          (card) => card.cardType === CardType.HENCHMEN
        ) as IHenchmen[];

        deck.push(
          ...this.henchmen.shuffle(
            deckRequirements.numHenchmenGroups - numPicked(CardType.HENCHMEN),
            undefined,
            excHench
          )
        );
      }

      if (
        deckRequirements.numVillainGroups !== undefined &&
        deckRequirements.numVillainGroups > numPicked(CardType.VILLAINGROUP)
      )
        deck.push(
          ...this.villains.shuffle(
            deckRequirements.numVillainGroups -
              numPicked(CardType.VILLAINGROUP),
            undefined,
            excludeDecks
          )
        );

      if (
        deckRequirements.numHeroes !== undefined &&
        deckRequirements.numHeroes > numPicked(CardType.HERO)
      )
        deck.push(
          ...this.heroes.shuffle(
            deckRequirements.numHeroes - numPicked(CardType.HERO),
            undefined,
            excludeDecks
          )
        );

      return deck;
    }; // End buildRemainingDeck

    if (rules.additionalDeck !== undefined) {
      if (
        [
          Schemes.WORLD_WAR_HULK.MUTATING_GAMMA_RAYS,
          Schemes.WORLD_WAR_HULK.SHOOT_HULK_INTO_SPACE,
        ].includes(options.scheme)
      ) {
        // These schemes require a Hulk hero in the additional deck

        const hulkHeroes = this.heroes
          .getCards()
          .filter((hero) => hero.name.toUpperCase().includes('HULK'));
        additionalDeck.push(...this.getRandomElementsFromArray(hulkHeroes, 1));
      }

      if (
        rules.additionalDeck.deck !== undefined &&
        rules.additionalDeck.deck.numMasterminds !== undefined
      )
        additionalDeck.push(
          ...this.masterminds.shuffle(
            rules.additionalDeck.deck.numMasterminds,
            undefined,
            [options.mastermind]
          )
        );

      additionalDeck = buildRemainingDeck(
        rules.additionalDeck?.deck,
        additionalDeck
      );

      // Check for Symbiotic Absorption which requires the always leads of the
      // drained mastermind to be added to the villain deck
      if (options.scheme === Schemes.VENOM.SYMBIOTIC_ABSORPTION) {
        const drainedMastermind = additionalDeck.find(
          (card) => card.cardType === CardType.MASTERMIND
        );
        const alwaysLeads = (drainedMastermind as IMastermind).alwaysLeads[0];
        villainDeck.push(alwaysLeads);
      }
    }

    villainDeck = buildRemainingDeck(rules.villainDeck, villainDeck);
    heroDeck = buildRemainingDeck(rules.heroDeck, heroDeck);

    function sortCardTypeComparator(item1: ICard, item2: ICard) {
      switch (item1.cardType) {
        case CardType.HERO:
          if (item2.cardType !== CardType.HERO) return -1;
          else return sortNameComparator(item1, item2);
        case CardType.HENCHMEN:
          switch (item2.cardType) {
            case CardType.HERO:
              return 1;
            case CardType.HENCHMEN:
              return sortNameComparator(item1, item2);
            case CardType.VILLAINGROUP:
              return -1;
            default:
              return 0;
          }
        case CardType.VILLAINGROUP:
          if (item2.cardType !== CardType.VILLAINGROUP) return 1;
          else return sortNameComparator(item1, item2);
        default:
          return 0;
      }
    }

    // Function to check in which order 2 cards should come based on their name
    function sortNameComparator(
      item1: ICard | IKeyword,
      item2: ICard | IKeyword
    ) {
      if (item1.name < item2.name) return -1;
      else if (item1.name > item2.name) return 1;
      else return 0;
    }

    const gameSetup: IGameSetup = {
      scheme: options.scheme,
      mastermind: options.mastermind,
      numPlayers: numberPlayers,
      heroDeck: {
        cards: heroDeck.sort(sortCardTypeComparator),
        numBystanders: rules.heroDeck.numBystanders,
        numWounds: rules.heroDeck.numWounds,
      },
      villainDeck: {
        cards: villainDeck.sort(sortCardTypeComparator),
        numTwists: rules.villainDeck.numTwists,
        numBystanders: rules.villainDeck.numBystanders,
        numShieldOfficers: rules.villainDeck.numShieldOfficers,
        numSidekicks: rules.villainDeck.numSidekicks,
        numWounds: rules.villainDeck.numWounds,
        numAmbitions: rules.villainDeck.numAmbitions,
        numMasterStrikes: options.advancedSolo
          ? 5
          : rules.villainDeck.numMasterStrikes,
      },
      additionalDeck: rules.additionalDeck
        ? ({
            name: rules.additionalDeck.name,
            instructions: rules.additionalDeck.instruction,
            deck: {
              cards: additionalDeck.sort(sortCardTypeComparator),
              numBystanders: rules.additionalDeck.deck.numBystanders,
              numWounds: rules.additionalDeck.deck.numWounds,
              numTwists: rules.additionalDeck.deck.numTwists,
            },
          } as IAdditionalDeck)
        : undefined,
    };

    const uniqueKeywords: Set<IKeyword> = new Set();

    function addKeyword(keywords: IKeyword[] | undefined) {
      if (keywords != undefined) {
        keywords.forEach((keyword) => {
          uniqueKeywords.add(keyword);
        });
      }
    }

    [
      gameSetup.heroDeck,
      gameSetup.villainDeck,
      gameSetup.additionalDeck?.deck,
    ].forEach((deck) => {
      if (deck != undefined) {
        deck.cards.forEach((card) => addKeyword(card.keywords));
      }
    });

    addKeyword(gameSetup.scheme.keywords);
    addKeyword(gameSetup.mastermind.keywords);

    gameSetup.keywords =
      uniqueKeywords.size == 0
        ? undefined
        : [...uniqueKeywords].sort(sortNameComparator);

    return gameSetup;
  }

  private getRandomElementsFromArray<T extends ICard>(
    array: T[],
    numberOfRandomElementsToExtract = 1
  ): T[] {
    const elements: T[] = [];
    function getRandomElement(arr: T[]): T[] {
      if (elements.length < numberOfRandomElementsToExtract) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    return getRandomElement([...array]);
  }
}
