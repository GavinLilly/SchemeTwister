import { Mastermind } from '@schemetwister/libtwister';

import { ABOMINATION, SAVIOR } from './captainAmerica.keywords';
import { META } from './captainAmerica.meta';
import {
  MASTERS_OF_EVIL_WWII,
  ZOLAS_CREATIONS,
} from './captainAmerica.villains';

export const ARNIM_ZOLA = new Mastermind({
  id: '7351cae6-f1d4-4c31-a075-fa7a25a4a13e',
  name: 'Arnim Zola',
  gameSet: META,
  victoryPoints: 6,
  attackPoints: 6,
  alwaysLeads: [ZOLAS_CREATIONS],
  keywords: [SAVIOR, ABOMINATION],
  masterStrike:
    "For each Hero in the HQ that has less than 2 printed Attack, put that Hero on the bottom of the Hero Deck, and each player discards a card of that Hero's cost.",
});

export const BARON_HEINRICH_ZEMO = new Mastermind({
  id: '008db486-dbf4-47d9-b61e-19fe11adb5d1',
  name: 'Baron Heinrich Zemo',
  gameSet: META,
  attackPoints: '9+',
  victoryPoints: 6,
  alwaysLeads: [MASTERS_OF_EVIL_WWII],
  specialRules:
    'Whenever you fight a Villain, you may use 2 Recruit to rescue a Bystander. Baron Zemo gets +9 Attack unless you are a Savior.',
  masterStrike:
    'Each player KOs a Bystander from their Victory Pile. Any player who cannot do so gains a Wound.',
});
