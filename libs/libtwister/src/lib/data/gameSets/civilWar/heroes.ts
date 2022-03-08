import { IHero , CardType } from '../../../model';
import { AVENGERS, NEW_WARRIORS, X_MEN } from '../../teams';

import { DIVIDED, FORTIFY, PHASING, SIZE_CHANGING } from './keywords';
import { META } from './meta';

export const CAPTAIN_AMERICA_SECRET_AVENGER: IHero = {
  id: 'd32f915f-f526-45a9-a65f-8cb186580a6d',
  name: 'Captain America, Secret Avenger',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const CLOAK_AND_DAGGER: IHero = {
  id: 'f435f3ef-0bd9-49ed-8105-5f92939dbe82',
  name: 'Cloak & Dagger',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, PHASING],
};

export const DAREDEVIL: IHero = {
  id: '518591cd-91ab-40a3-86a6-86872ce7a566',
  name: 'Daredevil',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const FALCON: IHero = {
  id: '8afbb314-f5e4-41a7-a269-e2c9490c97bd',
  name: 'Falcon',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const GOLIATH: IHero = {
  id: '9936a148-964d-4234-9ddd-4190b4cc4a64',
  name: 'Goliath',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, SIZE_CHANGING],
};

export const HERCULES: IHero = {
  id: '85c30745-2452-4310-98fb-495adffd0ffe',
  name: 'Hercules',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const HULKLING: IHero = {
  id: '60aaf371-6d78-4561-8485-5e22371b9cda',
  name: 'Hulkling',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, SIZE_CHANGING],
};

export const LUKE_CAGE: IHero = {
  id: '1c329cd0-fadd-4ec0-970b-8fe9bf249c40',
  name: 'Luke Cage',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, FORTIFY],
};

export const PATRIOT: IHero = {
  id: '08c54828-1f95-4947-b744-6c2a3aa4ac4a',
  name: 'Patriot',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const PETER_PARKER: IHero = {
  id: '045c8478-541f-423d-8fbb-f61f9f7aba68',
  name: 'Peter Parker',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const SPEEDBALL: IHero = {
  id: '09ce305d-30d2-4200-a9c8-6b35b773a2e4',
  name: 'Speedball',
  team: NEW_WARRIORS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const STATURE: IHero = {
  id: 'a98c8759-6da6-434d-8f82-9446441d1291',
  name: 'Stature',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, SIZE_CHANGING],
};

export const STORM_AND_BLACK_PANTHER: IHero = {
  id: '03be487b-3b71-47aa-9e11-fc5f7c632aab',
  name: 'Storm & Black Panther',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const TIGRA: IHero = {
  id: '361cdc1e-78c0-42d9-af97-2f6d82bb77f4',
  name: 'Tigra',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED],
};

export const VISION: IHero = {
  id: '232f0aea-f5a7-40aa-9d54-183ecddd234a',
  name: 'Vision',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, SIZE_CHANGING, PHASING],
};

export const WICCAN: IHero = {
  id: 'f25d4443-6620-4ad6-a870-36818e305c7e',
  name: 'Wiccan',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DIVIDED, PHASING],
};
