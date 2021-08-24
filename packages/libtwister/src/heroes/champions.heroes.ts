import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  DarkCity as DarkCityKeywords,
  Villains as VillainsKeywords,
  Champions as ChampionsKeywords,
} from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'GWENPOOL'
  | 'MS_MARVEL'
  | 'NOVA'
  | 'TOTALLY_AWESOME_HULK'
  | 'VIV_VISION';

export const Champions: Record<HeroNames, IHero> = {
  GWENPOOL: {
    id: '1ecb9f13-f1cd-4613-8197-ba1b4c626ab2',
    name: 'Gwenpool',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.CHAMPIONS,
    keywords: [
      DarkCityKeywords.Versatile,
      VillainsKeywords.Demolish,
      ChampionsKeywords.CheeringCrowds,
      ChampionsKeywords.SizeChanging,
    ],
  },
  MS_MARVEL: {
    id: '7b8700bf-4e45-4e27-ac0e-c223a2e0cb77',
    name: 'Ms. Marvel',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.CHAMPIONS,
    keywords: [
      DarkCityKeywords.Versatile,
      ChampionsKeywords.CheeringCrowds,
      ChampionsKeywords.SizeChanging,
    ],
  },
  NOVA: {
    id: 'cb322dba-93f8-43ba-9442-dcdad10b6e38',
    name: 'Nova',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.CHAMPIONS,
    keywords: [
      DarkCityKeywords.Versatile,
      ChampionsKeywords.CheeringCrowds,
      ChampionsKeywords.SizeChanging,
    ],
  },
  TOTALLY_AWESOME_HULK: {
    id: 'de462bef-ed15-451a-bf96-be598c8fcbe7',
    name: 'Totally Awesome Hulk',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.CHAMPIONS,
    keywords: [
      ChampionsKeywords.CheeringCrowds,
      ChampionsKeywords.SizeChanging,
    ],
  },
  VIV_VISION: {
    id: 'fb512758-213f-4f31-a6b8-a786c8d16f6c',
    name: 'Viv Vision',
    team: Teams.CHAMPIONS,
    cardType: CardType.HERO,
    gameSet: GameSets.CHAMPIONS,
    keywords: [
      DarkCityKeywords.Versatile,
      ChampionsKeywords.CheeringCrowds,
      ChampionsKeywords.SizeChanging,
    ],
  },
};
