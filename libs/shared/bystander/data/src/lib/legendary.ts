import { IBystander } from '@legendizer/shared/bystander/types';
import { GameSets } from '@legendizer/shared/gameSet/data';
import { CardType } from "@legendizer/shared/base/types";

type BystanderNames = 'BYSTANDER';

export const LegendaryBystanders: Record<BystanderNames, IBystander> = {
  BYSTANDER: {
    id: 'd84ef365-e212-430b-9925-c567ef17569f',
    name: 'Bystander',
    copies: 30,
    victoryPoints: 1,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.BYSTANDER
  }
}
