import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'GREITHOTH_BREAKER_OF_WILLS'
  | 'KUURTH_BREAKER_OF_STONE'
  | 'NERKKOD_BREAKER_OF_OCEANS'
  | 'NUL_BREAKER_OF_WORLDS'
  | 'SKADI'
  | 'SKIRN_BREAKER_OF_MEN';

export const FearItself: Record<HeroNames, IHero> = {
  GREITHOTH_BREAKER_OF_WILLS: {
    id: 'aae895fd-bd30-4924-a11c-e7def711c23b',
    name: 'Greithoth, Breaker of Wills',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.FEAR_ITSELF,
  },
  KUURTH_BREAKER_OF_STONE: {
    id: 'd36ca623-b752-489a-9097-5f030647e7c4',
    name: 'Kuurth, Breaker of Stone',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.FEAR_ITSELF,
  },
  NERKKOD_BREAKER_OF_OCEANS: {
    id: '31338b1b-d68e-4a4f-95db-c40cee72f76e',
    name: 'Nerkkod, Breaker of Oceans',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.FEAR_ITSELF,
  },
  NUL_BREAKER_OF_WORLDS: {
    id: '414ecfae-07f8-42fb-9fd0-41c39a298260',
    name: 'Nul, Breaker of Worlds',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.FEAR_ITSELF,
  },
  SKADI: {
    id: '1737a6bf-634f-4ad2-a7bc-b844493216d9',
    name: 'Skadi',
    team: Teams.HYDRA,
    cardType: CardType.HERO,
    gameSet: GameSets.FEAR_ITSELF,
  },
  SKIRN_BREAKER_OF_MEN: {
    id: '71f3509b-bff5-47e8-ac9b-568f5c5cb887',
    name: 'Skirn, Breaker of Men',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.FEAR_ITSELF,
  },
};
