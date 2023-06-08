import { Hero } from './hero';
import {
  IAdditionalDeck,
  ICard,
  IHenchmen,
  IHeroDeck,
  IKeyword,
  IVillainDeck,
  nameSorter,
} from './interfaces';
import { IGameSetup } from './interfaces/gameSetup.interface';
import { Mastermind } from './mastermind';
import { Scheme } from './schemes';
import { VillainGroup } from './villainGroup';

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
    const cards: ICard[] = [
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

  public getSelectedHenchmen(): IHenchmen[] {
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
}
