import { IHenchmen, CardType } from '../../../model';

import { META } from './meta';

export const CIRCUS_OF_CRIME: IHenchmen = {
  id: '00a88791-99e4-4247-a373-8bf92baa0ba0',
  name: 'Circus of Crime',
  attackPoints: 3,
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  fight:
    'Reveal the top card of your deck. If it costs 0, KO it. Otherwise, draw it.',
  gameSet: META,
};

export const SPIDER_SLAYER: IHenchmen = {
  id: '6cf7d59f-dc70-4c13-a438-f092b3fb7bf1',
  name: 'Spider Slayer',
  attackPoints: 3,
  victoryPoints: 1,
  cardType: CardType.HENCHMEN,
  fight:
    'Reveal the top two cards of your deck. Put any that cost 2 or less into your hand. Put the rest back in any order.',
  gameSet: META,
};
