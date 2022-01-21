import { IHero } from '.';
import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  Clone,
  Shatter,
  TacticalFormation,
} from '../keywords/messiahComplex.keywords';
import { Investigate } from '../keywords/noir.keywords';
import { WhenRecruited } from '../keywords/realmOfKings.keywords';
import { Teams } from '../teams';

type HeroNames =
  | 'STRONG_GUY'
  | 'WARPATH'
  | 'MULTIPLE_MAN'
  | 'STEPFORD_CUCKOOS'
  | 'M'
  | 'SHATTERSTAR'
  | 'SIRYN'
  | 'RICTOR';

export const MessiahComplex: Record<HeroNames, IHero> = {
  STRONG_GUY: {
    id: 'ee989156-a39f-4058-aa4a-077832cacfb5',
    name: 'Strong Guy',
    team: Teams.X_FACTOR,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Investigate, TacticalFormation],
  },
  WARPATH: {
    id: '3928b4f5-820b-4860-beca-59df65d4665a',
    name: 'Warpath',
    team: Teams.X_FORCE,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Investigate, TacticalFormation],
  },
  MULTIPLE_MAN: {
    id: '78e22f6a-3594-4ce8-9b49-fa4fab12efd9',
    name: 'Multiple Man',
    team: Teams.X_FACTOR,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Investigate, Clone, TacticalFormation],
  },
  STEPFORD_CUCKOOS: {
    id: '47dff683-279a-4d6d-aa84-e8fa898e6cdb',
    name: 'Stepford Cuckoos',
    team: Teams.X_MEN,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Investigate, Clone, TacticalFormation, WhenRecruited],
  },
  M: {
    id: '4899bdfa-8338-4131-8f53-44034a5eeee1',
    name: 'M',
    team: Teams.X_FACTOR,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Investigate, Clone, WhenRecruited, TacticalFormation],
  },
  SHATTERSTAR: {
    id: 'e9e53da6-5047-4ef8-9111-d1d13a6f3739',
    name: 'Shatterstar',
    team: Teams.X_FORCE,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Clone, WhenRecruited, TacticalFormation, Shatter],
  },
  SIRYN: {
    id: '53eefc9f-baa5-4375-b32f-dcd2faa37018',
    name: 'Siryn',
    team: Teams.X_FACTOR,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Shatter, Investigate, TacticalFormation],
  },
  RICTOR: {
    id: '472d8671-19c0-459f-befe-934811630cab',
    name: 'Rictor',
    team: Teams.X_FACTOR,
    cardType: CardType.HERO,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Shatter, Investigate],
  },
};
