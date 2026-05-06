import { Henchmen } from '@schemetwister/libtwister';

import { META } from './marvelStudios.meta';

export const HAMMER_DRONE_ARMY = new Henchmen({
  id: '8509983b-d1e4-4b5d-ba49-06ca2ac7d374',
  name: 'Hammer Drone Army',
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  fight:
    'Look at the top two cards of your deck. KO one of them and put the other back.',
});

export const HYDRA_PILOTS = new Henchmen({
  id: '5027f1c6-b626-4daf-a6e4-b71402b27fe6',
  name: 'HYDRA Pilots',
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  fight: 'You get +1 Recruit',
});

export const HYDRA_SPIES = new Henchmen({
  id: '70397677-c897-45af-ae46-768b8f770931',
  name: 'HYDRA Spies',
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  fight:
    'When you draw a new hand of cards at the end of this turn, draw an extra card.',
});

export const TEN_RINGS_FANATICS = new Henchmen({
  id: 'ba0e33dd-a997-474f-a70e-c25bfe4cc358',
  name: 'Ten Rings Fanatics',
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  fight:
    'Look at the top two cards of your deck. KO one of them and put the other back.',
});
