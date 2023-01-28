import { AbstractMastermind } from '../../../model';

import { MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE } from './keywords';
import { META } from './meta';
import { DEMONS_OF_LIMBO, HELLIONS } from './villains';

abstract class AbstractNewMutantsMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Belasco extends AbstractNewMutantsMastermind {
  constructor(id: string, name: string, attackPoints: string | number) {
    super(
      id,
      name,
      attackPoints,
      6,
      DEMONS_OF_LIMBO,
      false,
      MOONLIGHT_AND_SUNLIGHT,
      WAKING_NIGHTMARE
    );
  }
}

export const BELASCO_DEMON_LORD_OF_LIMBO = new Belasco(
  '29e222c6-7b22-49e8-bc3e-77a80ad01ac8',
  'Belasco, Demon Lord of Limbo',
  9
);

export const EPIC_BELASCO = new Belasco(
  '5d90bb23-c3e5-47ab-a3d9-5117d959ed1f',
  'Epic Belasco',
  '10+'
);

class EmmaFrost extends AbstractNewMutantsMastermind {
  constructor(id: string, name: string, attackPoints: string | number) {
    super(id, name, attackPoints, 6, HELLIONS, false, WAKING_NIGHTMARE);
  }
}

export const EMMA_FROST_THE_WHITE_QUEEN = new EmmaFrost(
  '7a137e62-3cce-4003-b522-62d1c61fb289',
  'Emma Frost, The White Queen',
  8
);

export const EPIC_EMMA_FROST = new EmmaFrost(
  '5cd1338e-70be-49e0-96b8-289b61f7b5cd',
  'Epic Emma Frost',
  '8+'
);
