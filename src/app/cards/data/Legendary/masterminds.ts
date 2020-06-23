import { Mastermind } from 'src/app/cards/models';
import { doombotLegion } from './henchmen';
import { enemiesOfAsgard, brotherhood, hydra } from './villains';

export const drDoom: Mastermind = {
  name: 'Dr. Doom',
  always_leads: doombotLegion,
};
export const loki: Mastermind = {
  name: 'Loki',
  always_leads: enemiesOfAsgard,
};
export const magneto: Mastermind = {
  name: 'Magneto',
  always_leads: brotherhood,
};
export const redSkull: Mastermind = {
  name: 'Red Skull',
  always_leads: hydra,
};
