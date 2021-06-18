import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'CARNAGE'
  | 'VENOM'
  | 'VENOM_ROCKET'
  | 'VENOMIZED_DR_STRANGE'
  | 'VENOMPOOL';

export const Venom: Record<HeroNames, IHero> = {
  CARNAGE: {
    id: 'b8ae624d-403d-4b16-885d-57c4c5b3766f',
    name: 'Carnage',
    team: Teams.VENOMVERSE,
    cardType: CardType.HERO,
    gameSet: GameSets.VENOM,
  },
  VENOM: {
    id: 'c2b14ce7-1800-4abf-a50c-09fdcea904a2',
    name: 'Venom',
    team: Teams.VENOMVERSE,
    cardType: CardType.HERO,
    gameSet: GameSets.VENOM,
  },
  VENOM_ROCKET: {
    id: '5051052a-74d8-449a-9e9f-ed33aa8d66ef',
    name: 'Venom Rocket',
    team: Teams.VENOMVERSE,
    cardType: CardType.HERO,
    gameSet: GameSets.VENOM,
  },
  VENOMIZED_DR_STRANGE: {
    id: 'd70b182b-cdc8-4f0e-a001-cf0db996d788',
    name: 'Venomized Dr. Strange',
    team: Teams.VENOMVERSE,
    cardType: CardType.HERO,
    gameSet: GameSets.VENOM,
  },
  VENOMPOOL: {
    id: '8037efb2-d80c-4cce-9c82-1e318c15fd90',
    name: 'Venompool',
    team: Teams.VENOMVERSE,
    cardType: CardType.HERO,
    gameSet: GameSets.VENOM,
  },
};
