import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  FantasticFour as FantasticFourKeywords,
  MarvelStudios as MarvelStudiosKeywords,
  Annihilation as AnnihilationKeywords,
} from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'BRAINSTORM'
  | 'FANTASTIC_FOUR_UNITED'
  | 'HERALDS_OF_GALACTUS'
  | 'PSI_LORD'
  | 'SUPER_SKRULL';

export const Annihilation: Record<HeroNames, IHero> = {
  BRAINSTORM: {
    id: '94ab015e-878a-4214-a252-c4add8d332d7',
    name: 'Brainstorm',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.ANNIHILATION,
    keywords: [AnnihilationKeywords.ManOutOfTime],
  },
  FANTASTIC_FOUR_UNITED: {
    id: '56a42ac5-2cc8-41ce-8751-9a719906101b',
    name: 'Fantastic Four United',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.ANNIHILATION,
    keywords: [FantasticFourKeywords.Focus],
  },
  HERALDS_OF_GALACTUS: {
    id: '74ba66f1-0584-4cf0-86f8-e2496f58aea9',
    name: 'Heralds of Galactus',
    cardType: CardType.HERO,
    gameSet: GameSets.ANNIHILATION,
    keywords: [FantasticFourKeywords.Focus, MarvelStudiosKeywords.Conqueror],
  },
  PSI_LORD: {
    id: '6b72d592-b2e2-4455-b8e6-a10c34787743',
    name: 'Psi-Lord',
    team: Teams.FANTASTIC_FOUR,
    cardType: CardType.HERO,
    gameSet: GameSets.ANNIHILATION,
    keywords: [FantasticFourKeywords.Focus, AnnihilationKeywords.ManOutOfTime],
  },
  SUPER_SKRULL: {
    id: '747b5e67-1e4a-405e-a61e-90968d10b065',
    name: 'Super-Skrull',
    cardType: CardType.HERO,
    gameSet: GameSets.ANNIHILATION,
  },
};
