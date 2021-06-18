import { CardType, Keyword } from '../cardSet';
import { GameSets } from '../gamesets';
import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'HYDRA_BASE' | 'MANDARINS_RINGS';

export const Revelations: Record<HenchmenNames, IHenchmen> = {
  HYDRA_BASE: {
    id: 'b6e568bb-cefb-45ed-9c3b-b18026b7d305',
    name: 'HYDRA Base',
    attackPoints: '2+',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.REVELATIONS,
    fight: 'KO one of your Heroes.',
  },
  MANDARINS_RINGS: {
    id: '225028da-e992-4073-84ae-2fd3853d1eac',
    name: "Mandarin's Rings",
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.REVELATIONS,
    fight: 'Draw a card.',
  },
};
