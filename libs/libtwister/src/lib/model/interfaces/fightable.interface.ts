import { IVictoryPileCard } from './victoryPileCard.interface';

export interface IFightable extends IVictoryPileCard {
  readonly attackPoints: number | string;
  readonly escape?: string;
  readonly finishThePrey?: string;
}
