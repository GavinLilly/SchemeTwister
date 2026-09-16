import { VictoryPileCard } from './victory-pile-card.interface';

export interface Fightable extends VictoryPileCard {
  readonly attackPoints: number | string;
  readonly escape?: string;
  readonly finishThePrey?: string;
}
