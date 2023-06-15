import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

import { Mastermind, Hero, Henchmen, VillainGroup } from './cards';
import {
  IAdditionalDeck,
  IPlayableObject,
  IHeroDeck,
  IKeyword,
  IVillainDeck,
  nameSorter,
  IGameSetup,
} from './interfaces';
import { Scheme } from './schemes';

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
   */
  public get keywords(): Set<IKeyword> {
    const cards: IPlayableObject[] = [
      ...this.getSelectedHenchmen(),
      ...this.getSelectedHeroes(),
      ...this.getSelectedMasterminds(),
      ...this.getSelectedVillains(),
    ];

    const keywords = cards
      .flatMap((card) => card.keywords)
      .filter((keyword): keyword is IKeyword => !!keyword);

    if (this.scheme.keywords) {
      this.scheme.keywords.forEach((keyword) => keywords.push(keyword));
    }

    const keywordSet: Set<IKeyword> = new Set();
    keywords.sort(nameSorter).forEach((x) => keywordSet.add(x));

    return keywordSet;
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

  public getSelectedHeroes(): Hero[] {
    return this.heroDeck.heroes
      .concat(this.villainDeck.heroes ?? [])
      .concat(this.additionalDeck?.deck.heroes ?? []);
  }

  public getSelectedHenchmen(): Henchmen[] {
    return this.villainDeck.henchmen
      .concat(this.heroDeck.henchmen ?? [])
      .concat(this.additionalDeck?.deck.henchmen ?? []);
  }

  public getSelectedVillains(): VillainGroup[] {
    return this.villainDeck.villains.concat(
      this.additionalDeck?.deck.villains ?? []
    );
  }

  public getSelectedMasterminds(): Mastermind[] {
    return [this.mastermind, ...(this.additionalDeck?.deck.masterminds ?? [])];
  }

  /**
   * Gets all the cards used in the game and returns their IDs as a JSON string
   * @returns a json string of the game setup IDs
   */
  public asModelString(): string {
    return JSON.stringify({
      numPlayers: this.numPlayers,
      scheme: this.scheme.id,
      mastermind: this.mastermind.id,
      heroDeck: [
        ...this.heroDeck.heroes,
        ...(this.heroDeck.henchmen ?? []),
      ].map((card) => card.id),
      villainDeck: [
        ...this.villainDeck.henchmen,
        ...this.villainDeck.villains,
        ...(this.villainDeck.masterminds ?? []),
        ...(this.villainDeck.heroes ?? []),
      ].map((card) => card.id),
      additionalDeck: [
        ...(this.additionalDeck?.deck.henchmen ?? []),
        ...(this.additionalDeck?.deck.heroes ?? []),
        ...(this.additionalDeck?.deck.masterminds ?? []),
        ...(this.additionalDeck?.deck.villains ?? []),
      ].map((card) => card.id),
    });
  }

  public getUniqueId(): string {
    const seed = seedrandom(this.asModelString());
    const nanoid = customRandom('abcdefghijklmnopqrstuvwxyz', 10, (size) =>
      new Uint8Array(size).map(() => 256 * seed())
    );

    return nanoid();
  }
}
