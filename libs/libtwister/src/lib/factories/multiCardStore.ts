import { CardChosenError, ICard } from '../model';

import { MultiCardFactory } from './multiCardFactory';
import { SingleCardFactory } from './singleCardFactory';

export class MultiCardStore<T extends ICard> extends MultiCardFactory<T> {
  private _chosenCards: Set<string> = new Set();
  private _excludedCardsForSetup: Set<string> = new Set();

  public get availableCardsMap(): Map<string, T> {
    const excluded = super.availableCardsMap;

    const minusChosen =
      this._chosenCards.size > 0
        ? SingleCardFactory.excludeFromMap(excluded, this._chosenCards)
        : excluded;

    const minusExcluded =
      this._excludedCardsForSetup.size > 0
        ? SingleCardFactory.excludeFromMap(
            minusChosen,
            this._excludedCardsForSetup
          )
        : minusChosen;

    return minusExcluded;
  }

  /**
   * This method gets a random card from the list of filtered cards while also
   * removing that card from the record so it can't be selected later
   * @returns a single card entry
   */
  public getOneRandom(func?: (hero: T) => boolean): T {
    const card = super.getOneRandom(func);

    this._chosenCards.add(card.id);

    return card;
  }

  /**
   * This methods gets a number of random cards from the list of filtered cards
   * while also removing those carsd from the record so they can't be selected later
   * @param count the number of cards to get
   * @returns an array of cards
   */
  public getManyRandom(count: number, func?: (hero: T) => boolean): T[] {
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
  public getOne(id: string): T {
    if (this._chosenCards.has(id)) {
      throw new CardChosenError(`${id} already chosen`);
    }

    const card = super.getOne(id);

    if (card !== undefined) {
      this._chosenCards.add(id);
      return card;
    } else {
      throw new Error(
        `Provided card ID (${id}) is not in the list of available cards.`
      );
    }
  }

  public getAll(items: string[]): T[] {
    const cards: T[] = [];
    items.forEach((item) => {
      try {
        const card = this.getOne(item);
        if (card !== undefined) {
          cards.push(card);
        }
      } catch (e) {
        if (e instanceof CardChosenError) {
          const chosenItem = this.allCardsMap.get(item);
          console.log(
            `${
              chosenItem?.name
            } already chosen in ${this.getStoreType()} store. Continuing...`
          );
        }
      }
    });

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

  public get excludedCardsMap(): Map<string, T> {
    const excludedFromSetup = new Set([
      ...this._chosenCards,
      ...this._excludedCardsForSetup,
    ]);

    const excludedCards = SingleCardFactory.getMapFromSet(
      this.allCardsMap,
      excludedFromSetup
    );

    return new Map([...super.excludedCardsMap, ...excludedCards]);
  }
}
