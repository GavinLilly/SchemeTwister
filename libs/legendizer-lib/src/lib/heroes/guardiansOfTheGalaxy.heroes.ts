import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from "../teams";
import { IHero } from './hero.interface';

type HeroNames =
  | 'DRAX'
  | 'GAMORA'
  | 'GROOT'
  | 'ROCKET_RACCOON'
  | 'STAR_LORD';

export const GuardiansOfTheGalaxy: Record<HeroNames, IHero> = {
  DRAX: {
    id: 'c736b5ce-2fd8-4c8f-b36c-44b9d5b923f3',
    name: 'Drax the Destroyer',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  },
  GAMORA: {
    id: '1e9cd62a-e5cc-4e3d-80bc-536e224b3084',
    name: 'Gamora',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  },
  GROOT: {
    id: '2dd7d917-078b-4976-9bb1-73a3603516b2',
    name: 'Groot',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  },
  ROCKET_RACCOON: {
    id: 'c969460e-68cb-42e2-96bf-e347bb7360b1',
    name: 'Rocket Raccoon',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  },
  STAR_LORD: {
    id: '367a0142-83e2-4378-ade7-d324e697d997',
    name: 'Star-Lord',
    team: Teams.GUARDIANS_OF_THE_GALAXY,
    cardType: CardType.HERO,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  }
};
