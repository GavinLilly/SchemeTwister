import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'GENERAL_THUNDERBOLT_ROSS'
  | 'ILLUMINATI_SECRET_SOCIETY'
  | 'KING_HULK_SAKAARSON'
  | 'MODOK'
  | 'THE_RED_KING'
  | 'THE_SENTRY';

export const WorldWarHulk: Record<MastermindNames, IMastermind> = {
  GENERAL_THUNDERBOLT_ROSS: {
    id: '1361f09c-889c-4d5b-92e2-6a739ad0fb09',
    name: 'General "Thunderbolt” Ross',
    alwaysLeads: [VillainGroups.WORLD_WAR_HULK.CODE_RED],
    attackPoints: '6',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  ILLUMINATI_SECRET_SOCIETY: {
    id: '11332b30-7a2c-48d0-bbdb-d48860fd7769',
    name: 'Illuminati, Secret Society',
    alwaysLeads: [VillainGroups.WORLD_WAR_HULK.ILLUMINATI],
    attackPoints: '11',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  KING_HULK_SAKAARSON: {
    id: '3f018456-2aff-47a5-8556-f2be139ae2f9',
    name: 'King Hulk, Sakaarson',
    alwaysLeads: [VillainGroups.WORLD_WAR_HULK.WARBOUND],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  MODOK: {
    id: '7e7b6054-969f-4854-8049-39578bbf08ae',
    name: 'M.O.D.O.K.',
    alwaysLeads: [VillainGroups.WORLD_WAR_HULK.INTELLIGENCIA],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  THE_RED_KING: {
    id: 'fdf31917-70fd-4745-8625-7510fa5224e5',
    name: 'The Red King',
    alwaysLeads: [VillainGroups.WORLD_WAR_HULK.SAKAAR_IMPERIAL_GUARD],
    attackPoints: '7',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
  THE_SENTRY: {
    id: '14512d58-4e07-404c-a970-2d798202d801',
    name: 'The Sentry',
    alwaysLeads: [VillainGroups.WORLD_WAR_HULK.ASPECTS_OF_THE_VOID],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.WORLD_WAR_HULK,
  },
};
