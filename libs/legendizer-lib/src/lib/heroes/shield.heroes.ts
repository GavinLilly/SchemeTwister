import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from "../teams";
import { IHero } from './hero.interface';

type HeroNames =
  | 'AGENT_PHIL_COULSON'
  | 'DEATHLOK'
  | 'MOCKINGBIRD'
  | 'QUAKE';

export const Shield: Record<HeroNames, IHero> = {
  AGENT_PHIL_COULSON: {
    id: 'fa1006d5-ed2b-45a4-9e26-03f9787d3096',
    name: "Agent Phil Coulson",
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.SHIELD
  },
  DEATHLOK: {
    id: 'f4381002-198b-420f-b60a-d74b969e87ea',
    name: "Deathlok",
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.SHIELD
  },
  MOCKINGBIRD: {
    id: 'f5331dfe-cf69-4885-b2f6-70c03e5582dc',
    name: "Mockingbird",
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.SHIELD
  },
  QUAKE: {
    id: 'c3cb5ea9-35e6-40d4-bdcd-5baa3c268aeb',
    name: "Quake",
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.SHIELD
  },
};
