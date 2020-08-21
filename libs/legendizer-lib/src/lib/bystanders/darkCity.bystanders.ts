import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IBystander } from "./bystander.interface";

type BystanderNames = 'NEWS_REPORTER' | 'PARAMEDIC' | 'RADIATION_SCIENTIST';

export const DarkCity: Record<BystanderNames, IBystander> = {
  NEWS_REPORTER: {
    id: 'bdad80b0-df45-4804-ac94-081752709bf5',
    name: 'News Reporter',
    copies: 4,
    victoryPoints: 1,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.BYSTANDER,
  },
  PARAMEDIC: {
    id: '6fb63da9-3d54-4ca3-b581-0f44c6cbed58',
    name: 'Paramedic',
    copies: 3,
    victoryPoints: 1,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.BYSTANDER,
  },
  RADIATION_SCIENTIST: {
    id: 'ab14b5f2-1665-4162-9d78-88ace8bfac23',
    name: 'Radiation Scientist',
    copies: 4,
    victoryPoints: 1,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.BYSTANDER,
  }
}
