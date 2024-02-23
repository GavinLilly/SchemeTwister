import { VillainGroup } from '@schemetwister/libtwister';

import { HIDDEN_WITNESS, INVESTIGATE } from './noir.keywords';
import { META } from './noir.meta';

export const GOBLINS_FREAK_SHOW = new VillainGroup({
  id: '815b3ca9-d3f0-43b3-9d9c-8cf8fd32fd33',
  name: "Goblin's Freak Show",

  gameSet: META,
  keywords: [HIDDEN_WITNESS],
});

export const XMEN_NOIR = new VillainGroup({
  id: 'f331d3a1-0014-418d-a774-2847a7a79c38',
  name: 'X-Men Noir',

  gameSet: META,
  keywords: [INVESTIGATE],
});
