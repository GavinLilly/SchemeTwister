import { EpicMastermindBuilder } from '../../../model';
import { HeroClass } from '../../enums';

import { CHIVALROUS_DUEL, EMPOWERED } from './antMan.keywords';
import { META } from './antMan.meta';
import { QUEENS_VENGEANCE, ULTRONS_LEGACY } from './antMan.villains';

const ultron = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Ultron',
  victoryPoints: 6,
  alwaysLeads: [ULTRONS_LEGACY],
  keywords: [EMPOWERED],
});

export const ULTRON = ultron.buildNormal({
  id: '90f9437a-04b6-4efb-85af-829896a83ac8',
  attackPoints: 9,
  masterStrike: `Each player reveals a ${HeroClass.TECH} Hero or puts a non-grey Hero from their discard pile into a "Threat Analysis pile" next to Ultron. Ultron is Empowered by each color in his Threat Analysis pile.`,
});

export const EPIC_ULTRON = ultron.buildEpic({
  id: '89167683-86c8-497b-95af-17838c3d7021',
  attackPoints: 10,
  masterStrike: `Each player reveals a ${HeroClass.TECH} Hero or puts a non-grey Hero from their discard pile into a "Threat Analysis pile" next to Ultron. Ultron is Triple Empowered by each color in his Threat Analysis pile.`,
});

const morganLeFay = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Morgan le Fay',
  victoryPoints: 6,
  alwaysLeads: [QUEENS_VENGEANCE],
  keywords: [CHIVALROUS_DUEL],
});

export const MORGAN_LE_FAY = morganLeFay.buildNormal({
  id: 'eadae97c-473e-46db-bf18-ac871d378031',
  attackPoints: 7,
  masterStrike: `Each player in turn reveals a ${HeroClass.COVERT} Hero or gains a 0-cost Hero or Wound from the KO pile.`,
});

export const EPIC_MORGAN_LE_FAY = morganLeFay.buildEpic({
  id: 'b2adb1bc-d44f-4fdb-8860-67c4f539f825',
  attackPoints: 9,
  masterStrike:
    'Each player in turn gains a Wound, then gains a 0-cost Hero from the KO pile.',
});
