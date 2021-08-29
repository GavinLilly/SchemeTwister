import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { FantasticFour as FantasticFourKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'HUMAN_TORCH'
  | 'INVISIBLE_WOMAN'
  | 'MR_FANTASTIC'
  | 'SILVER_SURFER'
  | 'THING';

export const FantasticFour: Record<HeroNames, IHero> = {
  HUMAN_TORCH: {
    id: '8ac6a4c8-e125-45c2-901c-cbcf2e2f3af8',
    name: 'Human Torch',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.Focus],
  },
  INVISIBLE_WOMAN: {
    id: '9fb4353c-f548-41f5-92a6-216e130604dd',
    name: 'Invisible Woman',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.Focus],
  },
  MR_FANTASTIC: {
    id: '0f7ac6ef-3896-4005-adbd-d79fcfc57e00',
    name: 'Mr. Fantastic',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.Focus],
  },
  SILVER_SURFER: {
    id: 'e84d398e-24ac-4518-a235-ef0f3f65a3d8',
    name: 'Silver Surfer',
    cardType: CardType.HERO,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.Focus],
  },
  THING: {
    id: 'a45cdee1-852b-4d32-8811-46fec7ba1255',
    name: 'Thing',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.FANTASTIC_FOUR,
    keywords: [FantasticFourKeywords.Focus],
  },
};
