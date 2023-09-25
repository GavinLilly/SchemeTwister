import { Mastermind } from '../../../model';
import { KeywordName } from '../../enums';
import { BRIBE } from '../darkCity/darkCity.keywords';

import { FORTIFY, SHIELD_CLEARANCE } from './civilWar.keywords';
import { META } from './civilWar.meta';
import {
  HEROES_FOR_HIRE,
  REGISTRATION_ENFORCERS,
  SHIELD_ELITE,
  SUPERHUMAN_REGISTRATION_ACT,
  THUNDERBOLTS,
} from './civilWar.villains';

export const AUTHORITARIAN_IRON_MAN = new Mastermind({
  id: 'e9052952-4b86-4718-b33f-2b926d32b833',
  name: 'Authoritarian Iron Man',
  gameSet: META,
  attackPoints: 12,
  victoryPoints: 6,
  alwaysLeads: [SUPERHUMAN_REGISTRATION_ACT],
  keywords: [FORTIFY],
  masterStrike:
    "Authoritarian Iron Man fortifies the next city space to his right, starting with the Bridge. You can't fight him while there's a Villain in that space. Villains in that space get +3 Attack.",
});

export const BARON_HELMUT_ZEMO = new Mastermind({
  id: 'ebd930e5-f065-414d-9862-01d335f30e3e',
  name: 'Baron Helmut Zemo',
  gameSet: META,
  attackPoints: 16,
  victoryPoints: 6,
  alwaysLeads: [THUNDERBOLTS],
  specialRules:
    'Baron Zemo gets -1 Attack for each Villain in your Victory Pile.',
  masterStrike:
    'Each player KOs a Villain from their Victory Pile. Any player who cannot do so gains a Wound.',
});

export const MARIA_HILL_DIRECTOR_OF_SHIELD = new Mastermind({
  id: '07e76e37-70ce-40d6-a98c-9df5d2314e6a',
  gameSet: META,
  name: 'Maria Hill, Director of S.H.I.E.L.D.',
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [SHIELD_ELITE],
  keywords: [SHIELD_CLEARANCE],
  specialRules: `Double ${KeywordName.SHIELD_CLEARANCE}. You can't fight Maria Hill while there are any S.H.I.E.L.D. Elite or Officers in the city.`,
  masterStrike:
    'Two S.H.I.E.L.D. Officers enter the city as 3 Attack Villains. When you fight them, gain them as Heroes.',
});

export const MISTY_KNIGHT = new Mastermind({
  id: '28b6b19a-8d4f-490d-b834-dd03b3ab45aa',
  gameSet: META,
  name: 'Misty Knight',
  attackPoints: 14,
  victoryPoints: 6,
  alwaysLeads: [HEROES_FOR_HIRE],
  keywords: [BRIBE, FORTIFY],
  masterStrike:
    'Each player reveals 4 cards with Recruit icons or gains a Wound.',
});

export const RAGNAROK = new Mastermind({
  id: '9492f5bc-f54a-4304-b158-0a7df6fc2127',
  gameSet: META,
  name: 'Ragnarok',
  attackPoints: 6,
  victoryPoints: 6,
  alwaysLeads: [REGISTRATION_ENFORCERS],
  specialRules:
    'Ragnarok gets +2 Attack for each Hero Class among Heroes in the HQ.',
  masterStrike:
    'Each player says "zero" or "not zero." Then, each player discards all their cards with that cost.',
});
