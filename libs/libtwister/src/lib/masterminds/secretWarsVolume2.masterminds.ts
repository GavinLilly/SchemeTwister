import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { SecretWarsVolume2 as SecretWarsVolume2Keywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'IMMORTAL_EMPEROR_ZHENGZHU'
  | 'KING_HYPERION'
  | 'SHIKLAH_THE_DEMON_BRIDE'
  | 'SPIDERQUEEN';

export const SecretWarsVolume2: Record<MastermindNames, IMastermind> = {
  IMMORTAL_EMPEROR_ZHENGZHU: {
    id: '03b4ca44-6b71-4a36-abe3-902f79b90d5b',
    name: 'Immortal Emperor Zheng-Zhu',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_2.KUNLUN],
    attackPoints: '7+',
    victoryPoints: 5,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
    keywords: [SecretWarsVolume2Keywords.CircleOfKungFu],
  },
  KING_HYPERION: {
    id: 'b2b84119-88c6-44f2-8721-95190dc38f5f',
    name: 'King Hyperion',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_2.UTOPOLIS],
    attackPoints: '12',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
    keywords: [SecretWarsVolume2Keywords.Charge],
  },
  SHIKLAH_THE_DEMON_BRIDE: {
    id: '471fd01c-3ba3-4f03-9db0-2931abcd3bc8',
    name: 'Shiklah, the Demon Bride',
    alwaysLeads: [VillainGroups.SECRET_WARS_VOLUME_2.MONSTER_METROPOLIS],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
    keywords: [SecretWarsVolume2Keywords.FatefulResurrection],
  },
  SPIDERQUEEN: {
    id: '566eadce-240d-45c0-b7ff-6a956a7cf462',
    name: 'Spider-Queen',
    alwaysLeads: [Henchmen.SECRET_WARS_VOLUME_2.SPIDERINFECTED],
    attackPoints: '8+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
};
