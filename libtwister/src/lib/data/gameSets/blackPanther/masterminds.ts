import { AbstractMastermind } from '../../../model';
import { EMPOWERED } from '../antMan/keywords';

import { META } from './meta';
import { ENEMIES_OF_WAKANDA, KILLMONGERS_LEAGUE } from './villains';

abstract class AbstractBlackPantherMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class BaseKillmonger extends AbstractBlackPantherMastermind {
  constructor(id: string, attackPoints: string, epic = false) {
    super(id, 'Killmonger', attackPoints, 4, KILLMONGERS_LEAGUE, epic);
  }
}

export const KILLMONGER = new BaseKillmonger(
  '48ab2fc0-7745-472c-a902-93df093ae08d',
  '5*'
);

export const EPIC_KILLMONGER = new BaseKillmonger(
  '2a52145a-379a-4b30-85a4-5295edd7526c',
  '6*',
  true
);

class BaseKlaw extends AbstractBlackPantherMastermind {
  constructor(id: string, attackPoints: string, epic = false) {
    super(id, 'Klaw', attackPoints, 6, ENEMIES_OF_WAKANDA, epic, EMPOWERED);
  }
}

export const KLAW = new BaseKlaw('256cc621-c0bc-4fd6-868a-c3ca6b6616d7', '8+');

export const EPIC_KLAW = new BaseKlaw(
  '73ab549c-38d4-4ebd-a513-9992664e9fcd',
  '10+',
  true
);
