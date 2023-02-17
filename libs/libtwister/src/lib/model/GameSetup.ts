import { hasPresentKey } from 'ts-is-present';

import { AbstractMastermind } from './AbstractMastermind';
import {
  IAdditionalDeck,
  ICard,
  IHenchmen,
  IHero,
  IHeroDeck,
  IKeyword,
  IVillainDeck,
  IVillainGroup,
} from './interfaces';
import { IGameSetup } from './interfaces/gameSetup.interface';
import { Scheme } from './schemes';

export class GameSetup implements IGameSetup {
  readonly numPlayers: number;
  readonly scheme: Scheme;
  readonly mastermind: AbstractMastermind;
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

  public static empty(): GameSetup {
    const setup: IGameSetup = {
      numPlayers: 2,
      scheme: Scheme.empty(),
      mastermind: AbstractMastermind.empty(),
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

  public getSelectedHeroes(): IHero[] {
    const villainDeckHeroes = this.villainDeck.heroes || [];
    const additionalDeckHeroes = this.additionalDeck?.deck.heroes || [];

    return this.heroDeck.heroes
      .concat(villainDeckHeroes)
      .concat(additionalDeckHeroes);
  }

  public getSelectedHenchmen(): IHenchmen[] {
    const heroDeckHenchmen = this.heroDeck.henchmen || [];
    const additionalDeckHenchmen = this.additionalDeck?.deck.henchmen || [];

    return this.villainDeck.henchmen
      .concat(heroDeckHenchmen)
      .concat(additionalDeckHenchmen);
  }

  public getSelectedVillains(): IVillainGroup[] {
    const additionalDeckVillains = this.additionalDeck?.deck.villains || [];

    return this.villainDeck.villains.concat(additionalDeckVillains);
  }

  public getSelectedMasterminds(): AbstractMastermind[] {
    const additionalDeckMasterminds =
      this.additionalDeck?.deck.masterminds || [];

    return additionalDeckMasterminds.concat(this.mastermind);
  }

  public get keywords(): Set<IKeyword> {
    const keywordSet: Set<IKeyword> = new Set();

    const cards: ICard[] = [
      ...this.getSelectedHenchmen(),
      ...this.getSelectedHeroes(),
      ...this.getSelectedMasterminds(),
      ...this.getSelectedVillains(),
    ];

    const keywords = cards
      .filter(hasPresentKey('keywords'))
      .map((card) => card.keywords)
      .reduce((acc, val) => acc.concat(val), []);

    if (this.scheme.keywords !== undefined) {
      this.scheme.keywords.forEach((keyword) => keywords.push(keyword));
    }

    keywords
      .sort((a: IKeyword, b: IKeyword) => (a.name < b.name ? -1 : 1))
      .forEach((x) => keywordSet.add(x));

    return keywordSet;
  }
}