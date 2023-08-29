import { IPlayableObject } from '../model';

import { MultiCardFactory } from './multiCardFactory';
import { SingleCardFactory } from './singleCardFactory';

/**
 * A MultiCardFactory with memory!
 */
export class MultiCardStore<
  T extends IPlayableObject
> extends MultiCardFactory<T> {
  private readonly _chosenCards: Set<string> = new Set();
  private readonly _excludedCardsForSetup: Set<string> = new Set();

  public override get availableCardsMap(): Map<string, T> {
    const excluded = super.availableCardsMap;

    const minusChosen =
      this._chosenCards.size > 0
        ? this.excludeFromMap(this._chosenCards, excluded)
        : excluded;

    const minusExcluded =
      this._excludedCardsForSetup.size > 0
        ? this.excludeFromMap(this._excludedCardsForSetup, minusChosen)
        : minusChosen;

    return minusExcluded;
  }

  /**
   * Gets a random card from the list of filtered cards while also removing that
   * card from the record so it can't be selected later
   * @returns a single card entry
   */
  public override getOneRandom(func?: (card: T) => boolean): T {
    const card = super.getOneRandom(func);

    this._chosenCards.add(card.id);

    return card;
  }

  /**
   * Gets a number of random cards from the list of filtered cards while also
   * removing those carsd from the record so they can't be selected later
   * @param count the number of cards to get
   * @returns an array of cards
   */
  public override getManyRandom(
    count: number,
    func?: (card: T) => boolean
  ): T[] {
    const cards = super.getManyRandom(count, func);

    // Remove each card from the index
    cards.forEach((card) => this._chosenCards.add(card.id));

    return cards;
  }

  /**
   * Get's the full item associated with the given item ID and removes it from
   * the store
   * @param id the ID of the item that is requested
   * @returns the requested item or undefined if it's not found
   */
  public override getOne(id: string): T;
  /**
   * Get's the full item associated with the given card and removes it from
   * the store
   * @param card the card that is requested
   * @returns the requested card if it's in the list of available cards
   */
  public override getOne(card: T): T;
  public override getOne(idOrCard: string | T): T {
    const cardId = SingleCardFactory.getCardId(idOrCard);

    const card = super.availableCardsMap.get(cardId);

    if (card !== undefined) {
      this._chosenCards.add(cardId);
      return card;
    }

    throw new Error(
      `Provided card ID (${cardId}) is not in the list of available cards.`
    );
  }

  /**
   * For each ID passed to the function, get the full item associated with it
   * and remove it from the store.
   * Note: IDs that are not matched are skipped.
   * @param ids the card IDs that are requested
   * @returns the requested items
   */
  public override getAll(ids: string[]): T[];
  /**
   * For each card passed to the function, remove it from the store and return it.
   * Note: IDs that are not matched are skipped.
   * @param cards the card that are requested
   * @returns the requested items
   */
  public override getAll(cards: T[]): T[];
  public override getAll(idsOrCards: string[] | T[]): T[] {
    return idsOrCards.map((idOrCard) => {
      const cardId = SingleCardFactory.getCardId(idOrCard);
      return this.getOne(cardId);
    });
  }

  /**
   * Resets the store to it's original state at instantiation so that any
   * already selected cards are added back into the list of available ones
   */
  public resetStore() {
    this._chosenCards.clear();
    this._excludedCardsForSetup.clear();
  }

  /**
   * Removes the given card ID from the list of available cards
   * @param id the id of the card to remove
   */
  public removeCard(id: string): void;
  /**
   * Removes the given card from the list of available cards
   * @param card the card to remove
   */
  public removeCard(card: T): void;
  public removeCard(idOrCard: string | T): void {
    const cardId = SingleCardFactory.getCardId(idOrCard);
    this._excludedCardsForSetup.add(cardId);
  }

  public override get excludedCardsMap(): Map<string, T> {
    const excludedFromSetup = new Set([
      ...this._chosenCards,
      ...this._excludedCardsForSetup,
    ]);

    const excludedCards = this.getMapFromSet(
      excludedFromSetup,
      this.allCardsMap
    );

    return new Map([...super.excludedCardsMap, ...excludedCards]);
  }
}
