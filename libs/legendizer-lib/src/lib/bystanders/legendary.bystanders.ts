import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IBystander } from "./bystander.interface";

type BystanderNames = 'BYSTANDER';

export const Legendary: Record<BystanderNames, IBystander> = {
  BYSTANDER: {
    id: 'd84ef365-e212-430b-9925-c567ef17569f',
    name: 'Bystander',
    copies: 30,
    victoryPoints: 1,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.BYSTANDER
  }
}
