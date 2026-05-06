import { ObjectValues } from '../../utils/objectValues.type';

export const GAME_SET_SIZE = {
  promo: 1,
  small: 2,
  medium: 3,
  large: 4,
  core: 5,
};

export type GameSetSize = ObjectValues<typeof GAME_SET_SIZE>;
