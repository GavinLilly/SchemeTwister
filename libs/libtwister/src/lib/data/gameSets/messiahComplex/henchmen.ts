import { CardType, IHenchmen } from '../../../model';

import { CLONE_HEROES } from './keywords';
import { META } from './meta';

export const MR_SINISTER_CLONES: IHenchmen = {
  id: '89272e6e-8a3e-4651-986e-fcdd7517447e',
  name: 'Mr. Sinister Clones',
  ambush:
    'Clone. When the cloned copy enters the city, shuffle a Bystander in the Villain Deck',
  fight:
    'Clone the next hero you recruit this turn that has printed cost 4 or less',
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
  keywords: [CLONE_HEROES],
};

export const SENTINEL_SQUAD_ONE: IHenchmen = {
  id: '788ac1a0-f3b5-4fd1-b3d8-651864133a75',
  name: 'Sentinel Squad O*N*E*',
  ambush: 'If there are no other Sentinel Squad O*N*E*s in the city, Clone.',
  fight:
    'If there are no other Sentinel Squad O*N*E*s in the city, KO one of your Heroes and put this Villain on the bottom of the Villain Deck',
  attackPoints: 2,
  victoryPoints: 1,
  gameSet: META,
  cardType: CardType.HENCHMEN,
  keywords: [CLONE_HEROES],
};
