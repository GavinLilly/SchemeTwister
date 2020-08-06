import { IBystander } from "../../interfaces";
import { CardType, GameSet } from "../../enums";

type BystanderNames = 'BYSTANDER';

export const Legendary: Record<BystanderNames, IBystander> = {
  BYSTANDER: {
    id: 'd84ef365-e212-430b-9925-c567ef17569f',
    name: 'Bystander',
    copies: 30,
    victoryPoints: 1,
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.BYSTANDER
  }
}
