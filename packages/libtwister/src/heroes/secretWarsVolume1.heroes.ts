import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  DarkCity as DarkCityKeywords,
  SecretWarsVolume1 as SecretWarsVolume1Keywords,
} from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'APOCALYPTIC_KITTY_PRYDE'
  | 'BLACK_BOLT'
  | 'BLACK_PANTHER'
  | 'CAPTAIN_MARVEL'
  | 'DR_STRANGE'
  | 'LADY_THOR'
  | 'MAGIK'
  | 'MAXIMUS'
  | 'NAMOR_THE_SUBMARINER'
  | 'OLD_MAN_LOGAN'
  | 'PROXIMA_MIDNIGHT'
  | 'SUPERIOR_IRON_MAN'
  | 'THANOS'
  | 'ULTIMATE_SPIDERMAN';

export const SecretWarsVolume1: Record<HeroNames, IHero> = {
  APOCALYPTIC_KITTY_PRYDE: {
    id: 'ff75f7c1-ea51-4611-8906-007f34020f36',
    name: 'Apocalyptic Kitty Pryde',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  BLACK_BOLT: {
    id: '70aa9d63-2a1a-4a88-b020-fcd29f1682a7',
    name: 'Black Bolt',
    team: Teams.ILLUMINATI,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  BLACK_PANTHER: {
    id: '25a81d82-c642-4a64-bc88-0ec167ad72f8',
    name: 'Black Panther',
    team: Teams.ILLUMINATI,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  CAPTAIN_MARVEL: {
    id: 'd5292626-4ec9-46c0-b578-233dff88061e',
    name: 'Captain Marvel',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  DR_STRANGE: {
    id: '072aca76-b88d-4e36-b338-dfb6a843deee',
    name: 'Dr. Strange',
    team: Teams.ILLUMINATI,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [DarkCityKeywords.Teleport],
  },
  LADY_THOR: {
    id: 'b5d618dd-0a8c-42fb-9016-237121c33679',
    name: 'Lady Thor',
    team: Teams.AVENGERS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  MAGIK: {
    id: 'ce8f16e3-6b58-4109-96b8-6151d88be656',
    name: 'Magik',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [DarkCityKeywords.Teleport],
  },
  MAXIMUS: {
    id: '9a8c0cc8-2c50-4222-801e-224cbb7a3cc6',
    name: 'Maximus',
    team: Teams.CABAL,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  NAMOR_THE_SUBMARINER: {
    id: 'd7489478-616e-42a7-9ebc-7ae5940ea3a3',
    name: 'Namor, the Sub-Mariner',
    team: Teams.CABAL,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  OLD_MAN_LOGAN: {
    id: '7c410c7c-b1d8-4295-a8eb-33d7503369cd',
    name: 'Old Man Logan',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [SecretWarsVolume1Keywords.CrossDimensionalRampage],
  },
  PROXIMA_MIDNIGHT: {
    id: 'bb939bcc-ad84-4e61-9217-413338c3fcf2',
    name: 'Proxima Midnight',
    team: Teams.CABAL,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  SUPERIOR_IRON_MAN: {
    id: '786c707d-0b8c-459b-8c34-a1652002ba54',
    name: 'Superior Iron Man',
    team: Teams.ILLUMINATI,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
  THANOS: {
    id: '5209393c-c682-45bf-bd96-ac57de0acfa3',
    name: 'Thanos',
    team: Teams.CABAL,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    keywords: [DarkCityKeywords.Teleport],
  },
  ULTIMATE_SPIDERMAN: {
    id: '3765d005-a552-472e-b47c-531323c87528',
    name: 'Ultimate Spider-Man',
    team: Teams.SPIDER_FRIENDS,
    cardType: CardType.HERO,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
  },
};
