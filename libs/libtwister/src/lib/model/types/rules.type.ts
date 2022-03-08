import { INumPlayerRules } from '../interfaces/rules.interface';

import { NumPlayers } from './numPlayers.type';

export type Rules = Record<NumPlayers, INumPlayerRules>;
