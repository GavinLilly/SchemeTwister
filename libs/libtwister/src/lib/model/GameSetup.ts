import { customRandom, urlAlphabet } from 'nanoid';
import { hasPresentKey } from 'ts-is-present';
import { v5 } from 'uuid';

import { LibTwister } from '../libTwister';

import { AbstractMastermind } from './AbstractMastermind';
import { AbstractScheme } from './AbstractScheme';
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

export class GameSetup implements IGameSetup {
  readonly numPlayers: number;
  readonly scheme: AbstractScheme;
  readonly mastermind: AbstractMastermind;
  readonly numWounds?: number;
  readonly numShieldOfficers?: number;
  heroDeck: IHeroDeck;
  villainDeck: IVillainDeck;
  additionalDeck?: IAdditionalDeck;

  constructor(setup: IGameSetup, private seedUUID: string) {
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
      scheme: AbstractScheme.empty(),
      mastermind: AbstractMastermind.empty(),
      heroDeck: { heroes: [] },
      villainDeck: {
        villains: [],
        henchmen: [],
        numTwists: 0,
        numMasterStrikes: 0,
      },
    };

    return new GameSetup(setup, LibTwister.defaultSeedUUID);
  }

  public get selectedHeroes(): IHero[] {
    const villainDeckHeroes = this.villainDeck.heroes || [];
    const additionalDeckHeroes = this.additionalDeck?.deck.heroes || [];

    return this.heroDeck.heroes
      .concat(villainDeckHeroes)
      .concat(additionalDeckHeroes);
  }

  public get selectedHenchmen(): IHenchmen[] {
    const heroDeckHenchmen = this.heroDeck.henchmen || [];
    const additionalDeckHenchmen = this.additionalDeck?.deck.henchmen || [];

    return this.villainDeck.henchmen
      .concat(heroDeckHenchmen)
      .concat(additionalDeckHenchmen);
  }

  public get selectedVillains(): IVillainGroup[] {
    const additionalDeckVillains = this.additionalDeck?.deck.villains || [];

    return this.villainDeck.villains.concat(additionalDeckVillains);
  }

  public get selectedMasterminds(): AbstractMastermind[] {
    const additionalDeckMasterminds =
      this.additionalDeck?.deck.masterminds || [];

    return additionalDeckMasterminds.concat(this.mastermind);
  }

  public get keywords(): Set<IKeyword> {
    const keywordSet: Set<IKeyword> = new Set();

    const cards: ICard[] = [
      ...this.selectedHenchmen,
      ...this.selectedHeroes,
      ...this.selectedMasterminds,
      ...this.selectedVillains,
    ];

    cards.filter(hasPresentKey('keywords')).forEach((card) => {
      card.keywords.forEach((keyword) => keywordSet.add(keyword));
    });

    if (this.scheme.keywords !== undefined) {
      this.scheme.keywords.forEach((keyword) => keywordSet.add(keyword));
    }

    return keywordSet;
  }

  public get tenId(): string {
    const uuid = v5(this.toString(), this.seedUUID);
    const shortId = short.default(short.constants);
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
