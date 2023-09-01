import { IPlayableObject } from '../model';

import { CardFactory } from './cardFactory';

/**
 * A MultiCardFactory with memory!
 */
export class CardStore<T extends IPlayableObject> extends CardFactory<T> {
  private readonly _pickedCards: Set<string> = new Set();
  private readonly _excludedCardsForSetup: Set<string> = new Set();

  protected override get availableCardsMap(): Map<string, T> {
    const excluded = super.availableCardsMap;

    const minusChosen =
      this._pickedCards.size > 0
        ? this.excludeFromMap(this._pickedCards, excluded)
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
   * @returns A single card entry
   */
  public pickRandom(): T;
  /**
   * Gets a number of random cards from the list of filtered cards while also
   * removing those cards from the record so they can't be selected later.
   * Optionally filters the cards before random selection too.
   * @param count The number of cards to get. Defaults to 1
   * @param func An optional function for filtering the cards to randomize from
   * @returns An array of cards
   */
  public pickRandom(count?: number, func?: (card: T) => boolean): T | T[];
  public pickRandom(count = 1, func?: (card: T) => boolean): T | T[] {
    const randoms = this.getRandom(count, func);

    const randomsArray = randoms instanceof Array ? randoms : [randoms];

    randomsArray.forEach((card) => this._pickedCards.add(card.id));

    return randoms;
  }

  /**
   * Get's the full item associated with the given item ID and removes it from
   * the store
   * @param id the ID of the item that is requested
   * @returns the requested item or undefined if it's not found
   */
  public pickOne(id: string): T;
  /**
   * Get's the full item associated with the given card and removes it from
   * the store
   * @param card the card that is requested
   * @returns the requested card if it's in the list of available cards
   */
  public pickOne(card: T): T;
  public pickOne(idOrCard: string | T): T {
    const cardId = CardFactory.getCardId(idOrCard);

    if (this._pickedCards.has(cardId)) {
      console.log('Requested card already picked. Returning requested card');
      const alreadyPicked = this.allCardsMap.get(cardId);
      if (alreadyPicked === undefined) {
        throw new Error(
          'Picked card is not in list of all cards. Unable to continue'
        );
      }
      return alreadyPicked;
    }

    const card = this.getOne(cardId);
    this._pickedCards.add(cardId);

    return card;
  }

  /**
   * For each ID passed to the function, get the full item associated with it
   * and remove it from the store.
   * Note: IDs that are not matched are skipped.
   * @param ids the card IDs that are requested
   * @returns the requested items
   */
  public pickMany(ids: string[]): T[];
  /**
   * For each card passed to the function, remove it from the store and return it.
   * Note: IDs that are not matched are skipped.
   * @param cards the card that are requested
   * @returns the requested items
   */
  public pickMany(cards: T[]): T[];
  public pickMany(idsOrCards: string[] | T[]): T[] {
    return idsOrCards.map((idOrCard) => {
      const cardId = CardFactory.getCardId(idOrCard);
      return this.pickOne(cardId);
    });
  }

  /**
   * Resets the store to it's original state at instantiation so that any
   * already selected cards are added back into the list of available ones
   */
  public resetStore() {
    this._pickedCards.clear();
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
    const cardId = CardFactory.getCardId(idOrCard);
    this._excludedCardsForSetup.add(cardId);
  }

  protected override get excludedCardsMap(): Map<string, T> {
    const excludedFromSetup = new Set([
      ...this._pickedCards,
      ...this._excludedCardsForSetup,
    ]);

    const excludedCards = this.getMapFromSet(
      excludedFromSetup,
      this.allCardsMap
    );

    return new Map([...super.excludedCardsMap, ...excludedCards]);
  }
}
