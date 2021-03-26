import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'AGENT_VENOM'
  | 'ARKON_THE_MAGNIFICENT'
  | 'BEAST'
  | 'BLACK_SWAN'
  | 'THE_CAPTAIN_AND_THE_DEVIL'
  | 'CAPTAIN_BRITAIN'
  | 'CORVUS_GLAIVE'
  | 'DR_PUNISHER_SOLDIER_SUPREME'
  | 'ELSA_BLOODSTONE'
  | 'PHOENIX_FORCE_CYCLOPS'
  | 'RUBY_SUMMERS'
  | 'SHANGCHI'
  | 'SILK'
  | 'SOULSWORD_COLOSSUS'
  | 'SPIDERGWEN'
  | 'TIMETRAVELING_JEAN_GREY';

export const SecretWarsVolume2: Record<HeroNames, IHero> = {
  AGENT_VENOM: {
    id: '46ae2506-1219-48fc-873e-dcfc0f822993',
    name: 'Agent Venom',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  ARKON_THE_MAGNIFICENT: {
    id: 'e0025882-b4d3-4568-88ed-43d4eb834676',
    name: 'Arkon the Magnificent',
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  BEAST: {
    id: 'f5bbeae6-64a6-4e1d-8100-fbb3dd3fa27a',
    name: 'Beast',
    team: Teams.ILLUMINATI,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  BLACK_SWAN: {
    id: '76b9d8dd-ef80-4930-bc77-c2fb68686b8c',
    name: 'Black Swan',
    team: Teams.CABAL,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  THE_CAPTAIN_AND_THE_DEVIL: {
    id: '88249014-9d43-46f3-a824-1312e49682ed',
    name: 'The Captain and the Devil',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  CAPTAIN_BRITAIN: {
    id: '010befe8-0316-473e-80ce-3e749f50b8ad',
    name: 'Captain Britain',
    team: Teams.ILLUMINATI,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  CORVUS_GLAIVE: {
    id: 'ae8ef6d9-c4f0-4dda-89ab-b991eddfb8c8',
    name: 'Corvus Glaive',
    team: Teams.CABAL,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  DR_PUNISHER_SOLDIER_SUPREME: {
    id: '09211a9c-6c60-4b32-9195-8f40766229fb',
    name: 'Dr. Punisher, Soldier Supreme',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  ELSA_BLOODSTONE: {
    id: '227697a1-0701-495a-9cf5-191fd1990c30',
    name: 'Elsa Bloodstone',
    team: Teams.SHIELD,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  PHOENIX_FORCE_CYCLOPS: {
    id: 'af7b0d0d-7f8e-4bd5-97b2-f3623de535b1',
    name: 'Phoenix Force Cyclops',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  RUBY_SUMMERS: {
    id: '3f51f162-ee58-41e9-b8af-9b0086148e07',
    name: 'Ruby Summers',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  SHANGCHI: {
    id: '398084cc-d6e7-4137-867b-5825a3abc751',
    name: 'Shang-Chi',
    team: Teams.MARVEL_KNIGHTS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  SILK: {
    id: 'a9a2ca43-2277-48e5-8f99-709c647ed6e5',
    name: 'Silk',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  SOULSWORD_COLOSSUS: {
    id: '4e014b74-5437-46ce-acda-a292dc5880ad',
    name: 'Soulsword Colossus',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  SPIDERGWEN: {
    id: 'eeaa7352-9c50-4764-b68e-e45d29b0fbdf',
    name: 'Spider-Gwen',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  TIMETRAVELING_JEAN_GREY: {
    id: '48fa232b-26ce-4167-aa79-ef53256df126',
    name: 'Time-Traveling Jean Grey',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
};
