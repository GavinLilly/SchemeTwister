import { ObjectValues } from '../../utils/objectValues.type';

/**
 * The series that a game set is part of.
 */
export const SERIES = {
  /**
   * The main series of game sets. The original Legendary Marvel is the base
   * set for this series.
   */
  mainline: 'Mainline',

  /**
   * The Marvel Cinematic Universe series of game sets. Marvel Studios Phase 1
   * is the base set for this series.
   */
  mcu: 'MCU',

  /**
   * The villains series of game sets. Legendary Marvel: Villains is the base
   * set for this series.
   */
  villains: 'Villains',
} as const;

export type Series = ObjectValues<typeof SERIES>;
