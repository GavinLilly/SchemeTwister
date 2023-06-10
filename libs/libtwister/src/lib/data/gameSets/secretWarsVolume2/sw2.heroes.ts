import { Hero } from '../../../model';
import {
  SPIDER_FRIENDS,
  ILLUMINATI,
  CABAL,
  AVENGERS,
  MARVEL_KNIGHTS,
  SHIELD,
  X_MEN,
} from '../../teams';
import { TELEPORT, VERSATILE } from '../darkCity/darkCity.keywords';
import { WALL_CRAWL } from '../paintTheTownRed/paintTheTownRed.keywords';
import { CROSS_DIMENSIONAL_RAMPAGE } from '../secretWarsVolume1/sw1.keywords';

import { PATROL, SPECTRUM } from './sw2.keywords';
import { META } from './sw2.meta';

export const AGENT_VENOM = new Hero({
  id: '46ae2506-1219-48fc-873e-dcfc0f822993',
  name: 'Agent Venom',
  team: SPIDER_FRIENDS,

  gameSet: META,
  keywords: [VERSATILE, WALL_CRAWL, SPECTRUM, PATROL],
});

export const ARKON_THE_MAGNIFICENT = new Hero({
  id: 'e0025882-b4d3-4568-88ed-43d4eb834676',
  name: 'Arkon the Magnificent',

  gameSet: META,
  keywords: [WALL_CRAWL, SPECTRUM, PATROL],
});

export const BEAST = new Hero({
  id: 'f5bbeae6-64a6-4e1d-8100-fbb3dd3fa27a',
  name: 'Beast',
  team: ILLUMINATI,

  gameSet: META,
  keywords: [WALL_CRAWL, PATROL],
});

export const BLACK_SWAN = new Hero({
  id: '76b9d8dd-ef80-4930-bc77-c2fb68686b8c',
  name: 'Black Swan',
  team: CABAL,

  gameSet: META,
});

export const THE_CAPTAIN_AND_THE_DEVIL = new Hero({
  id: '88249014-9d43-46f3-a824-1312e49682ed',
  name: 'The Captain and the Devil',
  team: AVENGERS,

  gameSet: META,
  keywords: [SPECTRUM, PATROL],
});

export const CAPTAIN_BRITAIN = new Hero({
  id: '010befe8-0316-473e-80ce-3e749f50b8ad',
  name: 'Captain Britain',
  team: ILLUMINATI,

  gameSet: META,
  keywords: [PATROL],
});

export const CORVUS_GLAIVE = new Hero({
  id: 'ae8ef6d9-c4f0-4dda-89ab-b991eddfb8c8',
  name: 'Corvus Glaive',
  team: CABAL,

  gameSet: META,
  keywords: [PATROL],
});

export const DR_PUNISHER_SOLDIER_SUPREME = new Hero({
  id: '09211a9c-6c60-4b32-9195-8f40766229fb',
  name: 'Dr. Punisher, Soldier Supreme',
  team: MARVEL_KNIGHTS,

  gameSet: META,
  keywords: [PATROL],
});

export const ELSA_BLOODSTONE = new Hero({
  id: '227697a1-0701-495a-9cf5-191fd1990c30',
  name: 'Elsa Bloodstone',
  team: SHIELD,

  gameSet: META,
  keywords: [WALL_CRAWL, SPECTRUM, PATROL],
});

export const PHOENIX_FORCE_CYCLOPS = new Hero({
  id: 'af7b0d0d-7f8e-4bd5-97b2-f3623de535b1',
  name: 'Phoenix Force Cyclops',
  team: X_MEN,

  gameSet: META,
});

export const RUBY_SUMMERS = new Hero({
  id: '3f51f162-ee58-41e9-b8af-9b0086148e07',
  name: 'Ruby Summers',
  team: X_MEN,

  gameSet: META,
  keywords: [TELEPORT],
});

export const SHANGCHI = new Hero({
  id: '398084cc-d6e7-4137-867b-5825a3abc751',
  name: 'Shang-Chi',
  team: MARVEL_KNIGHTS,

  gameSet: META,
  keywords: [WALL_CRAWL, PATROL],
});

export const SILK = new Hero({
  id: 'a9a2ca43-2277-48e5-8f99-709c647ed6e5',
  name: 'Silk',
  team: SPIDER_FRIENDS,

  gameSet: META,
  keywords: [WALL_CRAWL, SPECTRUM],
});

export const SOULSWORD_COLOSSUS = new Hero({
  id: '4e014b74-5437-46ce-acda-a292dc5880ad',
  name: 'Soulsword Colossus',
  team: X_MEN,

  gameSet: META,
  keywords: [CROSS_DIMENSIONAL_RAMPAGE],
});

export const SPIDERGWEN = new Hero({
  id: 'eeaa7352-9c50-4764-b68e-e45d29b0fbdf',
  name: 'Spider-Gwen',
  team: SPIDER_FRIENDS,

  gameSet: META,
  keywords: [WALL_CRAWL, PATROL],
});

export const TIMETRAVELING_JEAN_GREY = new Hero({
  id: '48fa232b-26ce-4167-aa79-ef53256df126',
  name: 'Time-Traveling Jean Grey',
  team: X_MEN,

  gameSet: META,
  keywords: [PATROL],
});
