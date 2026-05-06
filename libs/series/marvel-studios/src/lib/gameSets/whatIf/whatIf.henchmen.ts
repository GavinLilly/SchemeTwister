import { Henchmen } from '@schemetwister/libtwister';
import { EMPOWERED } from '@schemetwister/series-marvel-common';

import { LIBERATE } from './whatIf.keywords';
import { META } from './whatIf.meta';

export const GIANTS_OF_JOTUNHEIM = new Henchmen({
  id: 'd825079f-66e4-4783-b357-8434eedbc78b',
  name: 'Giants of Jotunheim',
  ambush: 'Each player discards the top three cards of their deck.',
  fight: 'You may KO a grey Hero from your discard pile.',
  attackPoints: 3,
  gameSet: META,
});

export const ULTRON_SENTRIES = new Henchmen({
  id: '8e086b08-2bf4-434f-a357-caef085f45c4',
  name: 'Ultron Sentries',
  fight: 'KO one of your Heroes.',
  attackPoints: '2+',
  gameSet: META,
  keywords: [EMPOWERED],
});

export const VIBRANIUM_LIBERATOR_DRONES = new Henchmen({
  id: '648270e3-c078-4929-b9e6-0a399814da29',
  name: 'Vibranium Liberator Drones',
  ambush: 'Another Villain captures a Bystander.',
  fight: `${LIBERATE.name} 3. The next time you rescue a Bystander this turn (including from this Henchman), KO one of your Heroes.`,
  attackPoints: 3,
  gameSet: META,
  keywords: [LIBERATE],
});
