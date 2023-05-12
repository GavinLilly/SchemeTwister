import { IVillainGroup, CardType } from '../../../model';
import { MOONLIGHT_AND_SUNLIGHT } from '../theNewMutants/keywords';

import { BLOOD_FRENZY, HAUNT, HUNT_FOR_VICTIMS } from './keywords';
import { META } from './meta';

export const LILIN: IVillainGroup = {
  id: 'a6f081c0-938b-4fbd-8ddc-98cd6d7266d1',
  name: 'Lilin',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [HUNT_FOR_VICTIMS, MOONLIGHT_AND_SUNLIGHT],
};

export const FALLEN: IVillainGroup = {
  id: '4d1c8b5a-e3cb-4d20-9002-ac29f0737ed1',
  name: 'Fallen',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [BLOOD_FRENZY, HAUNT],
};
