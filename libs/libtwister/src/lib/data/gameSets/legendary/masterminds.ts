import { AbstractMastermind } from '../../../model';

import { DOOMBOT_LEGION } from './henchmen';
import { META } from './meta';
import { BROTHERHOOD, ENEMIES_OF_ASGARD, HYDRA } from './villains';

class LegendaryMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const DR_DOOM = new LegendaryMastermind(
  '0bf45de9-7ee0-4650-98e0-2ef0300c6e22',
  'Dr. Doom',
  9,
  5,
  DOOMBOT_LEGION
);

export const LOKI = new LegendaryMastermind(
  '2d54ba0e-d2f8-40ba-a685-0853ce7201ea',
  'Loki',
  10,
  5,
  ENEMIES_OF_ASGARD
);

export const MAGNETO = new LegendaryMastermind(
  'ddf93b06-2e71-4a4b-99bf-02dd54f0d0c2',
  'Magneto',
  8,
  5,
  BROTHERHOOD
);

export const RED_SKULL = new LegendaryMastermind(
  '9ed63c18-275f-4cfe-977e-c49efc391b9e',
  'Red Skull',
  7,
  5,
  HYDRA
);
