import { Mastermind } from '../../../model';

import { SPIDERINFECTED } from './sw2.henchmen';
import {
  CHARGE,
  CIRCLE_OF_KUNG_FU,
  FATEFUL_RESURRECTION,
} from './sw2.keywords';
import { META } from './sw2.meta';
import { KUNLUN, MONSTER_METROPOLIS, UTOPOLIS } from './sw2.villains';

export const IMMORTAL_EMPEROR_ZHENGZHU = new Mastermind({
  id: '03b4ca44-6b71-4a36-abe3-902f79b90d5b',
  name: 'Immortal Emperor Zheng-Zhu',
  gameSet: META,
  attackPoints: '7+',
  victoryPoints: 5,
  alwaysLeads: [KUNLUN],
  keywords: [CIRCLE_OF_KUNG_FU],
  masterStrike:
    'Each player reveals a Hero that costs 7 or more, or they discard down to 3 cards.',
});

export const KING_HYPERION = new Mastermind({
  id: 'b2b84119-88c6-44f2-8721-95190dc38f5f',
  name: 'King Hyperion',
  gameSet: META,
  attackPoints: 12,
  victoryPoints: 6,
  alwaysLeads: [UTOPOLIS],
  keywords: [CHARGE],
  masterStrike:
    'King Hyperion enters the city if he was not already there. Then, he charges three spaces.',
  specialRules:
    'Escape: Each player gains a wound. Put King Hyperion on the Mastermind space.',
});

export const SHIKLAH_THE_DEMON_BRIDE = new Mastermind({
  id: '471fd01c-3ba3-4f03-9db0-2931abcd3bc8',
  name: 'Shiklah, the Demon Bride',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [MONSTER_METROPOLIS],
  keywords: [FATEFUL_RESURRECTION],
  masterStrike:
    'Reveal the top three cards of the Villain Deck. Put all the Scheme Twists you revealed on top of the Villain Deck. Put the rest on the bottom of that deck in random order.',
});

export const SPIDERQUEEN = new Mastermind({
  id: '566eadce-240d-45c0-b7ff-6a956a7cf462',
  name: 'Spider-Queen',
  gameSet: META,
  attackPoints: '8+',
  victoryPoints: 6,
  alwaysLeads: [SPIDERINFECTED],
  masterStrike:
    'Each player puts a Spider-Infected from their Victory Pile into an empty city space. Any player who cannot do so gains a Wound.',
});
