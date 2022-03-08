import { AbstractMastermind } from '../../../model';
import { DEMOLISH } from '../villains/keywords';

import { META } from './meta';
import { THE_MIGHTY } from './villains';

class UruEnchantedIronManMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;

  constructor() {
    super(
      'ae06a222-8894-458e-9ef3-f75b823d4d2b',
      'Uru-Enchanted Iron Man',
      7,
      6,
      THE_MIGHTY,
      false,
      DEMOLISH
    );
  }
}

export const URUENCHANTED_IRON_MAN = new UruEnchantedIronManMastermind();
