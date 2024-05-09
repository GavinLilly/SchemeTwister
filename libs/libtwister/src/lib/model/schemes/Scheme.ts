import merge from 'ts-deepmerge';
import { PartialDeep } from 'type-fest';
import * as uuid from 'uuid';

import { CardStore, StoreOfStores } from '../../factories';
import { ISetupConfig } from '../../libTwister';
import { GameSet } from '../GameSet';
import {
  AbstractCardGroup,
  Henchmen,
  Mastermind,
  VillainGroup,
} from '../cards';
import {
  AdditionalDeckDeckMinimal,
  IAdditionalDeck,
  IAdditionalDeckRules,
  IPlayableObject,
  IGameSetMeta,
  IGameSetup,
  IHeroDeck,
  IKeyword,
  INumPlayerRules,
  IVillainDeck,
  IAdditionalDeckDeck,
} from '../interfaces';
import { Rules, RulesType } from '../rules';
import { CARD_TYPE, SchemeMinusRules, numPlayers } from '../types';

export interface ISetupConfigWithStore extends Omit<ISetupConfig, 'scheme'> {
  /** A collection of stores to select cards from */
  store: StoreOfStores;
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
    deck: T[],
    card: T,
    maxDeckLength?: number
  ): T[];
  /**
   * Adds the provided cards to the provided deck, checking to make sure the new
   * deck size does not exceed the configured maximum.
   * @param deck the deck of cards to add to
   * @param card the card to add to the deck
   * @param maxDeckLength the maximum size of the deck
   * @param extraCards an array of additional cards to add to the deck
   */
  public static addToDeck<T extends IPlayableObject>(
    deck: T[],
    card: T,
    maxDeckLength?: number,
    ...extraCards: T[]
  ): T[];
  public static addToDeck<T extends IPlayableObject>(
    deck: T[],
    card: T,
    maxDeckLength?: number,
    ...extraCards: T[]
  ): T[] {
    const cardsToAdd = [card, ...extraCards];
    let newDeck = new Set([...deck, ...cardsToAdd]);

    if (maxDeckLength === undefined) {
      return Array.from(newDeck);
    }

    if (cardsToAdd.length > maxDeckLength) {
      throw new Error(
        `The number of cards to add (${cardsToAdd.length}) can't be more than the maximum length of the array (${maxDeckLength})`
      );
    }

    const remainingSpace = maxDeckLength - deck.length;
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

    return Array.from(newDeck);
  }

  private static _buildCards<T extends AbstractCardGroup>(
    store: Readonly<CardStore<T>>,
    existingCards: ReadonlyArray<T> = [],
    deckNumRequired = 0,
    seedCards?: ReadonlyArray<T>
  ): T[] {
    if (deckNumRequired === 0) {
      return [];
    }

    existingCards.forEach((card) => store.removeCard(card));

    const returnCards = new Set(existingCards);

    const numRequired = () => deckNumRequired - returnCards.size;

    if (seedCards !== undefined) {
      const seeds = this._buildFromSeeds(numRequired(), seedCards);
      store.pickMany(seeds).forEach((seed) => returnCards.add(seed));
    }

    this._buildFromRandomCards(numRequired(), store).forEach((card) =>
      returnCards.add(card)
    );

    const returnArray = Array.from(returnCards);

    returnArray.sort((a, b) => a.name.localeCompare(b.name));

    return returnArray;
  }

  private static _buildFromSeeds<T extends AbstractCardGroup>(
    numRequiredCards: number,
    seedCards: ReadonlyArray<T>
  ): ReadonlyArray<T> {
    if (numRequiredCards === 0 || seedCards.length === 0) {
      return [];
    }

    const numFromSeed = Math.min(seedCards.length, numRequiredCards);

    return seedCards.slice(0, numFromSeed);
  }

  private static _buildFromRandomCards<T extends AbstractCardGroup>(
    numRequiredCards: number,
    store: Readonly<CardStore<T>>
  ): ReadonlyArray<T> {
    if (numRequiredCards === 0) {
      return [];
    }

    const randomCards = store.pickRandom(numRequiredCards);

    if (randomCards instanceof Array) {
      return randomCards;
    } else {
      return [randomCards];
    }
  }

  private _buildAdditionalDecks(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>,
    // TODO Disabled while trying to figure out the best way to lock additional decks
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    partialAdditionalDeck?: Readonly<AdditionalDeckDeckMinimal>
  ): IAdditionalDeck[] {
    const additionalDecks = [];
    const requiredAdditionalDeck = this.initialiseAdditionalDecks(rules, store);

    if (rules.additionalDeck.length > 0) {
      const firstAdditionalDeck = Scheme._buildAdditionalDeck(
        rules.additionalDeck[0],
        store,
        requiredAdditionalDeck
      );
      additionalDecks.push(firstAdditionalDeck);
    }

    if (rules.additionalDeck.length >= 1) {
      for (let i = 1; i < rules.additionalDeck.length; i++) {
        const otherAdditionalDeck = Scheme._buildAdditionalDeck(
          rules.additionalDeck[i],
          store
        );
        additionalDecks.push(otherAdditionalDeck);
      }
    }

    return additionalDecks;
  }

  /**
   * Builds the additional deck based on the provided rules
   * @param additionalRules the rules to build to
   * @param store a store of stores for selecting cards for the setup
   * @param partialAdditionalDeck a baseline of the deck to build from
   * @returns an instantiation of an additional deck
   */
  private static _buildAdditionalDeck(
    additionalRules: Readonly<IAdditionalDeckRules>,
    store: Readonly<StoreOfStores>,
    partialAdditionalDeck?: Readonly<AdditionalDeckDeckMinimal>
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
   * @param rules the rules to follow for generating the hero deck
   * @param numPlayers the number pf players to build the hero deck for
   * @param store a store of stores for selecting cards for the setup
   * @param partialHeroDeck a baseline of the deck to build from
   * @returns an instantiation of the hero deck
   */
  private _buildHeroDeck(
    rules: Readonly<INumPlayerRules>,
    numPlayers: number,
    store: Readonly<StoreOfStores>,
    partialHeroDeck: Readonly<IHeroDeck>
  ): IHeroDeck {
    const heroDeck = this.initialiseHeroDeck(rules, store, numPlayers);

    if (heroDeck.heroes.length < rules.heroDeck.numHeroes) {
      heroDeck.heroes = Scheme._buildCards(
        store.heroStore,
        heroDeck.heroes,
        rules.heroDeck.numHeroes,
        partialHeroDeck.heroes
      );
    }

    if (
      (heroDeck.henchmen?.length ?? 0) < (rules.heroDeck.numHenchmenGroups ?? 0)
    ) {
      heroDeck.henchmen = Scheme._buildCards(
        store.henchmenStore,
        heroDeck.henchmen,
        rules.heroDeck.numHenchmenGroups,
        partialHeroDeck.henchmen
      );
    }

    heroDeck.numBystanders = rules.heroDeck.numBystanders;

    return heroDeck;
  }

  private static _buildHenchmenForVillainDeck(
    initiatedHenchmen: Henchmen[],
    rules: Readonly<INumPlayerRules>,
    store: StoreOfStores,
    partialDeck: ReadonlyArray<Henchmen>,
    selectedMastermind: Mastermind
  ): Henchmen[] {
    const henchmen = new Set(initiatedHenchmen);

    const numRemVillDeckHenchmen =
      rules.villainDeck.numHenchmenGroups - henchmen.size;

    // Check to see if any more henchmen are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsHenchmen = selectedMastermind.alwaysLeads
      .filter((item) => item.cardType === 'Henchmen')
      .filter((item): item is Henchmen => !!item);
    if (alwaysLeadsHenchmen.length <= numRemVillDeckHenchmen) {
      const mastermindHenchmen = alwaysLeadsHenchmen.map((henchmen) =>
        store.henchmenStore.pickOne(henchmen)
      );

      mastermindHenchmen.forEach((card) => henchmen.add(card));
    }

    // Check again in case the mastermind did not fill all the slots
    return Scheme._buildCards(
      store.henchmenStore,
      Array.from(henchmen),
      rules.villainDeck.numHenchmenGroups,
      partialDeck
    );
  }

  private static _buildVillainsForVillainDeck(
    initiatedVillains: VillainGroup[],
    rules: Readonly<INumPlayerRules>,
    store: StoreOfStores,
    partialDeck: ReadonlyArray<VillainGroup>,
    selectedMastermind: Mastermind
  ): VillainGroup[] {
    const villains = new Set(initiatedVillains);

    const numRemVillDeckVillains =
      rules.villainDeck.numVillainGroups - villains.size;

    // Check to see if any more villains are needed and if so,
    // whether the mastermind demands any
    const alwaysLeadsVillains = selectedMastermind.alwaysLeads
      .filter((item) => item.cardType === 'Villain Group')
      .filter((item): item is VillainGroup => !!item);
    if (alwaysLeadsVillains.length <= numRemVillDeckVillains) {
      const mastermindVillains = alwaysLeadsVillains.map((villains) =>
        store.villainStore.pickOne(villains)
      );

      mastermindVillains.forEach((card) => villains.add(card));
    }

    // Check again in case the mastermind did not fill all the slots
    return Scheme._buildCards(
      store.villainStore,
      Array.from(villains),
      rules.villainDeck.numVillainGroups,
      partialDeck
    );
  }

  private _buildVillainDeck(
    rules: Readonly<INumPlayerRules>,
    store: StoreOfStores,
    partialDeck: Readonly<
      Pick<IVillainDeck, 'heroes' | 'henchmen' | 'villains' | 'masterminds'>
    >,
    selectedMastermind: Mastermind
  ): IVillainDeck {
    // Initiate deck with cards required by scheme
    const returnDeck = this.initialiseVillainDeck(rules, store);

    // Check to see if all heroes have been addded
    if ((returnDeck.heroes?.length ?? 0) < (rules.villainDeck.numHeroes ?? 0)) {
      // Add heroes until full
      returnDeck.heroes = Scheme._buildCards(
        store.heroStore,
        returnDeck.heroes,
        rules.villainDeck.numHeroes,
        partialDeck.heroes
      );
    }

    returnDeck.henchmen = Scheme._buildHenchmenForVillainDeck(
      returnDeck.henchmen,
      rules,
      store,
      partialDeck.henchmen,
      selectedMastermind
    );

    returnDeck.villains = Scheme._buildVillainsForVillainDeck(
      returnDeck.villains,
      rules,
      store,
      partialDeck.villains,
      selectedMastermind
    );

    // Next add masterminds
    returnDeck.masterminds = Scheme._buildCards(
      store.mastermindStore,
      returnDeck.masterminds,
      rules.villainDeck.numMasterminds,
      partialDeck.masterminds
    );

    // Finally add remaining deck elements
    returnDeck.numAmbitions = rules.villainDeck.numAmbitions;
    returnDeck.numBystanders = rules.villainDeck.numBystanders;
    returnDeck.numSidekicks = rules.villainDeck.numSidekicks;
    returnDeck.numTwists = rules.villainDeck.numTwists;

    return returnDeck;
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
  public getSetup(config: Readonly<ISetupConfigWithStore>): IGameSetup {
    const isAdvancedSolo = config.advancedSolo ?? false;
    // Get player rules
    const ruleSet =
      config.mastermind?.ruleOverride !== undefined
        ? this.overrideEachRule(config.mastermind.ruleOverride).rules
        : this.rules;
    const playerRules = ruleSet[config.numPlayers];
    const { heroDeck: heroRules, villainDeck: villainRules } = playerRules;

    const heroDeckSeed = config.partialHeroDeck?.heroes ?? [];

    if (config.mastermind?.alwaysInclude !== undefined) {
      config.store.heroStore
        .pickMany(config.mastermind.alwaysInclude)
        .forEach((hero) => heroDeckSeed.push(hero));
    }

    const mastermind =
      config.mastermind ?? config.store.mastermindStore.pickRandom();

    // Build the additional deck first if required
    const additionalDecks = this._buildAdditionalDecks(
      playerRules,
      config.store,
      config.partialAdditionalDeck
    );

    // Build villain deck
    const villainDeck = {
      ...this._buildVillainDeck(
        playerRules,
        config.store,
        { villains: [], henchmen: [], ...config.partialVillainDeck },
        mastermind
      ),
    };

    // Build hero deck
    const heroDeck = this._buildHeroDeck(
      playerRules,
      config.numPlayers,
      config.store,
      {
        ...config.partialHeroDeck,
        heroes: heroDeckSeed,
        numBystanders: heroRules.numBystanders ?? undefined,
      }
    );

    return {
      numPlayers: config.numPlayers,
      mastermind,
      scheme: this,
      heroDeck,
      villainDeck: {
        ...villainDeck,
        numMasterStrikes: isAdvancedSolo ? 5 : villainRules.numMasterStrikes,
      },
      additionalDecks,
      numShieldOfficers: playerRules.numShieldOfficers,
      numWounds: playerRules.numWounds,
    };
  }

  public toString(): string {
    return this.name;
  }

  protected initialiseHeroDeck(
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    rules: Readonly<INumPlayerRules>,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    store: Readonly<StoreOfStores>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    numPlayers: number
  ): IHeroDeck {
    return {
      heroes: [],
    };
  }

  protected initialiseVillainDeck(
    rules: Readonly<INumPlayerRules>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    store: Readonly<StoreOfStores>
  ): IVillainDeck {
    return {
      henchmen: [],
      villains: [],
      numMasterStrikes: rules.villainDeck.numMasterStrikes,
      numTwists: rules.villainDeck.numTwists,
    };
  }

  protected initialiseAdditionalDecks(
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    rules: Readonly<INumPlayerRules>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    store: Readonly<StoreOfStores>
  ): IAdditionalDeckDeck | undefined {
    return undefined;
  }
}
