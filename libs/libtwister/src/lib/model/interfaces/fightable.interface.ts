import { IVictoryPileCard } from './victory-pile-card.interface';

export interface IFightable extends IVictoryPileCard {
  readonly attackPoints: number | string;
  readonly escape?: string;
  readonly finishThePrey?: string;
}
