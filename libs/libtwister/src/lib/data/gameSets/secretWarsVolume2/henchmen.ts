import { IHenchmen, CardType } from '../../../model';
import { WALL_CRAWL } from '../paintTheTownRed/keywords';

import { FATEFUL_RESURRECTION } from './keywords';
import { META } from './meta';

export const KHONSHU_GUARDIANS: IHenchmen = {
  id: 'a425e8d9-8f87-4111-bd68-a50a73904cd3',
  name: 'Khonshu Guardians',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSet: META,
  fight: 'KO one of your Heroes.',
};

export const MAGMA_MEN: IHenchmen = {
  id: 'fbd43c0f-b168-439b-908e-876a9e68ac07',
  name: 'Magma Men',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSet: META,
  fight: 'KO one of your Heroes.',
  keywords: [FATEFUL_RESURRECTION],
};

export const SPIDERINFECTED: IHenchmen = {
  id: '905b8f21-2c2d-446d-b4d4-068071b823bc',
  name: 'Spider-Infected',
  attackPoints: '3',
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  gameSet: META,
  fight: 'The next Hero you gain this turn has Wall-Crawl',
  keywords: [WALL_CRAWL],
};
