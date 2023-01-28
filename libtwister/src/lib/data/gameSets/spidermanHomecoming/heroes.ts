import { IHero , CardType } from '../../../model';
import { SPIDER_FRIENDS, AVENGERS } from '../../teams';
import { WALL_CRAWL } from '../paintTheTownRed/keywords';

import { COORDINATE, DANGER_SENSE, STRIKER } from './keywords';
import { META } from './meta';

export const HAPPY_HOGAN: IHero = {
  id: 'f9aefec7-040b-4bff-8088-ccc15d4257a1',
  name: 'Happy Hogan',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DANGER_SENSE, STRIKER, COORDINATE],
};

export const HIGH_TECH_SPIDERMAN: IHero = {
  id: '7a7ed33d-dd72-4e23-9e61-2260a1d6c26d',
  name: 'High Tech Spider-Man',
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, DANGER_SENSE, COORDINATE],
};

export const PETER_PARKER_HOMECOMING: IHero = {
  id: '3f74c939-9ae7-473f-8020-e7e1d973dd92',
  name: 'Peter Parker, Homecoming',
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, DANGER_SENSE, COORDINATE],
};

export const PETERS_ALLIES: IHero = {
  id: '2b5d17f1-ae3b-4f30-b459-655ae2e27886',
  name: "Peter's Allies",
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [COORDINATE],
};

export const TONY_STARK: IHero = {
  id: '432c0168-768c-4e01-992e-aef781be8505',
  name: 'Tony Stark',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DANGER_SENSE, COORDINATE],
};
