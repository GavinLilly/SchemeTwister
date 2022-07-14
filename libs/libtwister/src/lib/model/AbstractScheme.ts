import merge from 'ts-deepmerge';
import { PartialDeep } from 'type-fest';

import defaultRules from '../data/defaultRules';
import { MultiCardStore } from '../factories';

import { AbstractMastermind } from './AbstractMastermind';
import { GameSetup } from './GameSetup';
import { CardType } from './cardType.enum';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  ICard,
  IGameSetup,
  IHenchmen,
  IHero,
  IKeyword,
  INumPlayerRules,
  IVillainGroup,
  VillainDeckMinimal,
} from './interfaces';
import { NumPlayers, numPlayers, Rules, ShortScheme } from './types';

export abstract class AbstractScheme implements ICard {
  // Meta
  public readonly id: string;
  public abstract gameSetId: string;
  public readonly keywords?: IKeyword[] = undefined;
  public readonly cardType: CardType = CardType.SCHEME;
  public rules: Rules;

  // Card content
  public readonly name: string;
  public readonly setup: string;
  public readonly twist: string;
  public readonly evilWins: string;
  public readonly specialRules?: string = undefined;

  constructor(scheme: ShortScheme, numTwists: number);
  constructor(
    scheme: ShortScheme,
    numTwists1Player: number,
    numTwists2Player: number,
    numTwists3Player: number,
    numTwists4Player: number,
    numTwists5Player: number
  );
  constructor(
    scheme: ShortScheme,
    numTwists1: number,
    numTwists2?: number,
    numTwists3?: number,
    numTwists4?: number,
    numTwists5?: number
  ) {
    // Destructure object to assign baseline variables
    ({
      id: this.id,
      keywords: this.keywords,
      name: this.name,
      setup: this.setup,
      twist: this.twist,
      evilWins: this.evilWins,
      specialRules: this.specialRules,
    } = scheme);

    this.rules = Object.assign({}, defaultRules());
    if (
      numTwists1 !== undefined &&
      numTwists2 !== undefined &&
      numTwists3 !== undefined &&
      numTwists4 !== undefined &&
      numTwists5 !== undefined
    ) {
      this.rules[1].villainDeck.numTwists = numTwists1;
      this.rules[2].villainDeck.numTwists = numTwists2;
      this.rules[3].villainDeck.numTwists = numTwists3;
      this.rules[4].villainDeck.numTwists = numTwists4;
      this.rules[5].villainDeck.numTwists = numTwists5;
    } else {
      this.overrideDefaultRules({ villainDeck: { numTwists: numTwists1 } });
    }
  }

  public static empty(): AbstractScheme {
    return new (class extends AbstractScheme {
      public readonly gameSetId = 'EMPTY_GAMESET';
    })(
      {
        id: 'EMPTY_SCHEME',
        name: 'EMPTY SCHEME',
        setup: 'n/a',
        evilWins: 'n/a',
        twist: 'n/a',
      },
      0
    );
  }

  protected static addToDeck<T extends ICard>(
    array: T[] | undefined,
    card: T,
    maxLength?: number
  ): T[];
  protected static addToDeck<T extends ICard>(
    array: T[] | undefined,
    card: T,
    maxLength?: number,
    ...extraCards: T[]
  ): T[];
  protected static addToDeck<T extends ICard>(
    array: T[] | undefined,
    card: T,
    maxLength?: number,
    ...extraCards: T[]
  ): T[] {
    const cards: T[] = [card, ...extraCards];
    if (maxLength !== undefined && cards.length > maxLength) {
      throw new Error(
        "The number of cards to add can't be more than the maximum length of the array"
      );
    }

    if (array === undefined) {
      return cards;
    }

    if (maxLength !== undefined && cards.length > maxLength - array.length) {
      throw new Error(
        "The number of cards to add can't be more than the amount of space in the array"
      );
    }

    const newArray = Array.from(array);

    newArray.push(...cards);

    if (maxLength !== undefined && newArray.length >= maxLength) {
      newArray.splice(0, newArray.length - maxLength);
    }

    return newArray;
  }

  /**
   * Override the default rules for all numbers of players
   * @param override a partial set of rules to override the defaults
   * @returns a configured instance of an {@link AbstractScheme}
   */
  public overrideDefaultRules(override: PartialDeep<INumPlayerRules>): this {
    this.overrideEachRule((rule) => merge(rule, override));
    return this;
  }

  /**
   * Override the rules for each number of players. Useful for setting a rule based on the number of players
   * @param func a function to apply to the rule set for each number of players
   * @returns a configured instance of an {@link AbstractScheme}
   */
  public overrideEachRule(
    func: (rule: INumPlayerRules, num: number) => INumPlayerRules
  ): this {
    numPlayers.forEach((num) => {
      this.rules[num] = func(this.rules[num], num);
    });

    return this;
  }

  /**
   * Builds a game setup using the rules defined for this scheme
   * @param numPlayers the number of players to build the setup for
   * @param selectedMastermind the mastermind to inject into this setup
   * @param heroStore a hero factory to get heroes for the setup
   * @param villainStore a villain factory to get heroes for the setup
   * @param henchmenStore a henchmen factory to get heroes for the setup
   * @param mastermindStore a mastermind factory to get heroes for the setup
   * @returns a fully populated setup for a game
   */
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean
  ): Promise<IGameSetup>;

  /**
   * Builds a game setup using the rules defined for this scheme
   * @param numPlayers the number of players to build the setup for
   * @param selectedMastermind the mastermind to inject into this setup
   * @param heroStore a hero factory to get heroes for the setup
   * @param villainStore a villain factory to get heroes for the setup
   * @param henchmenStore a henchmen factory to get heroes for the setup
   * @param mastermindStore a mastermind factory to get heroes for the setup
   * @param partialHeroDeck a hero deck to start the setup from
   * @param partialVillainDeck a villain deck to start the setup from
   * @param partialAdditionalDeck an additional deck to start the setup from
   * @returns a fully populated setup for a game
   */
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup>;

  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo = false,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    //#region Get player rules
    const mastermindRules = selectedMastermind.getRuleOverride();
    const ruleSet =
      mastermindRules !== undefined
        ? this.clone().overrideEachRule(mastermindRules).rules
        : this.rules;
    const playerRules = ruleSet[numPlayers];
    const heroRules = playerRules.heroDeck;
    const villainRules = playerRules.villainDeck;
    const additionalRules = playerRules.additionalDeck;
    //#endregion Get player rules

    //#region Create skeleton decks
    const fullDeck = new GameSetup({
      numPlayers: numPlayers,
      mastermind: selectedMastermind,
      scheme: this,
      heroDeck: {
        heroes: [],
        numBystanders:
          heroRules.numBystanders !== undefined
            ? heroRules.numBystanders
            : undefined,
        ...partialHeroDeck,
      },
      villainDeck: {
        villains: [],
        henchmen: [],
        numTwists: villainRules.numTwists,
        numMasterStrikes: advancedSolo ? 5 : villainRules.numMasterStrikes,
        ...partialVillainDeck,
      },
      numShieldOfficers: playerRules.numShieldOfficers,
      numWounds: playerRules.numWounds,
    });

    //#endregion Create skeleton decks

    //#region Build the additional deck first if required
    if (additionalRules !== undefined) {
      fullDeck.additionalDeck = {
        name: additionalRules.name,
        instructions: additionalRules.instruction,
        deck: { ...additionalRules.deck, ...partialAdditionalDeck },
      };

      // Some setups don't specify cards to go in the deck
      if (additionalRules.deck !== undefined) {
        // Populate the heroes
        const numHeroes =
          (additionalRules.deck.numHeroes || 0) -
          (fullDeck.additionalDeck.deck.heroes?.length || 0);

        if (numHeroes > 0) {
          fullDeck.additionalDeck.deck.heroes = [];
          fullDeck.additionalDeck.deck.heroes.push(
            ...heroStore.getManyRandom(numHeroes)
          );
        }

        // Populate the henchmen
        const numHenchmen =
          (additionalRules.deck.numHenchmenGroups || 0) -
          (fullDeck.additionalDeck.deck.henchmen?.length || 0);

        if (numHenchmen > 0) {
          fullDeck.additionalDeck.deck.henchmen = [];
          fullDeck.additionalDeck.deck.henchmen.push(
            ...henchmenStore.getManyRandom(numHenchmen)
          );
        }

        // Populate the villains
        const numVillains =
          (additionalRules.deck.numVillainGroups || 0) -
          (fullDeck.additionalDeck.deck.villains?.length || 0);

        if (numVillains > 0) {
          fullDeck.additionalDeck.deck.villains = [];
          fullDeck.additionalDeck.deck.villains.push(
            ...villainStore.getManyRandom(numVillains)
          );
        }

        const numMasterminds =
          (additionalRules.deck.numMasterminds || 0) -
          (fullDeck.additionalDeck.deck.masterminds?.length || 0);

        if (numMasterminds > 0) {
          fullDeck.additionalDeck.deck.masterminds = [];
          fullDeck.additionalDeck.deck.masterminds.push(
            ...mastermindStore.getManyRandom(numMasterminds)
          );
        }
      }
    }
    //#endregion Build the additional deck first if required

    //#region Build hero deck
    // Add heroes to hero deck
    const numRemainingHeroDeckHeroes =
      heroRules.numHeroes - fullDeck.heroDeck.heroes.length;
    if (numRemainingHeroDeckHeroes > 0) {
      fullDeck.heroDeck.heroes.push(
        ...heroStore.getManyRandom(numRemainingHeroDeckHeroes)
      );
    }

    // Check if any henchmen need to be added to the hero deck. If none are defined then we default to 0
    const numRemainingHeroDeckHenchmen =
      (heroRules.numHenchmenGroups || 0) -
      (fullDeck.heroDeck.henchmen?.length || 0);
    if (numRemainingHeroDeckHenchmen > 0) {
      fullDeck.heroDeck.henchmen = [];

      fullDeck.heroDeck.henchmen.push(
        ...henchmenStore.getManyRandom(numRemainingHeroDeckHenchmen)
      );
    }
    //#endregion Build hero deck

    //#region Build villain deck
    // Start by adding any heroes
    const numRemVillDeckHeroes =
      (villainRules.numHeroes || 0) -
      (fullDeck.villainDeck.heroes?.length || 0);
    if (numRemVillDeckHeroes > 0) {
      fullDeck.villainDeck.heroes = [];

      fullDeck.villainDeck.heroes.push(
        ...heroStore.getManyRandom(numRemVillDeckHeroes)
      );
    }

    // Next add henchmen
    const numRemVillDeckHenchmen = () =>
      villainRules.numHenchmenGroups - fullDeck.villainDeck.henchmen.length;

    // Check to see if any more henchmen are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsHenchmen = selectedMastermind.alwaysLeads.filter(
      (item) => item.cardType === CardType.HENCHMEN
    );
    if (
      numRemVillDeckHenchmen() > 0 &&
      alwaysLeadsHenchmen.length < numRemVillDeckHenchmen()
    ) {
      const mastermindHenchmen = henchmenStore.getAll(
        alwaysLeadsHenchmen.map((henchmen) => henchmen.id)
      );

      fullDeck.villainDeck.henchmen.push(...mastermindHenchmen);
    }

    // Check again in case the mastermind did not fill all the slots
    if (numRemVillDeckHenchmen() > 0) {
      fullDeck.villainDeck.henchmen.push(
        ...henchmenStore.getManyRandom(numRemVillDeckHenchmen())
      );
    }

    // Next add villains
    const numRemVillDeckVillains = () =>
      villainRules.numVillainGroups - fullDeck.villainDeck.villains.length;

    // Check to see if any more villains are needed and if so, whether the mastermind demands any
    const alwaysLeadsVillains = selectedMastermind.alwaysLeads.filter(
      (item) => item.cardType === CardType.VILLAINGROUP
    );
    if (
      numRemVillDeckVillains() > 0 &&
      alwaysLeadsVillains.length < numRemVillDeckVillains()
    ) {
      const mastermindVillains = villainStore.getAll(
        alwaysLeadsVillains.map((villain) => villain.id)
      );

      fullDeck.villainDeck.villains.push(...mastermindVillains);
    }

    // Check again in case the mastermind did not fill all the slots
    if (numRemVillDeckVillains() > 0) {
      fullDeck.villainDeck.villains.push(
        ...villainStore.getManyRandom(numRemVillDeckVillains())
      );
    }

    // Next add masterminds
    const numRemVillDeckMasterminds =
      (villainRules.numMasterminds || 0) -
      (fullDeck.villainDeck.masterminds?.length || 0);
    if (numRemVillDeckMasterminds > 0) {
      fullDeck.villainDeck.masterminds = [];
      fullDeck.villainDeck.masterminds.push(
        ...mastermindStore.getManyRandom(numRemVillDeckMasterminds)
      );
    }

    // Finally add remaining deck elements
    fullDeck.villainDeck.numAmbitions = villainRules.numAmbitions;
    fullDeck.villainDeck.numBystanders = villainRules.numBystanders;
    fullDeck.villainDeck.numSidekicks = villainRules.numSidekicks;
    fullDeck.villainDeck.numTwists = villainRules.numTwists;
    //#endregion Build villain deck

    return fullDeck;
  }

  public toString(): string {
    return this.name;
  }

  public clone() {
    const cls = this.constructor as new (
      scheme: ShortScheme,
      numTwists1: number,
      numTwists2: number,
      numTwists3: number,
      numTwists4: number,
      numTwists5: number
    ) => this;
    return new cls(
      {
        id: this.id,
        keywords: this.keywords,
        name: this.name,
        setup: this.setup,
        twist: this.twist,
        evilWins: this.evilWins,
        specialRules: this.specialRules,
      },
      this.rules[1].villainDeck.numTwists,
      this.rules[2].villainDeck.numTwists,
      this.rules[3].villainDeck.numTwists,
      this.rules[4].villainDeck.numTwists,
      this.rules[5].villainDeck.numTwists
    );
  }
}
