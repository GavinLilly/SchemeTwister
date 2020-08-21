import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'DARK_COUNCIL'
  | 'OMENS_OF_RAGNAROK';

export const HeroesOfAsgard: Record<VillainGroupNames, IVillainGroup> = {
  DARK_COUNCIL: {
    id: 'ca7fd688-3d19-4ec2-b190-adf8b58eb67a',
    name: 'Dark Council',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  OMENS_OF_RAGNAROK: {
    id: '2948ab8b-45f6-418c-8b1b-304a43e79878',
    name: 'Omens of Ragnarok',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.HEROES_OF_ASGARD
  }
};
