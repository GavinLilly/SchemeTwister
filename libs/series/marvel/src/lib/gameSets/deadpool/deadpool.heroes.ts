import { Hero } from '@schemetwister/libtwister';
import { EXCESSIVE_VIOLENCE, HYDRA } from '@schemetwister/series-marvel-common';

import { MERCS_FOR_MONEY } from '../../teams';

import { META } from './deadpool.meta';

export const BOB_AGENT_OF_HYDRA = new Hero({
  id: '5aa52805-11c4-4e17-840b-b6e94612a21c',
  name: 'Bob, Agent of HYDRA',
  team: HYDRA,
  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});

export const DEADPOOL = new Hero({
  id: '864e7a8a-33c3-4464-84e9-3105bd1a9058',
  name: 'Deadpool',
  team: MERCS_FOR_MONEY,
  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});

export const SLAPSTICK = new Hero({
  id: 'f412fbfc-65cd-4276-ae81-87fa87d74180',
  name: 'Slapstick',
  team: MERCS_FOR_MONEY,
  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});

export const SOLO = new Hero({
  id: '52d2c47d-20a6-4fdf-8ce5-fb26d6aa958a',
  name: 'Solo',
  team: MERCS_FOR_MONEY,
  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});

export const STINGRAY = new Hero({
  id: '3e78fa58-b34d-48bb-84f0-f321b0dedc5c',
  name: 'Stingray',
  team: MERCS_FOR_MONEY,
  gameSet: META,
  keywords: [EXCESSIVE_VIOLENCE],
});
