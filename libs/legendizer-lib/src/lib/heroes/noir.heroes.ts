import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'ANGEL_NOIR'
  | 'DAREDEVIL_NOIR'
  | 'IRON_MAN_NOIR'
  | 'LUKE_CAGE_NOIR'
  | 'SPIDERMAN_NOIR';

export const Noir: Record<HeroNames, IHero> = {
  ANGEL_NOIR: {
    id: 'a92f6ba6-3f50-463b-a72e-bb22a1fd473d',
    name: 'Angel Noir',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.NOIR,
  },
  DAREDEVIL_NOIR: {
    id: '8bab7eba-8658-4df6-b1e5-6b8929760691',
    name: 'Daredevil Noir',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.NOIR,
  },
  IRON_MAN_NOIR: {
    id: '787170aa-5e93-4f82-b403-e20573f05daf',
    name: 'Iron Man Noir',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.NOIR,
  },
  LUKE_CAGE_NOIR: {
    id: '3c5a6236-a9b6-4748-98c6-d516a4719d3a',
    name: 'Luke Cage Noir',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.NOIR,
  },
  SPIDERMAN_NOIR: {
    id: '9e8b2b85-8dca-465a-bb6c-0efcfe70eab3',
    name: 'Spider-Man Noir',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.NOIR,
  },
};
