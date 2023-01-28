import { INumPlayerRules } from './interfaces';
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
      numPlayers.forEach((num) => {
        this._rules[num] = func(this._rules[num], num);
      });
    }
  }

  public static get defaultRules(): RulesType {
    return {
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
      },
    };
  }

  public get rules(): RulesType {
    return this._rules;
  }
}
