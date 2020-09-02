import { CardType, Keyword } from "../cardSet";
import { GameSets } from "../gamesets";
import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'THE_BROOD' | 'HELLFIRE_CULT' | 'SAPIEN_LEAGUE' | 'SHIAR_DEATH_COMMANDOS' | 'SHIAR_PATROL_CRAFT';

export const X_Men: Record<HenchmenNames, IHenchmen> = {
  THE_BROOD: {
    id: 'c8885ce2-7cfe-4270-abca-d8febc37263f',
    name: 'The Brood',
    ability: 'This Villain gets +1 Attack for each Bystander in the KO pile.',
    fight: 'KO one of your Heroes. Then KO a Bystander from the Bystander Stack.',
    attackPoints: '1+',
    victoryPoints: 1,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HENCHMEN,
  },
  HELLFIRE_CULT: {
    id: '5c8034a3-bf1f-40c1-8ede-b75149604d80',
    name: 'Hellfire Cult',
    fight: `Reveal the top card of your deck. If it costs 0, KO it. Otherwise, you get +1 Recruit.`,
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HENCHMEN,
  },
  SAPIEN_LEAGUE: {
    id: '2a9da2cb-4c09-4b5b-bfbc-68ac1b8f0813',
    name: 'Sapien League',
    fight: 'KO one of your Heroes. Then, reveal the top card of the Villain Deck. If it\'s a Henchman Villain, play it.',
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HENCHMEN
  },
  SHIAR_DEATH_COMMANDOS: {
    id: 'c7a4810c-565e-405c-b78d-7af8a90bfaae',
    name: 'Shi\'ar Death Commandos',
    ambush: 'The Villain captures a Human Shield.',
    fight: 'KO one of your Heroes.',
    attackPoints: '2*',
    victoryPoints: 1,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HENCHMEN
  },
  SHIAR_PATROL_CRAFT: {
    id: '978c30a5-75eb-43ca-9a8f-c724208ecaa9',
    name: 'Shi\'ar Patrol Craft',
    fight: `The next Hero you recruit this turn has ${Keyword.SOARING_FLIGHT}.`,
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HENCHMEN
  }
};
