import { Mastermind } from '../mastermind/mastermind.model';
import { TransformingMastermind } from '../mastermind/transforming-mastermind.model';
import { Scheme } from '../scheme/scheme.model';

import { AdditionalDeckConfig } from './deck/additional-deck.model';
import { HeroDeck } from './deck/hero-deck.model';
import { VillainDeck } from './deck/villain-deck.model';

export interface GameSetup {
  /** The number of players playing this setup */
  numPlayers: number;

  /** The Scheme forming the basis of this setup */
  scheme: Scheme;

  /** The Mastermind for the setup */
  mastermind: Mastermind | TransformingMastermind;

  /**
   * How many wounds are in the wound pile.
   * This will be undefined if there is no restriction on the number of wounds.
   */
  numWounds?: number;

  /**
   * How many Shield officers are in the Shield pile
   * This will be undefined if there is no restriction on the number of SHIELD
   * Officers.
   */
  numShieldOfficers?: number;

  /** The cards that will form the Hero deck */
  heroDeck: HeroDeck;

  /** The cards that will for the Villain deck */
  villainDeck: VillainDeck;

  /**
   * The definition of the additional decks. Will be empty if there are no
   * additional decks
   *
   */
  additionalDecks: AdditionalDeckConfig[];
}
