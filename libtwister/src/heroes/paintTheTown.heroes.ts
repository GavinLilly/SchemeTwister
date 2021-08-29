import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { PaintTheTownRed as PaintTheTownRedKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'BLACK_CAT'
  | 'MOON_KNIGHT'
  | 'SCARLET_SPIDER'
  | 'SPIDER_WOMAN'
  | 'SYMBIOTE_SPIDER_MAN';

export const PaintTheTownRed: Record<HeroNames, IHero> = {
  BLACK_CAT: {
    id: 'e169eaa9-e74e-405b-9565-931c7ec7744d',
    name: 'Black Cat',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    keywords: [PaintTheTownRedKeywords.WallCrawl],
  },
  MOON_KNIGHT: {
    id: '0df7554f-ae42-4c42-a537-4341ac25873d',
    name: 'Moon Knight',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    keywords: [PaintTheTownRedKeywords.WallCrawl],
  },
  SCARLET_SPIDER: {
    id: 'c1dec0b5-df55-44d9-9ebf-ea66cc04dfcf',
    name: 'Scarlet Spider',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    keywords: [PaintTheTownRedKeywords.WallCrawl],
  },
  SPIDER_WOMAN: {
    id: '290033b9-444b-4938-b075-fcd29b788b81',
    name: 'Spider-Woman',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    keywords: [PaintTheTownRedKeywords.WallCrawl],
  },
  SYMBIOTE_SPIDER_MAN: {
    id: 'd02c524a-89f4-4c35-91ad-db4592d8aec6',
    name: 'Symbiote Spider-Man',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    keywords: [PaintTheTownRedKeywords.WallCrawl],
  },
};
