import { MultiCardStore } from '../factories';

import { AbstractMastermind } from './AbstractMastermind';
import { AbstractScheme } from './AbstractScheme';
import { SinglePlayerError } from './errors';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
  VillainDeckMinimal,
} from './interfaces';
import { NumPlayers, ShortScheme } from './types';

export class SoloBannedScheme extends AbstractScheme {
  public readonly gameSetId: string;

  constructor(scheme: ShortScheme, gameSetId: string, numTwists: number);
  constructor(
    scheme: ShortScheme,
    gameSetId: string,
    numTwists1Player: number,
    numTwists2Player: number,
    numTwists3Player: number,
    numTwists4Player: number,
    numTwists5Player: number
  );
  constructor(
    scheme: ShortScheme,
    gameSetId: string,
    numTwists1: number,
    numTwists2?: number,
    numTwists3?: number,
    numTwists4?: number,
    numTwists5?: number
  ) {
    if (
      numTwists1 !== undefined &&
      numTwists2 !== undefined &&
      numTwists3 !== undefined &&
      numTwists4 !== undefined &&
      numTwists5 !== undefined
    ) {
      super(scheme, numTwists1, numTwists2, numTwists3, numTwists4, numTwists5);
    } else {
      super(scheme, numTwists1);
    }

    this.gameSetId = gameSetId;
  }

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
  ): Promise<IGameSetup> {
    if (numPlayers === 1) {
      throw new SinglePlayerError();
    } else {
      return await super.getSetup(
        numPlayers,
        selectedMastermind,
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore,
        advancedSolo,
        partialHeroDeck,
        partialVillainDeck,
        partialAdditionalDeck
      );
    }
  }

  public clone() {
    const cls = this.constructor as new (
      scheme: ShortScheme,
      gameSetId: string,
      numTwists1: number,
      numTwists2: number,
      numTwists3: number,
      numTwists4: number,
      numTwists5: number
    ) => this;
    return new cls(
      {
        id: this.id,
        keywords: this.keywords,
        name: this.name,
        setup: this.setup,
        twist: this.twist,
        evilWins: this.evilWins,
        specialRules: this.specialRules,
      },
      this.gameSetId,
      this.rules[1].villainDeck.numTwists,
      this.rules[2].villainDeck.numTwists,
      this.rules[3].villainDeck.numTwists,
      this.rules[4].villainDeck.numTwists,
      this.rules[5].villainDeck.numTwists
    );
  }
}
