import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { X_Men as X_MenKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'DARK_DESCENDANTS'
  | 'HELLFIRE_CLUB'
  | 'MOJOVERSE'
  | 'MURDERWORLD'
  | 'SHADOW_X'
  | 'SHIAR_IMPERIAL_GUARD'
  | 'SISTERHOOD_OF_MUTANTS';

export const X_Men: Record<VillainGroupNames, IVillainGroup> = {
  DARK_DESCENDANTS: {
    id: 'eb82a628-241e-496f-bb3a-65f05dd65162',
    name: 'Dark Descendants',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [
      X_MenKeywords.XGene,
      X_MenKeywords.Dominate,
      X_MenKeywords.Traps,
    ],
  },
  HELLFIRE_CLUB: {
    id: '98b5a781-0137-4a57-ae35-7b05a6c617f9',
    name: 'Hellfire Club',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [
      X_MenKeywords.Dominate,
      X_MenKeywords.Traps,
      X_MenKeywords.TokenCards,
    ],
  },
  MOJOVERSE: {
    id: '51be7e1f-d2a6-49cb-8155-392bb497db2e',
    name: 'Mojoverse',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [X_MenKeywords.HumanShields, X_MenKeywords.Traps],
  },
  MURDERWORLD: {
    id: '84d6062e-66a9-4e2b-ab9d-518502295723',
    name: 'Murderworld',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [
      X_MenKeywords.HumanShields,
      X_MenKeywords.Traps,
      X_MenKeywords.TokenCards,
    ],
  },
  SHADOW_X: {
    id: '46bb7cbc-16f1-4df1-8cb8-b591e1ec8d4a',
    name: 'Shadow-X',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [
      X_MenKeywords.XGene,
      X_MenKeywords.SoaringFlight,
      X_MenKeywords.Dominate,
      X_MenKeywords.Traps,
    ],
  },
  SHIAR_IMPERIAL_GUARD: {
    id: '958904bf-dff4-4e56-a157-c2980477558b',
    name: 'Shiar Imperial Guard',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [
      X_MenKeywords.Dominate,
      X_MenKeywords.Traps,
      X_MenKeywords.TokenCards,
    ],
  },
  SISTERHOOD_OF_MUTANTS: {
    id: '3d71cf65-e446-4f42-bb95-f596726ac80a',
    name: 'Sisterhood of Mutants',
    gameSet: GameSets.X_MEN,
    cardType: CardType.VILLAINGROUP,
    keywords: [X_MenKeywords.Dominate, X_MenKeywords.Traps],
  },
};
