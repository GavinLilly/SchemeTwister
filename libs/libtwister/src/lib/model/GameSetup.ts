import { nameSorter } from '../utils/nameSorter';

import { Mastermind, Hero, Henchmen, VillainGroup } from './cards';
import {
  IAdditionalDeck,
  IHeroDeck,
  IKeyword,
  IVillainDeck,
  IGameSetup,
} from './interfaces';
import { Scheme } from './schemes';

type VillainAdditionalDeckCards = Henchmen | VillainGroup | Mastermind | Hero;

/**
 * A class to store the generated game setup.
 */
export class GameSetup implements IGameSetup {
  readonly numPlayers: number;
  readonly scheme: Scheme;
  readonly mastermind: Mastermind;
  readonly numWounds?: number;
  readonly numShieldOfficers?: number;
  heroDeck: IHeroDeck;
  villainDeck: IVillainDeck;
  additionalDeck?: IAdditionalDeck;

  constructor(setup: IGameSetup) {
    ({
      numPlayers: this.numPlayers,
      scheme: this.scheme,
      mastermind: this.mastermind,
      numWounds: this.numWounds,
      numShieldOfficers: this.numShieldOfficers,
      heroDeck: this.heroDeck,
      villainDeck: this.villainDeck,
      additionalDeck: this.additionalDeck,
    } = setup);
  }

  /**
   * All the keywords contained in this game setup.
   * @returns A set of keywords in use in this game setup
   */
  public get keywords(): Set<IKeyword> {
    const keywords = [
      ...this.getSelectedHenchmen(),
      ...this.getSelectedHeroes(),
      ...this.getSelectedMasterminds(),
      ...this.getSelectedVillains(),
    ]
      .flatMap((card) => card.keywords)
      .filter((keyword): keyword is IKeyword => !!keyword);

    if (this.scheme.keywords) {
      keywords.push(...this.scheme.keywords);
    }

    return new Set(keywords.sort(nameSorter));
  }

  /**
   * Creates an empty GameSetup.
   * @returns an empty GameSetup
   */
  public static empty(): GameSetup {
    const setup: IGameSetup = {
      numPlayers: 2,
      scheme: Scheme.empty(),
      mastermind: Mastermind.empty(),
      heroDeck: { heroes: [] },
      villainDeck: {
        villains: [],
        henchmen: [],
        numTwists: 0,
        numMasterStrikes: 0,
      },
    };

    return new GameSetup(setup);
  }

  /**
   * Gets all the Heroes in the setup
   * @returns an array of Heroes
   */
  public getSelectedHeroes(): Hero[] {
    return this.heroDeck.heroes
      .concat(this.villainDeck.heroes ?? [])
      .concat(this.additionalDeck?.deck.heroes ?? []);
  }

  /**
   * Gets all the Henchmen in the setup
   * @returns an array of Henchmen
   */
  public getSelectedHenchmen(): Henchmen[] {
    return this.villainDeck.henchmen
      .concat(this.heroDeck.henchmen ?? [])
      .concat(this.additionalDeck?.deck.henchmen ?? []);
  }

  /**
   * Gets all the Villains in the setup
   * @returns an array of Villains
   */
  public getSelectedVillains(): VillainGroup[] {
    return this.villainDeck.villains.concat(
      this.additionalDeck?.deck.villains ?? []
    );
  }

  /**
   * Gets all the Masterminds in the setup
   * @returns an array of Masterminds
   */
  public getSelectedMasterminds(): Mastermind[] {
    return [this.mastermind, ...(this.additionalDeck?.deck.masterminds ?? [])];
  }

  /**
   * Gets the hero deck as an array rather than a structured object
   * @returns an array of Heroes and Henchmen
   */
  public heroDeckAsArray(): (Hero | Henchmen)[] {
    return [...this.heroDeck.heroes, ...(this.heroDeck.henchmen ?? [])];
  }

  /**
   * Gets the villain deck as an array rather than a structured object
   * @returns an array of Heroes, Henchmen, Villain groups and Masterminds
   */
  public villainDeckAsArray(): VillainAdditionalDeckCards[] {
    return [
      ...this.villainDeck.henchmen,
      ...this.villainDeck.villains,
      ...(this.villainDeck.masterminds ?? []),
      ...(this.villainDeck.heroes ?? []),
    ];
  }

  /**
   * Gets the additional deck as an array rather than a structured object
   * @returns an array of Heroes, Henchmen, Villain groups and Masterminds
   */
  public additionalDeckAsArray(): VillainAdditionalDeckCards[] {
    if (this.additionalDeck === undefined) {
      return [];
    }

    return [
      ...(this.additionalDeck.deck.henchmen ?? []),
      ...(this.additionalDeck.deck.heroes ?? []),
      ...(this.additionalDeck.deck.masterminds ?? []),
      ...(this.additionalDeck.deck.villains ?? []),
    ];
  }

  /**
   * Gets all the cards used in the game and returns their IDs as a JSON string
   * @returns a json string of the game setup IDs
   */
  public toString(): string {
    return JSON.stringify({
      numPlayers: this.numPlayers,
      scheme: this.scheme.name,
      mastermind: this.mastermind.name,
      heroDeck: this.heroDeckAsArray().map((card) => card.name),
      villainDeck: this.villainDeckAsArray().map((card) => card.name),
      additionalDeck: this.additionalDeckAsArray().map((card) => card.name),
    });
  }
}
