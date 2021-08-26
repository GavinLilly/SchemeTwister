import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  GuardiansOfTheGalaxy as GuardiansOfTheGalaxyKeywords,
  FearItself as FearItselfKeywords,
  MarvelStudios as MarvelStudiosKeywords,
  HeroesOfAsgard as HeroesOfAsgardKeywords,
} from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'DARK_COUNCIL' | 'OMENS_OF_RAGNAROK';

export const HeroesOfAsgard: Record<VillainGroupNames, IVillainGroup> = {
  DARK_COUNCIL: {
    id: 'ca7fd688-3d19-4ec2-b190-adf8b58eb67a',
    name: 'Dark Council',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.HEROES_OF_ASGARD,
    keywords: [
      GuardiansOfTheGalaxyKeywords.Artifact,
      FearItselfKeywords.ThrownArtifact,
      HeroesOfAsgardKeywords.Worthy,
      HeroesOfAsgardKeywords.VillainousWeapons,
    ],
  },
  OMENS_OF_RAGNAROK: {
    id: '2948ab8b-45f6-418c-8b1b-304a43e79878',
    name: 'Omens of Ragnarok',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.HEROES_OF_ASGARD,
    keywords: [
      GuardiansOfTheGalaxyKeywords.Artifact,
      MarvelStudiosKeywords.Conqueror,
      HeroesOfAsgardKeywords.VillainousWeapons,
    ],
  },
};
