/* eslint-disable complexity */
import merge from 'ts-deepmerge';
import { PartialDeep } from 'type-fest';
import * as uuid from 'uuid';

import { StoreOfStores } from '../../factories';
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
  nameSorter,
} from '../interfaces';
import { Rules, RulesType } from '../rules';
import { CARD_TYPE, NumPlayers, SchemeMinusRules, numPlayers } from '../types';

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
    deck: T[],
    card: T,
    maxLength?: number
  ): T[];
  /**
   * Adds the provided cards to the provided deck, checking to make sure the new
   * deck size does not exceed the configured maximum.
   * @param deck the deck of cards to add to
   * @param card the card to add to the deck
   * @param maxLength the maximum size of the deck
   * @param extraCards an array of additional cards to add to the deck
   */
  public static addToDeck<T extends IPlayableObject>(
    deck: T[],
    card: T,
    maxLength?: number,
    ...extraCards: T[]
  ): T[];
  public static addToDeck<T extends IPlayableObject>(
    deck: T[],
    card: T,
    maxLength?: number,
    ...extraCards: T[]
  ): T[] {
    const cardsToAdd: T[] = [card, ...extraCards];
    const newDeck = [...deck, ...cardsToAdd];

    if (maxLength === undefined) {
      return newDeck;
    }

    if (cardsToAdd.length > maxLength) {
      throw new Error(
        `The number of cards to add (${cardsToAdd.length}) can't be more than the maximum length of the array (${maxLength})`
      );
    }

    if (cardsToAdd.length > maxLength - deck.length) {
      throw new Error(
        `The number of cards to add (${
          cardsToAdd.length
        }) can't be more than the amount of space in the array (${
          maxLength - deck.length
        })`
      );
    }

    if (newDeck.length >= maxLength) {
      newDeck.splice(0, newDeck.length - maxLength);
    }

    return newDeck;
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
    const deck: IAdditionalDeck = {
      name: additionalRules.name,
      instructions: additionalRules.instruction,
      deck: { ...additionalRules.deck, ...partialAdditionalDeck },
    };

    // Some setups don't specify cards to go in the deck
    if (additionalRules.deck === undefined) {
      return deck;
    }

    // Populate the heroes
    const numHeroes =
      (additionalRules.deck.numHeroes ?? 0) - (deck.deck.heroes?.length ?? 0);

    if (numHeroes > 0) {
      deck.deck.heroes = new Array<Hero>().concat(
        store.heroStore.pickRandom(numHeroes)
      );
      deck.deck.heroes.sort(nameSorter);
    }

    // Populate the henchmen
    const numHenchmen =
      (additionalRules.deck.numHenchmenGroups ?? 0) -
      (deck.deck.henchmen?.length ?? 0);

    if (numHenchmen > 0) {
      deck.deck.henchmen = new Array<Henchmen>().concat(
        store.henchmenStore.pickRandom(numHenchmen)
      );
      deck.deck.henchmen.sort(nameSorter);
    }

    // Populate the villains
    const numVillains =
      (additionalRules.deck.numVillainGroups ?? 0) -
      (deck.deck.villains?.length ?? 0);

    if (numVillains > 0) {
      deck.deck.villains = new Array<VillainGroup>().concat(
        store.villainStore.pickRandom(numVillains)
      );
      deck.deck.villains.sort(nameSorter);
    }

    const numMasterminds =
      (additionalRules.deck.numMasterminds ?? 0) -
      (deck.deck.masterminds?.length ?? 0);

    if (numMasterminds > 0) {
      (deck.deck.masterminds = new Array<Mastermind>().concat(
        store.mastermindStore.pickRandom(numMasterminds)
      )),
        deck.deck.masterminds.sort(nameSorter);
    }

    return deck;
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
    const numRemainingHeroDeckHeroes =
      heroRules.numHeroes - partialHeroDeck.heroes.length;
    if (numRemainingHeroDeckHeroes > 0) {
      partialHeroDeck.heroes = partialHeroDeck.heroes.concat(
        store.heroStore.pickRandom(numRemainingHeroDeckHeroes)
      );
    }

    // Check if any henchmen need to be added to the hero deck. If none are
    // defined then we default to 0
    const numRemainingHeroDeckHenchmen =
      (heroRules.numHenchmenGroups ?? 0) -
      (partialHeroDeck.henchmen?.length ?? 0);
    if (numRemainingHeroDeckHenchmen > 0) {
      partialHeroDeck.henchmen = new Array<Henchmen>().concat(
        store.henchmenStore.pickRandom(numRemainingHeroDeckHenchmen)
      );
    }

    partialHeroDeck.heroes.sort(nameSorter);
    partialHeroDeck.henchmen?.sort(nameSorter);

    return partialHeroDeck;
  }

  private static _buildVillainDeck(
    villainRules: IVillainDeckRequirements,
    store: StoreOfStores,
    partialDeck: IVillainDeck,
    selectedMastermind: Mastermind
  ): IVillainDeck {
    // Start by adding any heroes
    const numRemVillDeckHeroes =
      (villainRules.numHeroes ?? 0) - (partialDeck.heroes?.length ?? 0);
    if (numRemVillDeckHeroes > 0) {
      partialDeck.heroes = new Array<Hero>().concat(
        store.heroStore.pickRandom(numRemVillDeckHeroes)
      );
    }

    // Next add henchmen
    const numRemVillDeckHenchmen = () =>
      villainRules.numHenchmenGroups - partialDeck.henchmen.length;

    // Check to see if any more henchmen are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsHenchmen = selectedMastermind.alwaysLeads?.filter(
      (item) => item.cardType === CARD_TYPE.henchmen
    );
    if (
      numRemVillDeckHenchmen() > 0 &&
      alwaysLeadsHenchmen.length < numRemVillDeckHenchmen()
    ) {
      const mastermindHenchmen = store.henchmenStore.pickMany(
        alwaysLeadsHenchmen.map((henchmen) => henchmen.id)
      );

      partialDeck.henchmen.push(...mastermindHenchmen);
    }

    // Check again in case the mastermind did not fill all the slots
    if (numRemVillDeckHenchmen() > 0) {
      partialDeck.henchmen = partialDeck.henchmen.concat(
        store.henchmenStore.pickRandom(numRemVillDeckHenchmen())
      );
    }

    // Next add villains
    const numRemVillDeckVillains = () =>
      villainRules.numVillainGroups - partialDeck.villains.length;

    // Check to see if any more villains are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsVillains = selectedMastermind.alwaysLeads.filter(
      (item) => item.cardType === CARD_TYPE.villainGroup
    );
    if (
      numRemVillDeckVillains() > 0 &&
      alwaysLeadsVillains.length <= numRemVillDeckVillains()
    ) {
      const mastermindVillains = store.villainStore.pickMany(
        alwaysLeadsVillains.map((villain) => villain.id)
      );

      partialDeck.villains.push(...mastermindVillains);
    }

    // Check again in case the mastermind did not fill all the slots
    if (numRemVillDeckVillains() > 0) {
      partialDeck.villains = partialDeck.villains.concat(
        store.villainStore.pickRandom(numRemVillDeckVillains())
      );
    }

    // Next add masterminds
    const numRemVillDeckMasterminds =
      (villainRules.numMasterminds ?? 0) -
      (partialDeck.masterminds?.length ?? 0);
    if (numRemVillDeckMasterminds > 0) {
      partialDeck.masterminds = new Array<Mastermind>().concat(
        store.mastermindStore.pickRandom(numRemVillDeckMasterminds)
      );
    }

    // Finally add remaining deck elements
    partialDeck.numAmbitions = villainRules.numAmbitions;
    partialDeck.numBystanders = villainRules.numBystanders;
    partialDeck.numSidekicks = villainRules.numSidekicks;
    partialDeck.numTwists = villainRules.numTwists;

    partialDeck.henchmen.sort(nameSorter);
    partialDeck.villains.sort(nameSorter);
    partialDeck.heroes?.sort(nameSorter);
    partialDeck.masterminds?.sort(nameSorter);

    return partialDeck;
  }

  /**
   * Override the default rules for all numbers of players
   * @param override a partial set of rules to override the defaults
   * @returns a configured instance of an {@link Scheme}
   */
  public overrideDefaultRules(override: PartialDeep<INumPlayerRules>): this {
    this.overrideEachRule((rule) => merge(rule, override));
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
   * @param numPlayers the number of players to build the setup for
   * @param selectedMastermind the mastermind to inject into this setup
   * @param heroStore a hero factory to get heroes for the setup
   * @param villainStore a villain factory to get heroes for the setup
   * @param henchmenStore a henchmen factory to get heroes for the setup
   * @param mastermindStore a mastermind factory to get heroes for the setup
   * @returns a fully populated setup for a game
   */
  public getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean
  ): IGameSetup;
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
  public getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup;
  public getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo = false,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    // Get player rules
    const ruleSet =
      selectedMastermind.ruleOverride !== undefined
        ? this.overrideEachRule(selectedMastermind.ruleOverride).rules
        : this.rules;
    const playerRules = ruleSet[numPlayers];
    const {
      heroDeck: heroRules,
      villainDeck: villainRules,
      additionalDeck: additionalRules,
    } = ruleSet[numPlayers];

    // Create skeleton decks
    const fullDeck = new GameSetup({
      numPlayers: numPlayers,
      mastermind: selectedMastermind,
      scheme: this,
      heroDeck: {
        heroes: [],
        numBystanders: heroRules.numBystanders ?? undefined,
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

    // Build the additional deck first if required
    if (additionalRules !== undefined) {
      fullDeck.additionalDeck = Scheme._buildAdditionalDeck(
        additionalRules,
        store,
        partialAdditionalDeck
      );
    }

    // Build hero deck
    fullDeck.heroDeck = Scheme._buildHeroDeck(
      heroRules,
      store,
      fullDeck.heroDeck
    );

    // Build villain deck
    fullDeck.villainDeck = Scheme._buildVillainDeck(
      villainRules,
      store,
      fullDeck.villainDeck,
      selectedMastermind
    );

    return fullDeck;
  }

  public toString(): string {
    return this.name;
  }
}
