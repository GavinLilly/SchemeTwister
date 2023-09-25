import { TransformingMastermind } from '../../../model';
import { FEAST } from '../paintTheTownRed/paintTheTownRed.keywords';

import {
  CROSS_DIMENSIONAL_RAMPAGE,
  OUTWIT,
  TRANSFORM,
  WOUNDED_FURY,
} from './worldWarHulk.keywords';
import { META } from './worldWarHulk.meta';
import {
  ASPECTS_OF_THE_VOID,
  CODE_RED,
  ILLUMINATI,
  INTELLIGENCIA,
  SAKAAR_IMPERIAL_GUARD,
  WARBOUND,
} from './worldWarHulk.villains';

export const GENERAL_THUNDERBOLT_ROSS = new TransformingMastermind(
  {
    id: '1361f09c-889c-4d5b-92e2-6a739ad0fb09',
    name: 'General "Thunderbolt” Ross',
    gameSet: META,
    attackPoints: 6,
    victoryPoints: 6,
    alwaysLeads: [CODE_RED],
    keywords: [TRANSFORM, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
    startOfGame:
      'Stack 8 Bystanders next to General Ross as "Helicopter" Villains with 2 Attack. You can fight them to rescue them as Bystanders. You can\'t fight General Ross while he has any Helicopters.',
    masterStrike:
      'General Ross Transforms, then Cross-Dimensional Hulk Rampage.',
  },
  {
    name: 'Red Hulk',
    attackPoints: '9+',
    masterStrike:
      "Red Hulk Transforms, then stack a random Bystander from each player's Victory Pile next to this as a Helicopter. Each player who didn't have a Bystander gains a Wound instead.",
    specialRules:
      "You can't fight Helicopters, and they don't stop you from fighting Red Hulk.",
  }
);

export const ILLUMINATI_SECRET_SOCIETY = new TransformingMastermind(
  {
    id: '11332b30-7a2c-48d0-bbdb-d48860fd7769',
    name: 'Illuminati, Secret Society',
    gameSet: META,
    attackPoints: 11,
    victoryPoints: 7,
    alwaysLeads: [ILLUMINATI],
    keywords: [TRANSFORM, OUTWIT],
    specialRules: 'This Mastermind gets +4 Attack unless you Outwit them',
    masterStrike:
      'Each player reveals their hand and discards two cards that each cost between 1 and 4. The Illuminati Transform.',
  },
  {
    name: 'Illuminati, Open Warfare',
    specialRules:
      'Whenever a card effect causes a player to draw any number of cards, that player must then also discard a card.',
    masterStrike:
      'Each player reveals their hand and discards two cards that each cost between 5 and 8. The Illuminati Transform.',
    attackPoints: 13,
  }
);

export const KING_HULK_SAKAARSON = new TransformingMastermind(
  {
    id: '3f018456-2aff-47a5-8556-f2be139ae2f9',
    name: 'King Hulk, Sakaarson',
    gameSet: META,
    attackPoints: 9,
    victoryPoints: 6,
    alwaysLeads: [WARBOUND],
    keywords: [TRANSFORM, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
    specialRules:
      'King Hulk gets +1 Attack for each Warbound Villain in the city and in the Escape Pile.',
    masterStrike:
      "Each player KO's a Warbound Villain from their Victory Pile or gains a Wound. King Hulk Transforms.",
  },
  {
    name: 'King Hulk, Worldbreaker',
    masterStrike:
      "Each player reveals their hand, then KO's a card from their hand or discard pile that has the same card name as a card in the HQ. King Hulk Transforms.",
    attackPoints: '10+',
  }
);

export const MODOK = new TransformingMastermind(
  {
    id: '7e7b6054-969f-4854-8049-39578bbf08ae',
    name: 'M.O.D.O.K.',
    gameSet: META,
    attackPoints: 9,
    victoryPoints: 6,
    alwaysLeads: [INTELLIGENCIA],
    keywords: [TRANSFORM, OUTWIT],
    specialRules:
      "All cards' Outwit abilities require four different costs instead of three.",
    masterStrike:
      "Each player who can't Outwit M.O.D.O.K. gains a Wound, then M.O.D.O.K. Transforms",
  },
  {
    name: 'M.O.D.O.K., Network Nightmare',
    specialRules: 'You can only fight M.O.D.O.K with Recruit, not Attack.',
    masterStrike:
      "Each player who can't Outwit M.O.D.O.K. KO's a non-grey Hero from their discard pile. M.O.D.O.K. Transforms.",
    attackPoints: '8*',
  }
);

export const THE_RED_KING = new TransformingMastermind(
  {
    id: 'fdf31917-70fd-4745-8625-7510fa5224e5',
    name: 'The Red King',
    gameSet: META,
    attackPoints: 7,
    victoryPoints: 6,
    alwaysLeads: [SAKAAR_IMPERIAL_GUARD],
    keywords: [TRANSFORM],
    masterStrike:
      'The Red King Transforms, then play another card from the Villain Deck.',
  },
  {
    name: 'The Red King, Power Armored',
    masterStrike:
      'The Red King Transforms, then play another card from the Villain Deck.',
    attackPoints: 10,
  }
);

export const THE_SENTRY = new TransformingMastermind(
  {
    id: '14512d58-4e07-404c-a970-2d798202d801',
    name: 'The Sentry',
    gameSet: META,
    attackPoints: 10,
    victoryPoints: 6,
    alwaysLeads: [ASPECTS_OF_THE_VOID],
    keywords: [FEAST, TRANSFORM, WOUNDED_FURY, CROSS_DIMENSIONAL_RAMPAGE],
    startOfGame:
      "Shuffle 2 Wounds into each player's deck before drawing starting hands.",
    masterStrike: 'The Sentry Transforms, then Cross-Dimensional Void Rampage.',
  },
  {
    name: 'The Void',
    masterStrike:
      "Feast on each player. If this feasts on a player's grey Hero, that player gains a Wound. The Void Transforms.",
    attackPoints: '11+',
  }
);
