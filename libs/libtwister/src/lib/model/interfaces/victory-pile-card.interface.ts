import { IPlayableObject } from './playable-object.interface';

export interface IVictoryPileCard extends IPlayableObject {
  victoryPoints: number;
}
