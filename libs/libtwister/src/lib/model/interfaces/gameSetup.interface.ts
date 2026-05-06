import { Mastermind, TransformingMastermind } from '../cards/mastermind';
import { Scheme } from '../schemes/Scheme';

import { IAdditionalDeck, IHeroDeck, IVillainDeck } from './deck.interface';

export interface IGameSetup {
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
  heroDeck: IHeroDeck;

  /** The cards that will for the Villain deck */
  villainDeck: IVillainDeck;

  /**
   * The definition of the additional decks. Will be empty if there are no
   * additional decks
   *
   */
  additionalDecks: IAdditionalDeck[];
}
