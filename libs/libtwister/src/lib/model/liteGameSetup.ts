import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

export class LiteGameSetup {
  numPlayers: number;
  schemeId: string;
  mastermindId: string;
  heroDeck: string[];
  villainDeck: string[];
  additionalDeck?: string[];

  constructor(config: {
    numPlayers: number;
    schemeId: string;
    mastermindId: string;
    heroDeck: string[];
    villainDeck: string[];
    additionalDeck?: string[];
  }) {
    ({
      numPlayers: this.numPlayers,
      schemeId: this.schemeId,
      mastermindId: this.mastermindId,
      heroDeck: this.heroDeck,
      villainDeck: this.villainDeck,
      additionalDeck: this.additionalDeck,
    } = config);
  }

  /**
   * The unique ID of the setup
   */
  public static calculateUid(setup: LiteGameSetup): string {
    const seed = seedrandom(setup.toString());
    const nanoid = customRandom('abcdefghijklmnopqrstuvwxyz', 10, (size) =>
      new Uint8Array(size).map(() => 256 * seed())
    );

    return nanoid();
  }

  /**
   * Gets all the cards used in the game and returns their IDs as a JSON string
   * @returns a json string of the game setup IDs
   */
  public toString(): string {
    return JSON.stringify({
      numPlayers: this.numPlayers,
      scheme: this.schemeId,
      mastermind: this.mastermindId,
      heroDeck: this.heroDeck,
      villainDeck: this.villainDeck,
      additionalDeck: this.additionalDeck,
    });
  }
}
