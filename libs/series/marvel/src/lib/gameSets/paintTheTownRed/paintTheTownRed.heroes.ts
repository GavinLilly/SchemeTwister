import { Hero } from '@schemetwister/libtwister';
import {
  SPIDER_FRIENDS,
  WALL_CRAWL,
} from '@schemetwister/schemetwister-series-marvel-common';

import { MARVEL_KNIGHTS } from '../../teams';

import { META } from './paintTheTownRed.meta';

export const BLACK_CAT = new Hero({
  id: 'e169eaa9-e74e-405b-9565-931c7ec7744d',
  name: 'Black Cat',
  team: SPIDER_FRIENDS,
  gameSet: META,
  keywords: [WALL_CRAWL],
});

export const MOON_KNIGHT = new Hero({
  id: '0df7554f-ae42-4c42-a537-4341ac25873d',
  name: 'Moon Knight',
  team: MARVEL_KNIGHTS,
  gameSet: META,
  keywords: [WALL_CRAWL],
});

export const SCARLET_SPIDER = new Hero({
  id: 'c1dec0b5-df55-44d9-9ebf-ea66cc04dfcf',
  name: 'Scarlet Spider',
  team: SPIDER_FRIENDS,
  gameSet: META,
  keywords: [WALL_CRAWL],
});

export const SPIDER_WOMAN = new Hero({
  id: '290033b9-444b-4938-b075-fcd29b788b81',
  name: 'Spider-Woman',
  team: SPIDER_FRIENDS,
  gameSet: META,
  keywords: [WALL_CRAWL],
});

export const SYMBIOTE_SPIDER_MAN = new Hero({
  id: 'd02c524a-89f4-4c35-91ad-db4592d8aec6',
  name: 'Symbiote Spider-Man',
  team: SPIDER_FRIENDS,
  gameSet: META,
  keywords: [WALL_CRAWL],
});
