import { ObjectValues } from '../../utils/object-values.type';

export const DECK_TYPE = {
  hero: 'HERO',
  villain: 'VILLAIN',
  additional: 'ADDITIONAL',
} as const;

export type DeckType = ObjectValues<typeof DECK_TYPE>;
