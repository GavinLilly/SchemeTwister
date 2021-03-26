import merge from 'ts-deepmerge';

import { CardType, ICard } from '../cardSet';
import { DeepPartial } from '../deepPartial.type';
import { IGameSet } from '../gamesets';
import { ITeam } from '../teams';
import { INumPlayerRules, IRules, numPlayers } from './rules.interface';

export interface IRequiredTeam {
  team: ITeam;
  numHeroes: number;
}

interface IRequiredCards {
  inVillainDeck?: ICard[];
  inAdditionalDeck?: ICard[];
  inHeroDeck?: ICard[] | IRequiredTeam;
}

export interface IScheme extends ICard {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  requiredCards?: IRequiredCards;
  rules: IRules;
}

export interface SchemeParams {
  id: string;
  name: string;
  gameSet: IGameSet;
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  requiredCards?: IRequiredCards;
}

export class Scheme implements IScheme {
  id: string;
  name: string;
  gameSet: IGameSet;
  cardType = CardType.SCHEME;
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string | undefined;
  requiredCards?: IRequiredCards | undefined;
  rules: IRules = {
    2: {
      heroDeck: {
        numHeroes: 5,
      },
      villainDeck: {
        numVillainGroups: 2,
        numHenchmenGroups: 1,
        numBystanders: 2,
        numTwists: 8,
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
      },
    },
  };

  constructor(
    params: SchemeParams,
    overrideRulesAll?: DeepPartial<INumPlayerRules>,
    overrideRulesSpecific?: DeepPartial<IRules>
  ) {
    this.id = params.id;
    this.name = params.name;
    this.gameSet = params.gameSet;
    this.twist = params.twist;
    this.evilWins = params.evilWins;
    this.setup = params.setup;
    this.specialRules = params.specialRules;
    this.requiredCards = params.requiredCards;

    if (overrideRulesAll !== undefined) {
      const players: numPlayers[] = [2, 3, 4, 5];
      players.forEach((num) => {
        this.rules[num] = merge(this.rules[num], overrideRulesAll);
      });
    }

    if (overrideRulesSpecific !== undefined)
      this.rules = merge(this.rules, overrideRulesSpecific);
  }
}
