import { AbstractMastermind } from '../../../model';

import { META } from './meta';
import { ELITE_ASSASSINS, TASKMASTERS_THUNDERBOLTS } from './villains';

abstract class AbstractBlackWidowMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class BaseTaskmaster extends AbstractBlackWidowMastermind {
  constructor(id: string, epic = false) {
    super(id, 'Taskmaster', '5+', 6, TASKMASTERS_THUNDERBOLTS, epic);
  }
}

export const TASKMASTER = new BaseTaskmaster(
  'f3c10c17-58c3-4a8f-9632-1def225bbcb6'
);

export const EPIC_TASKMASTER = new BaseTaskmaster(
  '49377bc2-47d1-4275-a24f-295e0d7dba00',
  true
);

class BaseIndestructibleMan extends AbstractBlackWidowMastermind {
  constructor(id: string, epic = false) {
    super(id, 'Indestructible Man', '*', 6, ELITE_ASSASSINS, epic);
  }
}

export const INDESTRUCTIBLE_MAN = new BaseIndestructibleMan(
  '710e7038-eaa5-4d16-a43a-32eee624ed4c'
);

export const EPIC_INDESTRUCTIBLE_MAN = new BaseIndestructibleMan(
  '702ed2c6-52a7-40cb-81f3-9fff3e21c917',
  true
);
