import { BRIBE, TELEPORT, VERSATILE } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Teleport: IKeyword = {
  ...TELEPORT,
  description: `Instead of playing, you may set aside a card with the keyword "Teleport". If you do, add it to your new hand at the end of your turn as an extra card.`,
};

export const Bribe: IKeyword = {
  ...BRIBE,
  description: `You can fight villains with the keyword "Bribe" by spending any combination of Attack and/or Recruit points. For example, you may play two S.H.I.E.L.D. Agents and two S.H.I.E.L.D. Troopers to fight the +4 Attack Maggia Goons."`,
};

export const Versatile: IKeyword = {
  ...VERSATILE,
  description: `When you play a card with the keyword "Versatile" you must first choose between Recruit and Fight. Once you have chosen, the card provides recruit or fight equal to the Versatile value. For example, Versatile 3 gives you +3 Recruit or +3 Attack.`,
};
