import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  PaintTheTownRed as PaintTheTownRedKeywords,
  SecretWarsVolume2 as SecretWarsVolume2Keywords,
} from '../keywords';

import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'KHONSHU_GUARDIANS' | 'MAGMA_MEN' | 'SPIDERINFECTED';

export const SecretWarsVolume2: Record<HenchmenNames, IHenchmen> = {
  KHONSHU_GUARDIANS: {
    id: 'a425e8d9-8f87-4111-bd68-a50a73904cd3',
    name: 'Khonshu Guardians',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
    fight: 'KO one of your Heroes.',
  },
  MAGMA_MEN: {
    id: 'fbd43c0f-b168-439b-908e-876a9e68ac07',
    name: 'Magma Men',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
    fight: 'KO one of your Heroes.',
    keywords: [SecretWarsVolume2Keywords.FatefulResurrection],
  },
  SPIDERINFECTED: {
    id: '905b8f21-2c2d-446d-b4d4-068071b823bc',
    name: 'Spider-Infected',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
    fight: 'The next Hero you gain this turn has Wall-Crawl',
    keywords: [PaintTheTownRedKeywords.WallCrawl],
  },
};
