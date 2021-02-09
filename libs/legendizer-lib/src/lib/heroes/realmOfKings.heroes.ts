import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames = 'BLACK_BOLT' | 'MEDUSA' | 'CRYSTAL' | 'KARNAK' | 'GORGON';

export const RealmOfKings: Record<HeroNames, IHero> = {
  BLACK_BOLT: {
    id: 'f78985a9-729d-446f-8a03-4c037f4f8fd9',
    name: 'Black Bolt',
    team: Teams.INHUMANS,
    cardType: CardType.HERO,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  MEDUSA: {
    id: 'dd9444f3-c449-4659-9712-2033f3877fc3',
    name: 'Medusa',
    team: Teams.INHUMANS,
    cardType: CardType.HERO,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  CRYSTAL: {
    id: '909a7a01-9a54-4940-abb6-77ff229127ec',
    name: 'Crystal',
    team: Teams.INHUMANS,
    cardType: CardType.HERO,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  KARNAK: {
    id: '8fea3024-3249-436f-b4cc-b58a0de37712',
    name: 'Karnak',
    team: Teams.INHUMANS,
    cardType: CardType.HERO,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  GORGON: {
    id: 'bf9a9dee-5187-4286-9af8-29d63d5678c8',
    name: 'Gorgon',
    team: Teams.INHUMANS,
    cardType: CardType.HERO,
    gameSet: GameSets.REALM_OF_KINGS,
  },
};
