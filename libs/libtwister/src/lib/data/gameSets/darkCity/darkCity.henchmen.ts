import { HeroClass } from '../../../heroClass.enum';
import { Henchmen } from '../../../model';

import { BRIBE } from './darkCity.keywords';
import { META } from './darkCity.meta';

export const MAGGIA_GOONS = new Henchmen({
  id: '11b440df-9d3d-4546-af21-498058cfe6f7',
  name: 'Maggia Goons',
  keywords: [BRIBE],
  fight: 'KO one of your Heroes.',
  attackPoints: 4,
  victoryPoints: 1,
  gameSet: META,
});

export const PHALANX = new Henchmen({
  id: 'afd81252-9b06-42fa-bc75-e7b928ca49aa',
  name: 'Phalanx',
  fight: `Reveal a ${HeroClass.TECH} Hero or KO one of your Heroes with an Attack icon`,
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
});
