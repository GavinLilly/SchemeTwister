import { IHero , CardType } from '../../../model';
import {
  SPIDER_FRIENDS,
  ILLUMINATI,
  CABAL,
  AVENGERS,
  MARVEL_KNIGHTS,
  SHIELD,
  X_MEN,
} from '../../teams';
import { TELEPORT, VERSATILE } from '../darkCity/keywords';
import { WALL_CRAWL } from '../paintTheTownRed/keywords';
import { CROSS_DIMENSIONAL_RAMPAGE } from '../secretWarsVolume1/keywords';

import { PATROL, SPECTRUM } from './keywords';
import { META } from './meta';

export const AGENT_VENOM: IHero = {
  id: '46ae2506-1219-48fc-873e-dcfc0f822993',
  name: 'Agent Venom',
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [VERSATILE, WALL_CRAWL, SPECTRUM, PATROL],
};

export const ARKON_THE_MAGNIFICENT: IHero = {
  id: 'e0025882-b4d3-4568-88ed-43d4eb834676',
  name: 'Arkon the Magnificent',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, SPECTRUM, PATROL],
};

export const BEAST: IHero = {
  id: 'f5bbeae6-64a6-4e1d-8100-fbb3dd3fa27a',
  name: 'Beast',
  team: ILLUMINATI,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, PATROL],
};

export const BLACK_SWAN: IHero = {
  id: '76b9d8dd-ef80-4930-bc77-c2fb68686b8c',
  name: 'Black Swan',
  team: CABAL,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const THE_CAPTAIN_AND_THE_DEVIL: IHero = {
  id: '88249014-9d43-46f3-a824-1312e49682ed',
  name: 'The Captain and the Devil',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SPECTRUM, PATROL],
};

export const CAPTAIN_BRITAIN: IHero = {
  id: '010befe8-0316-473e-80ce-3e749f50b8ad',
  name: 'Captain Britain',
  team: ILLUMINATI,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [PATROL],
};

export const CORVUS_GLAIVE: IHero = {
  id: 'ae8ef6d9-c4f0-4dda-89ab-b991eddfb8c8',
  name: 'Corvus Glaive',
  team: CABAL,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [PATROL],
};

export const DR_PUNISHER_SOLDIER_SUPREME: IHero = {
  id: '09211a9c-6c60-4b32-9195-8f40766229fb',
  name: 'Dr. Punisher, Soldier Supreme',
  team: MARVEL_KNIGHTS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [PATROL],
};

export const ELSA_BLOODSTONE: IHero = {
  id: '227697a1-0701-495a-9cf5-191fd1990c30',
  name: 'Elsa Bloodstone',
  team: SHIELD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, SPECTRUM, PATROL],
};

export const PHOENIX_FORCE_CYCLOPS: IHero = {
  id: 'af7b0d0d-7f8e-4bd5-97b2-f3623de535b1',
  name: 'Phoenix Force Cyclops',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const RUBY_SUMMERS: IHero = {
  id: '3f51f162-ee58-41e9-b8af-9b0086148e07',
  name: 'Ruby Summers',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TELEPORT],
};

export const SHANGCHI: IHero = {
  id: '398084cc-d6e7-4137-867b-5825a3abc751',
  name: 'Shang-Chi',
  team: MARVEL_KNIGHTS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, PATROL],
};

export const SILK: IHero = {
  id: 'a9a2ca43-2277-48e5-8f99-709c647ed6e5',
  name: 'Silk',
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, SPECTRUM],
};

export const SOULSWORD_COLOSSUS: IHero = {
  id: '4e014b74-5437-46ce-acda-a292dc5880ad',
  name: 'Soulsword Colossus',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
};

export const SPIDERGWEN: IHero = {
  id: 'eeaa7352-9c50-4764-b68e-e45d29b0fbdf',
  name: 'Spider-Gwen',
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WALL_CRAWL, PATROL],
};

export const TIMETRAVELING_JEAN_GREY: IHero = {
  id: '48fa232b-26ce-4167-aa79-ef53256df126',
  name: 'Time-Traveling Jean Grey',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [PATROL],
};
