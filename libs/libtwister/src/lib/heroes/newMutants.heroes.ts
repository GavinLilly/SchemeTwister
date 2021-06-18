import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames = 'KARMA' | 'MIRAGE' | 'SUNSPOT' | 'WARLOCK' | 'WOLFSBANE';

export const NewMutants: Record<HeroNames, IHero> = {
  KARMA: {
    id: '75500870-adbd-4e41-82f2-7abbb600fd99',
    name: 'Karma',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.NEW_MUTANTS,
  },
  MIRAGE: {
    id: 'b85e6698-2bbd-4792-91d8-decacde3e202',
    name: 'Mirage',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.NEW_MUTANTS,
  },
  SUNSPOT: {
    id: 'eae8dc76-3544-4f33-8153-ee8931068370',
    name: 'Sunspot',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.NEW_MUTANTS,
  },
  WARLOCK: {
    id: '445883e2-6050-496d-be6b-a85625be7256',
    name: 'Warlock',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.NEW_MUTANTS,
  },
  WOLFSBANE: {
    id: 'eaae6612-0802-437c-b1ab-9d4f383501c0',
    name: 'Wolfsbane',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.NEW_MUTANTS,
  },
};
