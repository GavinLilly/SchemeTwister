import merge from 'ts-deepmerge';
import { PartialDeep } from 'type-fest';
import * as uuid from 'uuid';

import { StoreOfStores } from '../../factories/storeOfStores';
import { AbstractMastermind } from '../AbstractMastermind';
import { GameSetup } from '../GameSetup';
import { CardType } from '../cardType.enum';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IAdditionalDeck,
  IAdditionalDeckRules,
  ICard,
  IGameSetup,
  IKeyword,
  INumPlayerRules,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { Rules, RulesType } from '../rules';
import { NumPlayers, numPlayers } from '../types';

/**
 * Scheme allows for a Scheme-rules from the game to be instantiated and generate a game setup.
 */
export class Scheme implements ICard {
  // Meta
  public readonly id: string;
  public readonly gameSetId: string;
  public readonly keywords?: IKeyword[] = undefined;
  public readonly cardType: CardType = CardType.SCHEME;
  public rules: RulesType;

  // Card content
  public readonly name: string;
  public readonly setup: string;
  public readonly twist: string;
  public readonly evilWins: string;
  public readonly specialRules?: string = undefined;

  private static _sorter = (a: ICard, b: ICard) => (a.name < b.name ? -1 : 1);

  constructor(scheme: SchemeMinusRules) {
    ({
      id: this.id,
      name: this.name,
      gameSetId: this.gameSetId,
      setup: this.setup,
      twist: this.twist,
      evilWins: this.evilWins,
      specialRules: this.specialRules,
      keywords: this.keywords,
    } = scheme);

    const rules =
      scheme.meta.rules === undefined
        ? new Rules()
        : new Rules(scheme.meta.rules);

    this.rules = rules.rules;

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
      cardType: CardType.SCHEME,
      gameSetId: uuid.v4(),
      meta: {
        numTwists: 0,
      },
    });
  }

  /**
   * Adds the provided card to the provided deck, checking to make sure the new deck size does not exceed the configured maximum.
   * @param existingCards the deck of cards to add to
   * @param card the card to add to the deck
   * @param maxLength the maximum size of the deck
   */
  protected static addToDeck<T extends ICard>(
    existingCards: T[] | undefined,
    card: T,
    maxLength?: number
  ): T[];

  /**
   * Adds the provided cards to the provided deck, checking to make sure the new deck size does not exceed the configured maximum.
   * @param existingCards the deck of cards to add to
   * @param card the card to add to the deck
   * @param maxLength the maximum size of the deck
   * @param extraCards an array of additional cards to add to the deck
   */
  protected static addToDeck<T extends ICard>(
    existingCards: T[] | undefined,
    card: T,
    maxLength?: number,
    ...extraCards: T[]
  ): T[];

  protected static addToDeck<T extends ICard>(
    existingCards: T[] | undefined,
    card: T,
    maxLength?: number,
    ...extraCards: T[]
  ): T[] {
    const cards: T[] = [card, ...extraCards];

    if (existingCards === undefined) {
      return cards;
    }

    const newDeck = Array.from(existingCards);

    if (maxLength !== undefined) {
      if (cards.length > maxLength) {
        throw new Error(
          "The number of cards to add can't be more than the maximum length of the array"
        );
      }

      if (cards.length > maxLength - existingCards.length) {
        throw new Error(
          "The number of cards to add can't be more than the amount of space in the array"
        );
      }

      newDeck.push(...cards);

      if (newDeck.length >= maxLength) {
        newDeck.splice(0, newDeck.length - maxLength);
      }
    }

    return newDeck;
  }

  /**
   * Builds the additional deck based on the provided rules
   * @param additionalRules the rules to build to
   * @param heroStore a hero factory to get heroes for the setup
   * @param villainStore a villain factory to get heroes for the setup
   * @param henchmenStore a henchmen factory to get heroes for the setup
   * @param mastermindStore a mastermind factory to get heroes for the setup
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
    if (additionalRules.deck !== undefined) {
      // Populate the heroes
      const numHeroes =
        (additionalRules.deck.numHeroes || 0) - (deck.deck.heroes?.length || 0);

      if (numHeroes > 0) {
        deck.deck.heroes = [];
        deck.deck.heroes.push(...store.heroStore.getManyRandom(numHeroes));
      }

      // Populate the henchmen
      const numHenchmen =
        (additionalRules.deck.numHenchmenGroups || 0) -
        (deck.deck.henchmen?.length || 0);

      if (numHenchmen > 0) {
        deck.deck.henchmen = [];
        deck.deck.henchmen.push(
          ...store.henchmenStore.getManyRandom(numHenchmen)
        );
      }

      // Populate the villains
      const numVillains =
        (additionalRules.deck.numVillainGroups || 0) -
        (deck.deck.villains?.length || 0);

      if (numVillains > 0) {
        deck.deck.villains = [];
        deck.deck.villains.push(
          ...store.villainStore.getManyRandom(numVillains)
        );
      }

      const numMasterminds =
        (additionalRules.deck.numMasterminds || 0) -
        (deck.deck.masterminds?.length || 0);

      if (numMasterminds > 0) {
        deck.deck.masterminds = [];
        deck.deck.masterminds.push(
          ...store.mastermindStore.getManyRandom(numMasterminds)
        );
      }

      deck.deck.heroes?.sort(Scheme._sorter);
      deck.deck.henchmen?.sort(Scheme._sorter);
      deck.deck.villains?.sort(Scheme._sorter);
      deck.deck.masterminds?.sort(Scheme._sorter);
    }

    return deck;
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
   * Override the rules for each number of players. Useful for setting a rule based on the number of players
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
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    store: StoreOfStores,
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
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup>;

  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    store: StoreOfStores,
    advancedSolo = false,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    // Get player rules
    const ruleSet = selectedMastermind.hasRuleOverride
      ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.overrideEachRule(selectedMastermind.ruleOverride!).rules
      : this.rules;
    const playerRules = ruleSet[numPlayers];
    const {
      heroDeck: heroRules,
      villainDeck: villainRules,
      additionalDeck: additionalRules,
    } = playerRules;

    // Create skeleton decks
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

    // Build the additional deck first if required
    if (additionalRules !== undefined) {
      fullDeck.additionalDeck = Scheme._buildAdditionalDeck(
        additionalRules,
        store,
        partialAdditionalDeck
      );
    }

    //#region Build hero deck

    // Add heroes to hero deck
    const numRemainingHeroDeckHeroes =
      heroRules.numHeroes - fullDeck.heroDeck.heroes.length;
    if (numRemainingHeroDeckHeroes > 0) {
      fullDeck.heroDeck.heroes.push(
        ...store.heroStore.getManyRandom(numRemainingHeroDeckHeroes)
      );
    }

    // Check if any henchmen need to be added to the hero deck. If none are defined then we default to 0
    const numRemainingHeroDeckHenchmen =
      (heroRules.numHenchmenGroups || 0) -
      (fullDeck.heroDeck.henchmen?.length || 0);
    if (numRemainingHeroDeckHenchmen > 0) {
      fullDeck.heroDeck.henchmen = [];

      fullDeck.heroDeck.henchmen.push(
        ...store.henchmenStore.getManyRandom(numRemainingHeroDeckHenchmen)
      );
    }

    fullDeck.heroDeck.heroes.sort(Scheme._sorter);
    fullDeck.heroDeck.henchmen?.sort(Scheme._sorter);

    //#endregion Build hero deck

    //#region Build villain deck

    // Start by adding any heroes
    const numRemVillDeckHeroes =
      (villainRules.numHeroes || 0) -
      (fullDeck.villainDeck.heroes?.length || 0);
    if (numRemVillDeckHeroes > 0) {
      fullDeck.villainDeck.heroes = [];

      fullDeck.villainDeck.heroes.push(
        ...store.heroStore.getManyRandom(numRemVillDeckHeroes)
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
      const mastermindHenchmen = store.henchmenStore.getAll(
        alwaysLeadsHenchmen.map((henchmen) => henchmen.id)
      );

      fullDeck.villainDeck.henchmen.push(...mastermindHenchmen);
    }

    // Check again in case the mastermind did not fill all the slots
    if (numRemVillDeckHenchmen() > 0) {
      fullDeck.villainDeck.henchmen.push(
        ...store.henchmenStore.getManyRandom(numRemVillDeckHenchmen())
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
      alwaysLeadsVillains.length <= numRemVillDeckVillains()
    ) {
      const mastermindVillains = store.villainStore.getAll(
        alwaysLeadsVillains.map((villain) => villain.id)
      );

      fullDeck.villainDeck.villains.push(...mastermindVillains);
    }

    // Check again in case the mastermind did not fill all the slots
    if (numRemVillDeckVillains() > 0) {
      fullDeck.villainDeck.villains.push(
        ...store.villainStore.getManyRandom(numRemVillDeckVillains())
      );
    }

    // Next add masterminds
    const numRemVillDeckMasterminds =
      (villainRules.numMasterminds || 0) -
      (fullDeck.villainDeck.masterminds?.length || 0);
    if (numRemVillDeckMasterminds > 0) {
      fullDeck.villainDeck.masterminds = [];
      fullDeck.villainDeck.masterminds.push(
        ...store.mastermindStore.getManyRandom(numRemVillDeckMasterminds)
      );
    }

    // Finally add remaining deck elements
    fullDeck.villainDeck.numAmbitions = villainRules.numAmbitions;
    fullDeck.villainDeck.numBystanders = villainRules.numBystanders;
    fullDeck.villainDeck.numSidekicks = villainRules.numSidekicks;
    fullDeck.villainDeck.numTwists = villainRules.numTwists;
    fullDeck.villainDeck.numShieldOfficers = villainRules.numShieldOfficers;

    fullDeck.villainDeck.henchmen.sort(Scheme._sorter);
    fullDeck.villainDeck.villains.sort(Scheme._sorter);
    fullDeck.villainDeck.heroes?.sort(Scheme._sorter);
    fullDeck.villainDeck.masterminds?.sort(Scheme._sorter);

    //#endregion Build villain deck

    return fullDeck;
  }

  public toString(): string {
    return this.name;
  }
}
