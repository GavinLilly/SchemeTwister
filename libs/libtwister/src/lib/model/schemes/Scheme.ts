import merge from 'ts-deepmerge';
import { PartialDeep } from 'type-fest';
import * as uuid from 'uuid';

import { CardStore, StoreOfStores } from '../../factories';
import { GameSet } from '../GameSet';
import { GameSetup } from '../GameSetup';
import { Henchmen, Hero, Mastermind, VillainGroup } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IAdditionalDeck,
  IAdditionalDeckRules,
  IPlayableObject,
  IGameSetMeta,
  IGameSetup,
  IHeroDeck,
  IHeroDeckRequirements,
  IKeyword,
  INumPlayerRules,
  IVillainDeck,
  IVillainDeckRequirements,
  VillainDeckMinimal,
} from '../interfaces';
import { Rules, RulesType } from '../rules';
import { CARD_TYPE, NumPlayers, SchemeMinusRules, numPlayers } from '../types';

export interface IGetSetupConfig {
  /** The number of players to build the setup for */
  numPlayers: NumPlayers;
  /** The mastermind to inject into this setup */
  selectedMastermind?: Mastermind;
  /** A collection of stores to select cards from */
  store: StoreOfStores;
  /** If the number of players is 1, whether to enable the advance solo mode (harder gameplay) */
  advancedSolo?: boolean;
  /** A hero deck to start the setup from */
  partialHeroDeck?: HeroDeckMinimal;
  /** A villain deck to start the setup from */
  partialVillainDeck?: VillainDeckMinimal;
  /** An additional deck to start the setup from */
  partialAdditionalDeck?: AdditionalDeckDeckMinimal;
}

/**
 * Scheme allows for a Scheme-rules from the game to be instantiated and
 * generate a game setup.
 */
export class Scheme implements IPlayableObject {
  // Meta
  private readonly _id: string;
  private readonly _gameSet: IGameSetMeta;
  private readonly _keywords?: IKeyword[] = undefined;
  private readonly _rules: RulesType;

  // Card content
  private readonly _name: string;
  private readonly _setup: string;
  private readonly _twist: string;
  private readonly _evilWins: string;
  private readonly _specialRules?: string = undefined;

  constructor(scheme: SchemeMinusRules) {
    ({
      id: this._id,
      name: this._name,
      gameSet: this._gameSet,
      setup: this._setup,
      twist: this._twist,
      evilWins: this._evilWins,
      specialRules: this._specialRules,
      keywords: this._keywords,
    } = scheme);

    const rules =
      scheme.meta.rules === undefined
        ? new Rules()
        : new Rules(scheme.meta.rules);

    this._rules = rules.rules;

    if (typeof scheme.meta.numTwists === 'number') {
      this.rules[1].villainDeck.numTwists = scheme.meta.numTwists;
      this.rules[2].villainDeck.numTwists = scheme.meta.numTwists;
      this.rules[3].villainDeck.numTwists = scheme.meta.numTwists;
      this.rules[4].villainDeck.numTwists = scheme.meta.numTwists;
      this.rules[5].villainDeck.numTwists = scheme.meta.numTwists;
    } else {
      this.rules[1].villainDeck.numTwists = scheme.meta.numTwists[1];
      this.rules[2].villainDeck.numTwists = scheme.meta.numTwists[2];
      this.rules[3].villainDeck.numTwists = scheme.meta.numTwists[3];
      this.rules[4].villainDeck.numTwists = scheme.meta.numTwists[4];
      this.rules[5].villainDeck.numTwists = scheme.meta.numTwists[5];
    }
  }

  public get gameSet() {
    return this._gameSet;
  }

  public get id() {
    return this._id;
  }

  public get keywords() {
    return this._keywords;
  }

  public get cardType() {
    return CARD_TYPE.scheme;
  }

  public get rules() {
    return this._rules;
  }

  public get name() {
    return this._name;
  }

  public get setup() {
    return this._setup;
  }

  public get twist() {
    return this._twist;
  }

  public get evilWins() {
    return this._evilWins;
  }

  public get specialRules() {
    return this._specialRules;
  }

  /**
   * Create an "empty" Scheme. Mainly used fot testing.
   * @returns a Scheme instantiated with empty data
   */
  public static empty(): Scheme {
    return new Scheme({
      id: uuid.v4(),
      name: 'EMPTY SCHEME',
      setup: 'n/a',
      evilWins: 'n/a',
      twist: 'n/a',
      cardType: CARD_TYPE.scheme,
      gameSet: GameSet.empty(),
      meta: {
        numTwists: 0,
      },
    });
  }

  /**
   * Adds the provided card to the provided deck, checking to make sure the new
   * deck size does not exceed the configured maximum.
   * @param deck the deck of cards to add to
   * @param card the card to add to the deck
   * @param maxLength the maximum size of the deck
   */
  public static addToDeck<T extends IPlayableObject>(
    deck: Set<T>,
    card: T,
    maxDeckLength?: number
  ): Set<T>;
  /**
   * Adds the provided cards to the provided deck, checking to make sure the new
   * deck size does not exceed the configured maximum.
   * @param deck the deck of cards to add to
   * @param card the card to add to the deck
   * @param maxDeckLength the maximum size of the deck
   * @param extraCards an array of additional cards to add to the deck
   */
  public static addToDeck<T extends IPlayableObject>(
    deck: Set<T>,
    card: T,
    maxDeckLength?: number,
    ...extraCards: T[]
  ): Set<T>;
  public static addToDeck<T extends IPlayableObject>(
    deck: Set<T>,
    card: T,
    maxDeckLength?: number,
    ...extraCards: T[]
  ): Set<T> {
    const cardsToAdd = [card, ...extraCards];
    let newDeck = new Set([...deck, ...cardsToAdd]);

    if (maxDeckLength === undefined) {
      return newDeck;
    }

    if (cardsToAdd.length > maxDeckLength) {
      throw new Error(
        `The number of cards to add (${cardsToAdd.length}) can't be more than the maximum length of the array (${maxDeckLength})`
      );
    }

    const remainingSpace = maxDeckLength - deck.size;
    if (cardsToAdd.length > remainingSpace) {
      throw new Error(
        `The number of cards to add (${cardsToAdd.length}) can't be more than the amount of space in the array (${remainingSpace})`
      );
    }

    const isNewDeckTooLong = newDeck.size >= maxDeckLength;
    if (isNewDeckTooLong) {
      const newDeckArray = [...newDeck];
      newDeckArray.splice(0, newDeck.size - maxDeckLength);
      newDeck = new Set(newDeckArray);
    }

    return newDeck;
  }

  private static _buildCards<
    T extends Hero | Henchmen | VillainGroup | Mastermind
  >(
    store: CardStore<T>,
    existingCards: Set<T> | undefined,
    deckNumRequired = 0
  ): Set<T> {
    if (deckNumRequired === 0) {
      return new Set();
    }

    const existingLength = existingCards !== undefined ? existingCards.size : 0;
    const numRequired = deckNumRequired - existingLength;

    const returnCards: T[] =
      existingCards !== undefined ? Array.from(existingCards) : [];

    if (numRequired > 0) {
      const newCards = store.pickRandom(numRequired);

      if (newCards instanceof Array) {
        returnCards.push(...newCards);
      } else {
        returnCards.push(newCards);
      }
    }

    returnCards.sort((a, b) => a.name.localeCompare(b.name));

    return new Set(returnCards);
  }

  /**
   * Builds the additional deck based on the provided rules
   * @param additionalRules the rules to build to
   * @param store a store of stores for selecting cards for the setup
   * @param partialAdditionalDeck a baseline of the deck to build from
   * @returns an instantiation of an additional deck
   */
  private static _buildAdditionalDeck(
    additionalRules: IAdditionalDeckRules,
    store: StoreOfStores,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IAdditionalDeck {
    const addDeck: IAdditionalDeck = {
      name: additionalRules.name,
      instructions: additionalRules.instruction,
      deck: { ...additionalRules.deck, ...partialAdditionalDeck },
    };

    // Some setups don't specify cards to go in the deck
    if (additionalRules.deck === undefined) {
      return addDeck;
    }

    addDeck.deck.heroes = this._buildCards(
      store.heroStore,
      addDeck.deck.heroes,
      additionalRules.deck.numHeroes
    );

    addDeck.deck.henchmen = this._buildCards(
      store.henchmenStore,
      addDeck.deck.henchmen,
      additionalRules.deck.numHenchmenGroups
    );

    addDeck.deck.villains = this._buildCards(
      store.villainStore,
      addDeck.deck.villains,
      additionalRules.deck.numVillainGroups
    );

    addDeck.deck.masterminds = this._buildCards(
      store.mastermindStore,
      addDeck.deck.masterminds,
      additionalRules.deck.numMasterminds
    );

    return addDeck;
  }

  /**
   * Builds the hero deck according to the provided rules
   * @param heroRules the rules to follow for generating the hero deck
   * @param store a store of stores for selecting cards for the setup
   * @param partialHeroDeck a baseline of the deck to build from
   * @returns an instantiation of the hero deck
   */
  private static _buildHeroDeck(
    heroRules: IHeroDeckRequirements,
    store: StoreOfStores,
    partialHeroDeck: IHeroDeck
  ): IHeroDeck {
    partialHeroDeck.heroes = this._buildCards(
      store.heroStore,
      partialHeroDeck.heroes,
      heroRules.numHeroes
    );

    partialHeroDeck.henchmen = this._buildCards(
      store.henchmenStore,
      partialHeroDeck.henchmen,
      heroRules.numHenchmenGroups
    );

    return partialHeroDeck;
  }

  private static _buildVillainDeck(
    villainRules: IVillainDeckRequirements,
    store: StoreOfStores,
    partialDeck: IVillainDeck,
    selectedMastermind: Mastermind
  ): IVillainDeck {
    // Start by adding any heroes
    partialDeck.heroes = this._buildCards(
      store.heroStore,
      partialDeck.heroes,
      villainRules.numHeroes
    );

    // Next add henchmen
    const numRemVillDeckHenchmen =
      villainRules.numHenchmenGroups - partialDeck.henchmen.size;

    // Check to see if any more henchmen are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsHenchmen = selectedMastermind.alwaysLeads
      .filter((item) => item.cardType === 'Henchmen')
      .filter((item): item is Henchmen => !!item);
    if (alwaysLeadsHenchmen.length <= numRemVillDeckHenchmen) {
      const mastermindHenchmen = alwaysLeadsHenchmen.map((henchmen) =>
        store.henchmenStore.pickOne(henchmen)
      );

      mastermindHenchmen.forEach((card) => partialDeck.henchmen.add(card));
    }

    // Check again in case the mastermind did not fill all the slots
    partialDeck.henchmen = this._buildCards(
      store.henchmenStore,
      partialDeck.henchmen,
      villainRules.numHenchmenGroups
    );

    // Next add villains
    const numRemVillDeckVillains =
      villainRules.numVillainGroups - partialDeck.villains.size;

    // Check to see if any more villains are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsVillains = selectedMastermind.alwaysLeads
      .filter((item) => item.cardType === 'Villain Group')
      .filter((item): item is VillainGroup => !!item);
    if (alwaysLeadsVillains.length <= numRemVillDeckVillains) {
      const mastermindVillains = alwaysLeadsVillains.map((villains) =>
        store.villainStore.pickOne(villains)
      );

      mastermindVillains.forEach((card) => partialDeck.villains.add(card));
    }

    // Check again in case the mastermind did not fill all the slots
    partialDeck.villains = this._buildCards(
      store.villainStore,
      partialDeck.villains,
      villainRules.numVillainGroups
    );

    // Next add masterminds
    partialDeck.masterminds = this._buildCards(
      store.mastermindStore,
      partialDeck.masterminds,
      villainRules.numMasterminds
    );

    // Finally add remaining deck elements
    partialDeck.numAmbitions = villainRules.numAmbitions;
    partialDeck.numBystanders = villainRules.numBystanders;
    partialDeck.numSidekicks = villainRules.numSidekicks;
    partialDeck.numTwists = villainRules.numTwists;

    return partialDeck;
  }

  /**
   * Override the default rules for all numbers of players
   * @param override a partial set of rules to override the defaults
   * @returns a configured instance of an {@link Scheme}
   */
  public overrideDefaultRules(override: PartialDeep<INumPlayerRules>): this {
    this.overrideEachRule((rule) => merge(rule, override) as INumPlayerRules);
    return this;
  }

  /**
   * Override the rules for each number of players. Useful for setting a rule
   * based on the number of players
   * @param func a function to apply to the rule set for each number of players
   * @returns a configured instance of an {@link Scheme}
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
   * @param config the config to use to create a game setup
   * @returns a fully populated setup for a game
   */
  public getSetup(config: IGetSetupConfig): IGameSetup {
    const advancedSolo = config.advancedSolo ?? false;
    // Get player rules
    const ruleSet =
      config.selectedMastermind?.ruleOverride !== undefined
        ? this.overrideEachRule(config.selectedMastermind.ruleOverride).rules
        : this.rules;
    const playerRules = ruleSet[config.numPlayers];
    const {
      heroDeck: heroRules,
      villainDeck: villainRules,
      additionalDeck: additionalRules,
    } = ruleSet[config.numPlayers];

    const heroDeckSeed = config.partialHeroDeck?.heroes ?? new Set();

    if (config.selectedMastermind?.alwaysInclude !== undefined) {
      config.store.heroStore
        .pickMany(config.selectedMastermind.alwaysInclude)
        .forEach((hero) => heroDeckSeed.add(hero));
    }

    // Create skeleton decks
    const fullDeck = new GameSetup({
      numPlayers: config.numPlayers,
      mastermind:
        config.selectedMastermind !== undefined
          ? config.selectedMastermind
          : config.store.mastermindStore.getRandom(),
      scheme: this,
      heroDeck: {
        ...config.partialHeroDeck,
        heroes: heroDeckSeed,
        numBystanders: heroRules.numBystanders ?? undefined,
      },
      villainDeck: {
        villains: new Set(),
        henchmen: new Set(),
        numTwists: villainRules.numTwists,
        numMasterStrikes: advancedSolo ? 5 : villainRules.numMasterStrikes,
        ...config.partialVillainDeck,
      },
      numShieldOfficers: playerRules.numShieldOfficers,
      numWounds: playerRules.numWounds,
    });

    // Build the additional deck first if required
    if (additionalRules !== undefined) {
      fullDeck.additionalDeck = Scheme._buildAdditionalDeck(
        additionalRules,
        config.store,
        config.partialAdditionalDeck
      );
    }

    // Build hero deck
    fullDeck.heroDeck = Scheme._buildHeroDeck(
      heroRules,
      config.store,
      fullDeck.heroDeck
    );

    // Build villain deck
    fullDeck.villainDeck = Scheme._buildVillainDeck(
      villainRules,
      config.store,
      fullDeck.villainDeck,
      fullDeck.mastermind
    );

    return fullDeck;
  }

  public toString(): string {
    return this.name;
  }
}
