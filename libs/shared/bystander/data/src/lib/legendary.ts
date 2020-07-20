import { BystanderModel } from '@legendizer/shared/bystander/types';
import { GameSet } from '@legendizer/shared/gameSet/data';
import { CardType } from "@legendizer/shared/base/types";

export class LegendaryBystanders extends BystanderModel {
  public static BYSTANDER = new LegendaryBystanders({
    id: 'd84ef365-e212-430b-9925-c567ef17569f',
    name: 'Bystander',
    copies: 30,
    victoryPoints: 1,
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.BYSTANDER
  })
}
