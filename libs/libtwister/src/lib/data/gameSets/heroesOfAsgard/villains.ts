import { IVillainGroup , CardType } from '../../../model';
import { THROWN_ARTIFACT } from '../fearItself/keywords';
import { ARTIFACT } from '../guardiansOfTheGalaxy/keywords';
import { CONQUEROR } from '../marvelStudios/keywords';

import { VILLAINOUS_WEAPONS, WORTHY } from './keywords';
import { META } from './meta';

export const DARK_COUNCIL: IVillainGroup = {
  id: 'ca7fd688-3d19-4ec2-b190-adf8b58eb67a',
  name: 'Dark Council',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ARTIFACT, THROWN_ARTIFACT, WORTHY, VILLAINOUS_WEAPONS],
};

export const OMENS_OF_RAGNAROK: IVillainGroup = {
  id: '2948ab8b-45f6-418c-8b1b-304a43e79878',
  name: 'Omens of Ragnarok',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [ARTIFACT, CONQUEROR, VILLAINOUS_WEAPONS],
};
