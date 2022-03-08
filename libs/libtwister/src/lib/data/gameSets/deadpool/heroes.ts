import { IHero , CardType } from '../../../model';
import { HYDRA, MERCS_FOR_MONEY } from '../../teams';

import { EXCESSIVE_VIOLENCE } from './keywords';
import { META as DeadpoolDef } from './meta';

export const BOB_AGENT_OF_HYDRA: IHero = {
  id: '5aa52805-11c4-4e17-840b-b6e94612a21c',
  name: 'Bob, Agent of HYDRA',
  team: HYDRA,
  cardType: CardType.HERO,
  gameSetId: DeadpoolDef.id,
  keywords: [EXCESSIVE_VIOLENCE],
};

export const DEADPOOL: IHero = {
  id: '864e7a8a-33c3-4464-84e9-3105bd1a9058',
  name: 'Deadpool',
  team: MERCS_FOR_MONEY,
  cardType: CardType.HERO,
  gameSetId: DeadpoolDef.id,
  keywords: [EXCESSIVE_VIOLENCE],
};

export const SLAPSTICK: IHero = {
  id: 'f412fbfc-65cd-4276-ae81-87fa87d74180',
  name: 'Slapstick',
  team: MERCS_FOR_MONEY,
  cardType: CardType.HERO,
  gameSetId: DeadpoolDef.id,
  keywords: [EXCESSIVE_VIOLENCE],
};

export const SOLO: IHero = {
  id: '52d2c47d-20a6-4fdf-8ce5-fb26d6aa958a',
  name: 'Solo',
  team: MERCS_FOR_MONEY,
  cardType: CardType.HERO,
  gameSetId: DeadpoolDef.id,
  keywords: [EXCESSIVE_VIOLENCE],
};

export const STINGRAY: IHero = {
  id: '3e78fa58-b34d-48bb-84f0-f321b0dedc5c',
  name: 'Stingray',
  team: MERCS_FOR_MONEY,
  cardType: CardType.HERO,
  gameSetId: DeadpoolDef.id,
  keywords: [EXCESSIVE_VIOLENCE],
};
