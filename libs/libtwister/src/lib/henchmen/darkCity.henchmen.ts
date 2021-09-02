import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { HeroClass } from '../enums';
import { DarkCity as DarkCityKeywords } from '../keywords';

import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'MAGGIA_GOONS' | 'PHALANX';

export const DarkCity: Record<HenchmenNames, IHenchmen> = {
  MAGGIA_GOONS: {
    id: '11b440df-9d3d-4546-af21-498058cfe6f7',
    name: 'Maggia Goons',
    keywords: [DarkCityKeywords.Bribe],
    fight: 'KO one of your Heroes.',
    attackPoints: 4,
    victoryPoints: 1,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HENCHMEN,
  },
  PHALANX: {
    id: 'afd81252-9b06-42fa-bc75-e7b928ca49aa',
    name: 'Phalanx',
    fight: `Reveal a ${HeroClass.TECH} Hero or KO one of your Heroes with an Attack icon`,
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HENCHMEN,
  },
};
