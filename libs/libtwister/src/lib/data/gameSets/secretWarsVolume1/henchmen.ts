import { CardType, IHenchmen } from '../../../model';
import { HeroClass } from '../../enums';

import { RISE_OF_THE_LIVING_DEAD } from './keywords';
import { META } from './meta';

export const GHOST_RACERS: IHenchmen = {
  id: '7c668768-6057-4fd2-a92b-6e529420595e',
  name: 'Ghost Racers',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: `Reveal a ${HeroClass.COVERT} Hero or KO one of your Heroes with an Attack icon`,
  keywords: [RISE_OF_THE_LIVING_DEAD],
};

export const MODOKS: IHenchmen = {
  id: 'a0c09f47-1cc2-44c0-9916-1a722137e13a',
  name: 'M.O.D.O.K.s',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight:
    'KO a Hero from your discard pile or the HQ. If that Hero has a Recruit icon, you get +1 Recruit',
};

export const THOR_CORPS: IHenchmen = {
  id: '571a2f40-875f-497a-8ae8-420685b1af1d',
  name: 'Thor Corps',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSetId: META.id,
  fight: 'Gain this as a Hero.',
};
