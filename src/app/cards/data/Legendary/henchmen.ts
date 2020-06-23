import { Henchmen } from 'src/app/cards/models';

export const doombotLegion: Henchmen = {
  name: 'Doombot Legion',
  fight:
    'Look at the top two cards of your deck. KO one of them and put the other back.',
  attackPoints: 3,
  victoryPoints: 1,
};
export const handNinjas: Henchmen = {
  name: 'Hand Ninjas',
  fight: 'You get +1 Recruit.',
  attackPoints: 3,
  victoryPoints: 1,
};
export const savageLandMutates: Henchmen = {
  name: 'Savage Land Mutates',
  fight:
    'When you draw a new hand of cards at the end of this turn, draw an extra card.',
  attackPoints: 3,
  victoryPoints: 1,
};
export const sentinel: Henchmen = {
  name: 'Sentinels',
  fight: 'KO one of your Heroes.',
  attackPoints: 3,
  victoryPoints: 1,
};
