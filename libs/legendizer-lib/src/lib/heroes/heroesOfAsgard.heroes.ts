import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from "../teams";
import { IHero } from './hero.interface';

type HeroNames =
  | 'THOR'
  | 'BETA_RAY_BILL'
  | 'VALKYRIE'
  | 'LADY_SIF'
  | 'THE_WARRIORS_THREE';

export const HeroesOfAsgard: Record<HeroNames, IHero> = {
  THOR: {
    id: '7287c952-0348-4f84-87fd-83f2db55447e',
    name: 'Thor',
    team: Teams.HEROES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  BETA_RAY_BILL: {
    id: '92dadd88-cf41-44d0-945f-0c1743885de9',
    name: 'Beta Ray Bill',
    team: Teams.HEROES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  VALKYRIE: {
    id: '8fecbbeb-c9a3-46a4-a482-080cb13abc75',
    name: 'Valkyrie',
    team: Teams.HEROES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  LADY_SIF: {
    id: 'cf0b41f2-f0aa-4f80-a0a3-74a85629cf5c',
    name: 'Lady Sif',
    team: Teams.HEROES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  THE_WARRIORS_THREE: {
    id: '36daa26b-af79-47cc-bd07-2e1653a2655e',
    name: 'The Warriors Three',
    team: Teams.HEROES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.HEROES_OF_ASGARD
  }
};
