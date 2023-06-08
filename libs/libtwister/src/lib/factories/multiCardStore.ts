import { ICard } from '../model';

import { MultiCardFactory } from './multiCardFactory';

/**
 * A MultiCardFactory with memory!
 */
export class MultiCardStore<T extends ICard> extends MultiCardFactory<T> {
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
  public override getOne(id: string): T {
    const card = super.availableCardsMap.get(id);

    if (card) {
      this._chosenCards.add(id);
      return card;
    }

    throw new Error(
      `Provided card ID (${id}) is not in the list of available cards.`
    );
  }

  /**
   * For each ID passed to the function, get the full item assocaited with it
   * and remove it from the store.
   * Note: IDs that are not matched are skipped.
   */
  public override getAll(ids: string[]): T[] {
    const cards = super.getAll(ids);

    cards.forEach((card) => this.getOne(card.id));

    return cards;
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
   * Removes the given card from the list of available cards
   * @param id the id of the card to remove
   */
  public removeCard(id: string) {
    this._excludedCardsForSetup.add(id);
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
