import { IHenchmen, CardType } from '../../../model';

import { HUMAN_SHIELDS, SOARING_FLIGHT } from './keywords';
import { META } from './meta';

export const THE_BROOD: IHenchmen = {
  id: 'c8885ce2-7cfe-4270-abca-d8febc37263f',
  name: 'The Brood',
  ability: 'This Villain gets +1 Attack for each Bystander in the KO pile.',
  fight: 'KO one of your Heroes. Then KO a Bystander from the Bystander Stack.',
  attackPoints: '1+',
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
};

export const HELLFIRE_CULT: IHenchmen = {
  id: '5c8034a3-bf1f-40c1-8ede-b75149604d80',
  name: 'Hellfire Cult',
  fight: `Reveal the top card of your deck. If it costs 0, KO it. Otherwise, you get +1 Recruit.`,
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
};

export const SAPIEN_LEAGUE: IHenchmen = {
  id: '2a9da2cb-4c09-4b5b-bfbc-68ac1b8f0813',
  name: 'Sapien League',
  fight:
    "KO one of your Heroes. Then, reveal the top card of the Villain Deck. If it's a Henchman Villain, play it.",
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
};

export const SHIAR_DEATH_COMMANDOS: IHenchmen = {
  id: 'c7a4810c-565e-405c-b78d-7af8a90bfaae',
  name: "Shi'ar Death Commandos",
  ambush: 'The Villain captures a Human Shield.',
  fight: 'KO one of your Heroes.',
  attackPoints: '2*',
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
  keywords: [HUMAN_SHIELDS],
};

export const SHIAR_PATROL_CRAFT: IHenchmen = {
  id: '978c30a5-75eb-43ca-9a8f-c724208ecaa9',
  name: "Shi'ar Patrol Craft",
  fight: `The next Hero you recruit this turn has ${SOARING_FLIGHT.name}.`,
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
  keywords: [SOARING_FLIGHT],
};
