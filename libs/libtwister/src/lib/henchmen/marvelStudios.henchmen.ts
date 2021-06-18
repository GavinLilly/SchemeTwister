import { CardType, Keyword } from '../cardSet';
import { GameSets } from '../gamesets';
import { IHenchmen } from './henchmen.interface';

type HenchmenNames =
  | 'HAMMER_DRONE_ARMY'
  | 'HYDRA_PILOTS'
  | 'HYDRA_SPIES'
  | 'TEN_RINGS_FANATICS';

export const MarvelStudios: Record<HenchmenNames, IHenchmen> = {
  HAMMER_DRONE_ARMY: {
    id: '8509983b-d1e4-4b5d-ba49-06ca2ac7d374',
    name: 'Hammer Drone Army',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.MARVEL_STUDIOS,
    fight:
      'Look at the top two cards of your deck. KO one of them and put the other back.',
  },
  HYDRA_PILOTS: {
    id: '5027f1c6-b626-4daf-a6e4-b71402b27fe6',
    name: 'HYDRA Pilots',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.MARVEL_STUDIOS,
    fight: 'You get +1 Recruit',
  },
  HYDRA_SPIES: {
    id: '70397677-c897-45af-ae46-768b8f770931',
    name: 'HYDRA Spies',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.MARVEL_STUDIOS,
    fight:
      'When you draw a new hand of cards at the end of this turn, draw an extra card.',
  },
  TEN_RINGS_FANATICS: {
    id: 'ba0e33dd-a997-474f-a70e-c25bfe4cc358',
    name: 'Ten Rings Fanatics',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.MARVEL_STUDIOS,
    fight:
      'Look at the top two cards of your deck. KO one of them and put the other back.',
  },
};
