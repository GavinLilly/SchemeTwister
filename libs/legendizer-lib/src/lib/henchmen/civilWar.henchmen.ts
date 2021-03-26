import { CardType, Keyword } from '../cardSet';
import { GameSets } from '../gamesets';
import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'MANDROID' | 'CAPEKILLERS';

export const CivilWar: Record<HenchmenNames, IHenchmen> = {
  MANDROID: {
    id: 'cdda62f3-711b-43ec-a30f-1a6d68739298',
    name: 'Mandroid',
    attackPoints: '2+',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.CIVIL_WAR,
    fight: 'KO one of your Heroes.',
  },
  CAPEKILLERS: {
    id: '7f0e7c78-884d-494d-9b66-9e0b0323d942',
    name: 'Cape-Killers',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.CIVIL_WAR,
    fight: 'KO a card from your discard pile.',
  },
};
