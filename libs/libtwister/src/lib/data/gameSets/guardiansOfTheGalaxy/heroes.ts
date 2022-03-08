import { IHero , CardType } from '../../../model';
import { GUARDIANS_OF_THE_GALAXY } from '../../teams';

import { ARTIFACT, SHARDS } from './keywords';
import { META } from './meta';

export const DRAX: IHero = {
  id: 'c736b5ce-2fd8-4c8f-b36c-44b9d5b923f3',
  name: 'Drax the Destroyer',
  team: GUARDIANS_OF_THE_GALAXY,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHARDS, ARTIFACT],
};

export const GAMORA: IHero = {
  id: '1e9cd62a-e5cc-4e3d-80bc-536e224b3084',
  name: 'Gamora',
  team: GUARDIANS_OF_THE_GALAXY,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHARDS, ARTIFACT],
};

export const GROOT: IHero = {
  id: '2dd7d917-078b-4976-9bb1-73a3603516b2',
  name: 'Groot',
  team: GUARDIANS_OF_THE_GALAXY,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHARDS],
};

export const ROCKET_RACCOON: IHero = {
  id: 'c969460e-68cb-42e2-96bf-e347bb7360b1',
  name: 'Rocket Raccoon',
  team: GUARDIANS_OF_THE_GALAXY,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHARDS, ARTIFACT],
};

export const STAR_LORD: IHero = {
  id: '367a0142-83e2-4378-ade7-d324e697d997',
  name: 'Star-Lord',
  team: GUARDIANS_OF_THE_GALAXY,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SHARDS, ARTIFACT],
};
