import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'ASPECTS_OF_THE_VOID'
  | 'CODE_RED'
  | 'ILLUMINATI'
  | 'INTELLIGENCIA'
  | 'SAKAAR_IMPERIAL_GUARD'
  | 'UFOES'
  | 'WARBOUND';

export const WorldWarHulk: Record<VillainGroupNames, IVillainGroup> = {
  ASPECTS_OF_THE_VOID: {
    id: '90ba3403-201c-4554-bde7-de31b2b18412',
    name: 'Aspects of the Void',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  CODE_RED: {
    id: '88d5ca32-e078-40e0-a4dc-b300d7424d66',
    name: 'Code Red',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  ILLUMINATI: {
    id: 'b6b54f9a-56d7-4529-be48-8675c6df1422',
    name: 'Illuminati',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  INTELLIGENCIA: {
    id: '337af3e9-107a-40c7-8d54-adfe9e1a52e7',
    name: 'Intelligencia',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  SAKAAR_IMPERIAL_GUARD: {
    id: 'f32c2b11-6741-4b9e-85f9-c0ef77785bc3',
    name: 'Sakaar Imperial Guard',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  UFOES: {
    id: 'e35df983-8b44-444f-b8cc-8a084aef0d0c',
    name: 'U-Foes',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  WARBOUND: {
    id: 'a7ba16e0-c4f4-40e9-b340-1bd8e9bf47c8',
    name: 'Warbound',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
};
