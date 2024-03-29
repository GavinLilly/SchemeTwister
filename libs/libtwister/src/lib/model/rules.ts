import { INumPlayerRules } from './interfaces/rules.interface';
import { numPlayers, NumPlayers } from './types';

export type RulesType = Record<NumPlayers, INumPlayerRules>;

export type RulesModifierFunction = (
  rule: INumPlayerRules,
  num: number
) => INumPlayerRules;

export class Rules {
  private readonly _rules = Rules.defaultRules;

  constructor(func?: RulesModifierFunction) {
    if (func !== undefined) {
      numPlayers.forEach(
        (num) => (this._rules[num] = func(this._rules[num], num))
      );
    }
  }

  public get rules(): RulesType {
    return this._rules;
  }

  public static get defaultRules(): RulesType {
    return {
      /* eslint-disable @typescript-eslint/naming-convention */
      1: {
        heroDeck: {
          numHeroes: 3,
        },
        villainDeck: {
          numVillainGroups: 1,
          numHenchmenGroups: 1,
          numBystanders: 1,
          numTwists: 8,
          numMasterStrikes: 1,
        },
        additionalDeck: [],
      },
      2: {
        heroDeck: {
          numHeroes: 5,
        },
        villainDeck: {
          numVillainGroups: 2,
          numHenchmenGroups: 1,
          numBystanders: 2,
          numTwists: 8,
          numMasterStrikes: 5,
        },
        additionalDeck: [],
      },
      3: {
        heroDeck: {
          numHeroes: 5,
        },
        villainDeck: {
          numVillainGroups: 3,
          numHenchmenGroups: 1,
          numBystanders: 8,
          numTwists: 8,
          numMasterStrikes: 5,
        },
        additionalDeck: [],
      },
      4: {
        heroDeck: {
          numHeroes: 5,
        },
        villainDeck: {
          numVillainGroups: 3,
          numHenchmenGroups: 2,
          numBystanders: 8,
          numTwists: 8,
          numMasterStrikes: 5,
        },
        additionalDeck: [],
      },
      5: {
        heroDeck: {
          numHeroes: 6,
        },
        villainDeck: {
          numVillainGroups: 4,
          numHenchmenGroups: 2,
          numBystanders: 12,
          numTwists: 8,
          numMasterStrikes: 5,
        },
        additionalDeck: [],
      },
      /* eslint-enable @typescript-eslint/naming-convention */
    };
  }
}
