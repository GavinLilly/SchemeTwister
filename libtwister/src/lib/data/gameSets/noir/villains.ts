import { IHero , CardType } from '../../../model';


import { HIDDEN_WITNESS, INVESTIGATE } from './keywords';
import { META } from './meta';

export const GOBLINS_FREAK_SHOW: IHero = {
  id: '815b3ca9-d3f0-43b3-9d9c-8cf8fd32fd33',
  name: "Goblin's Freak Show",
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [HIDDEN_WITNESS],
};

export const XMEN_NOIR: IHero = {
  id: 'f331d3a1-0014-418d-a774-2847a7a79c38',
  name: 'X-Men Noir',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [INVESTIGATE],
};
