import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'MAXIMUM_CARNAGE'
  | 'SINISTER_SIX';

export const PaintTheTownRed: Record<VillainGroupNames, IVillainGroup> = {
  MAXIMUM_CARNAGE: {
    id: '7a950d64-6bbf-4993-99f6-9071542ba6e0',
    name: 'Maxmimum Carnage',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.PAINT_THE_TOWN_RED
  },
  SINISTER_SIX: {
    id: '13e916d4-f3f3-4fd1-9d27-f22987b009e2',
    name: 'Sinister Six',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.PAINT_THE_TOWN_RED
  }
};
