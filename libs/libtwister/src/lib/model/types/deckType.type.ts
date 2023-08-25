import { ObjectValues } from '../../utils/objectValues.type';

/* eslint-disable @typescript-eslint/naming-convention */
export const DECK_TYPE = {
  HERO: 'HERO',
  VILLAIN: 'VILLAIN',
  ADDITIONAL: 'ADDITIONAL',
} as const;

export type DeckType = ObjectValues<typeof DECK_TYPE>;
