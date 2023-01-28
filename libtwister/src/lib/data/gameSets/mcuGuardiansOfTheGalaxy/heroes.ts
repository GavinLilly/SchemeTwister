import { CardType, IHero } from '../../../model';
import { GUARDIANS_OF_THE_GALAXY } from '../../teams';
import { DIVIDED } from '../civilWar/keywords';
import { EXCESSIVE_VIOLENCE } from '../deadpool/keywords';

import { EXCESSIVE_KINDNESS, TRIGGERED_ARTIFACTS } from './keywords';
import { META } from './meta';

export const STAR_LORD: IHero = {
  id: '9f16a276-4a0b-440e-a2d4-6ddb455616de',
  name: 'Star-Lord',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [TRIGGERED_ARTIFACTS, DIVIDED],
};

export const GAMORA: IHero = {
  id: 'ebf0c743-b7ca-4729-abd4-cba5de774e77',
  name: 'Gamora',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [TRIGGERED_ARTIFACTS, DIVIDED],
};

export const ROCKET_AND_GROOT: IHero = {
  id: '6e1cccf7-587e-4baf-9916-bafae7ff6d29',
  name: 'Rocket & Groot',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [
    EXCESSIVE_KINDNESS,
    DIVIDED,
    EXCESSIVE_VIOLENCE,
    TRIGGERED_ARTIFACTS,
  ],
};

export const DRAX: IHero = {
  id: '0fa4353f-e228-407b-95ed-08d26bd77140',
  name: 'Drax',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [EXCESSIVE_VIOLENCE, DIVIDED, TRIGGERED_ARTIFACTS],
};

export const MANTIS: IHero = {
  id: 'fb0c4efb-c871-44a1-b3bb-a10a6cee0280',
  name: 'Mantis',
  team: GUARDIANS_OF_THE_GALAXY,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [EXCESSIVE_KINDNESS, DIVIDED],
};
