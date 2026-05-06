import { nameSorter } from '../utils/nameSorter';

import { Mastermind, Hero, Henchmen, VillainGroup } from './cards';
import {
  IAdditionalDeck,
  IHeroDeck,
  IKeyword,
  IVillainDeck,
  IGameSetup,
} from './interfaces';
import { Scheme } from './schemes/Scheme';

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
  additionalDecks: IAdditionalDeck[];

  constructor(setup: IGameSetup) {
    ({
      numPlayers: this.numPlayers,
      scheme: this.scheme,
      mastermind: this.mastermind,
      numWounds: this.numWounds,
      numShieldOfficers: this.numShieldOfficers,
      heroDeck: this.heroDeck,
      villainDeck: this.villainDeck,
      additionalDecks: this.additionalDecks,
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

    keywords.sort(nameSorter);

    return new Set(keywords);
  }

  private get _additionalDeckHeroes() {
    return this.additionalDecks
      .map((deck) => deck.deck.heroes)
      .filter((heroes): heroes is Hero[] => !!heroes)
      .flatMap((heroes) => Array.from(heroes));
  }

  private get _additionalDeckHenchmen() {
    return this.additionalDecks
      .map((deck) => deck.deck.henchmen)
      .filter((henchmen): henchmen is Henchmen[] => !!henchmen)
      .flatMap((henchmen) => Array.from(henchmen));
  }

  private get _additionalDeckVillains() {
    return this.additionalDecks
      .map((deck) => deck.deck.villains)
      .filter((villains): villains is VillainGroup[] => !!villains)
      .flatMap((villains) => Array.from(villains));
  }

  private get _additionalDeckMasterminds() {
    return this.additionalDecks
      .map((deck) => deck.deck.masterminds)
      .filter((masterminds): masterminds is Mastermind[] => !!masterminds)
      .flatMap((masterminds) => Array.from(masterminds));
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
      additionalDecks: [],
    };

    return new GameSetup(setup);
  }

  /**
   * Gets all the Heroes in the setup
   * @returns an array of Heroes
   */
  public getSelectedHeroes(): Set<Hero> {
    return new Set([
      ...this.heroDeck.heroes,
      ...(this.villainDeck.heroes ?? []),
      ...this._additionalDeckHeroes,
    ]);
  }

  /**
   * Gets all the Henchmen in the setup
   * @returns an array of Henchmen
   */
  public getSelectedHenchmen(): Set<Henchmen> {
    return new Set([
      ...this.villainDeck.henchmen,
      ...(this.heroDeck.henchmen ?? []),
      ...this._additionalDeckHenchmen,
    ]);
  }

  /**
   * Gets all the Villains in the setup
   * @returns an array of Villains
   */
  public getSelectedVillains(): Set<VillainGroup> {
    return new Set([
      ...this.villainDeck.villains,
      ...this._additionalDeckVillains,
    ]);
  }

  /**
   * Gets all the Masterminds in the setup
   * @returns an array of Masterminds
   */
  public getSelectedMasterminds(): Set<Mastermind> {
    return new Set([this.mastermind, ...this._additionalDeckMasterminds]);
  }

  /**
   * Gets the hero deck as an array rather than a structured object
   * @returns an array of Heroes and Henchmen
   */
  public heroDeckAsArray(): Set<Hero | Henchmen> {
    return new Set([
      ...this.heroDeck.heroes,
      ...(this.heroDeck.henchmen ?? []),
    ]);
  }

  /**
   * Gets the villain deck as an array rather than a structured object
   * @returns an array of Heroes, Henchmen, Villain groups and Masterminds
   */
  public villainDeckAsArray(): Set<VillainAdditionalDeckCards> {
    return new Set([
      ...this.villainDeck.henchmen,
      ...this.villainDeck.villains,
      ...(this.villainDeck.masterminds ?? []),
      ...(this.villainDeck.heroes ?? []),
    ]);
  }

  /**
   * Gets the additional deck as an array rather than a structured object
   * @returns an array of Heroes, Henchmen, Villain groups and Masterminds
   */
  public additionalDecksAsArray(): Set<VillainAdditionalDeckCards> {
    if (this.additionalDecks.length === 0) {
      return new Set();
    }

    return new Set([
      ...this._additionalDeckHeroes,
      ...this._additionalDeckHenchmen,
      ...this._additionalDeckMasterminds,
      ...this._additionalDeckVillains,
    ]);
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
      heroDeck: Array.from(this.heroDeckAsArray()).map((card) => card.name),
      villainDeck: Array.from(this.villainDeckAsArray()).map(
        (card) => card.name
      ),
      additionalDeck: Array.from(this.additionalDecksAsArray()).map(
        (card) => card.name
      ),
    });
  }
}
