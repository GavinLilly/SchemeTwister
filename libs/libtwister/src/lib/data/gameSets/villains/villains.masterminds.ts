import { Mastermind } from '../../../model';

import { ASGARDIAN_WARRIORS } from './villains.henchmen';
import { DEMOLISH, X_TREME_ATTACK } from './villains.keywords';
import { META } from './villains.meta';
import { AVENGERS, DEFENDERS, XMEN_FIRST_CLASS } from './villains.villains';

export const DR_STRANGE = new Mastermind({
  id: '18f47d4e-6af2-4732-a34c-3a0c6a9bfb4f',
  name: 'Dr. Strange',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [DEFENDERS],
  masterStrike:
    'Reveal the top three cards of the Adversary Deck. Put the Adversary you revealed with the highest printed Attack on top of that deck. Then play a Plot Twist from among the cards you revealed. Then put the rest of those cards on the bottom of that deck in random order.',
});

export const NICK_FURY = new Mastermind({
  id: 'cd333220-d49a-4307-a48e-8511ccb597f6',
  name: 'Nick Fury',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [AVENGERS],
  keywords: [DEMOLISH],
  masterStrike:
    'Stack this Strike next to Nick Fury. Then demolish each player once for each Strike stacked here.',
});

export const ODIN = new Mastermind({
  id: '5fc8c65b-a616-4424-9145-58fbbdcf31c0',
  name: 'Odin',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [ASGARDIAN_WARRIORS],
  specialRules:
    'Odin gets +1 Attack for each Asgardian Warrior in the city and in the Overrun Pile.',
  masterStrike:
    'Each player puts an Asgardian Warrior from their Victory Pile into an empty city space. Any player who cannot do so gains a Bindings.',
});

export const PROFESSOR_X = new Mastermind({
  id: 'bb9fcd0b-6391-4971-9099-634c661f36e2',
  name: 'Professor X',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [XMEN_FIRST_CLASS],
  keywords: [X_TREME_ATTACK],
  masterStrike:
    'Choose the two highest-cost Allies in the Lair. Stack them next to Professor X as "Telepathic Pawns." Professor X gets +1 Attack for each Ally stacked next to him. Players can recrut the top Ally in the stack next to Professor X.',
});
