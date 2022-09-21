import merge from 'ts-deepmerge';
import { PartialDeep } from 'type-fest';
import * as uuid from 'uuid';

import { MultiCardStore } from '../../factories';
import { AbstractMastermind } from '../AbstractMastermind';
import { GameSetup } from '../GameSetup';
import { CardType } from '../cardType.enum';
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
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { Rules, RulesType } from '../rules';
import { NumPlayers, numPlayers } from '../types';

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
        ? this.overrideEachRule(mastermindRules).rules
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

        fullDeck.additionalDeck.deck.heroes?.sort(Scheme._sorter);
        fullDeck.additionalDeck.deck.henchmen?.sort(Scheme._sorter);
        fullDeck.additionalDeck.deck.villains?.sort(Scheme._sorter);
        fullDeck.additionalDeck.deck.masterminds?.sort(Scheme._sorter);
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
