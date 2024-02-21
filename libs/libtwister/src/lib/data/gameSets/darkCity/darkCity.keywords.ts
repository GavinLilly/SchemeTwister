import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums/keywordName.enum';

export const TELEPORT: IKeyword = {
  name: KeywordName.TELEPORT,
  id: 'd35e1a3f-0c7a-45ee-957b-282531c2309f',
  description: `Instead of playing, you may set aside a card with the keyword "Teleport". If you do, add it to your new hand at the end of your turn as an extra card.`,
};

export const BRIBE: IKeyword = {
  name: KeywordName.BRIBE,
  id: '2a2e01e3-699f-489f-bb57-8ebae436fea7',
  description: `You can fight villains with the keyword "Bribe" by spending any combination of Attack and/or Recruit points. For example, you may play two S.H.I.E.L.D. Agents and two S.H.I.E.L.D. Troopers to fight the +4 Attack Maggia Goons."`,
};

export const VERSATILE: IKeyword = {
  name: KeywordName.VERSATILE,
  id: '4380904d-989b-4213-a80a-bf799161b6ac',
  description: `When you play a card with the keyword "Versatile" you must first choose between Recruit and Fight. Once you have chosen, the card provides recruit or fight equal to the Versatile value. For example, Versatile 3 gives you +3 Recruit or +3 Attack.`,
};
