import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'CYTOPLASM_SPIKES' | 'DEATHS_HEADS' | 'SAKAARAN_HIVELINGS';

export const WorldWarHulk: Record<HenchmenNames, IHenchmen> = {
  CYTOPLASM_SPIKES: {
    id: '72ad3b4c-0705-4ea3-9b5e-88b2efa36183',
    name: 'Cytoplasm Spikes',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.WORLD_WAR_HULK,
    fight:
      'Feast. If Cytoplasm Spikes feasts on a non-grey Hero, you get +2 Recruit',
  },
  DEATHS_HEADS: {
    id: '82cb34b7-64f0-419a-8751-3d5eb9273659',
    name: "Death's Heads",
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.WORLD_WAR_HULK,
    fight:
      "If you Outwit these Death's Heads, KO one of your cards that costs 0.",
  },
  SAKAARAN_HIVELINGS: {
    id: '572260df-5a13-4726-b7a4-84135a419b0e',
    name: 'Sakaaran Hivelings',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.WORLD_WAR_HULK,
    fight:
      'Look at the top card of your deck. Put it back on the top or bottom. Then Feast',
  },
};
