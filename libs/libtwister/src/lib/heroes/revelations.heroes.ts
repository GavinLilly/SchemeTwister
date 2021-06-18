import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'CAPTAIN_MARVEL_AGENT_OF_SHIELD'
  | 'DARKHAWK'
  | 'HELLCAT'
  | 'PHOTON'
  | 'QUICKSILVER'
  | 'RONIN'
  | 'SCARLET_WITCH'
  | 'SPEED'
  | 'WAR_MACHINE';

export const Revelations: Record<HeroNames, IHero> = {
  CAPTAIN_MARVEL_AGENT_OF_SHIELD: {
    id: '198052b7-8307-4b1c-bd14-058c7f3ebef7',
    name: 'Captain Marvel, Agent of S.H.I.E.L.D.',
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  DARKHAWK: {
    id: '96544ae9-9d25-44e1-93c0-96b383f107a5',
    name: 'Darkhawk',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  HELLCAT: {
    id: '30c89c60-4325-4f5e-9760-4329152a9648',
    name: 'Hellcat',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  PHOTON: {
    id: 'bdf6f937-878d-4479-8e28-280d0d6dcd73',
    name: 'Photon',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  QUICKSILVER: {
    id: 'e4e5fee4-3a34-4644-9018-24bb6799d867',
    name: 'Quicksilver',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  RONIN: {
    id: 'fa2e2727-b5b8-4d3b-834b-5a3501bc13f1',
    name: 'Ronin',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  SCARLET_WITCH: {
    id: '347f5ae3-71b2-438c-8bcc-db61abd145f4',
    name: 'Scarlet Witch',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  SPEED: {
    id: '1a74003d-da97-4de2-a598-1b0ae7a9696a',
    name: 'Speed',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
  WAR_MACHINE: {
    id: '683bc52e-0023-4008-aa59-571a9296d399',
    name: 'War Machine',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.REVELATIONS,
  },
};
