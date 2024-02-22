import { HeroClass } from '../../../heroClass.enum';
import { Mastermind } from '../../../model';

import { DOOMBOT_LEGION } from './legendary.henchmen';
import { META } from './legendary.meta';
import { BROTHERHOOD, ENEMIES_OF_ASGARD, HYDRA } from './legendary.villains';

export const DR_DOOM = new Mastermind({
  id: '0bf45de9-7ee0-4650-98e0-2ef0300c6e22',
  name: 'Dr. Doom',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 5,
  alwaysLeads: [DOOMBOT_LEGION],
  masterStrike: `Each player with exactly 6 cards in hand reveals a ${HeroClass.TECH} Hero or puts 2 cards from their hand on top of their deck.`,
});

export const LOKI = new Mastermind({
  id: '2d54ba0e-d2f8-40ba-a685-0853ce7201ea',
  name: 'Loki',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 5,
  alwaysLeads: [ENEMIES_OF_ASGARD],
  masterStrike: `Each player reveals a ${HeroClass.STRENGTH} Hero or gains a Wound`,
});

export const MAGNETO = new Mastermind({
  id: 'ddf93b06-2e71-4a4b-99bf-02dd54f0d0c2',
  name: 'Magneto',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 5,
  alwaysLeads: [BROTHERHOOD],
  masterStrike:
    'Each player reveals an X-Men Hero or discards down to four cards.',
});

export const RED_SKULL = new Mastermind({
  id: '9ed63c18-275f-4cfe-977e-c49efc391b9e',
  name: 'Red Skull',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 5,
  alwaysLeads: [HYDRA],
  masterStrike: 'Each player KOs a Hero from their hand.',
});
