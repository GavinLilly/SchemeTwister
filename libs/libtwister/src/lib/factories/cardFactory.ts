import { IPlayableObject } from '../model';
import { randomize } from '../utils/randomize';

/**
 * A factory for selecting cards from a large set.
 */
export class CardFactory<T extends IPlayableObject> {
  private readonly _allCards: Map<string, T> = new Map();
  private readonly _excludedCardIds: Set<string>;

  constructor(allCards: T[], excludedCardIds?: string[]) {
    if (allCards.length === 0) {
      throw new Error('Empty array of records not allowed');
    }

    allCards.forEach((card) => this._allCards.set(card.id, card));

    this._excludedCardIds = new Set(excludedCardIds);
  }

  protected static getCardId = <T extends IPlayableObject>(
    idOrCard: string | T
  ): string =>
    typeof idOrCard === 'string' || idOrCard instanceof String
      ? (idOrCard as string)
      : (idOrCard as T).id;

  /**
   * Removes cards from the map of cards
   * @param toExclude the cards to remove from the collection
   * @param allCards the entire collection of cards in the factory
   * @returns a subset of cards as a map
   */
  protected excludeFromMap(
    toExclude: Set<string>,
    allCards: Map<string, T> = this._allCards
  ): Map<string, T> {
    const availMap = new Map(allCards);

    toExclude.forEach((id) => availMap.delete(id));

    return availMap;
  }

  /**
   * Creates a map of cards to their IDs as a subset of the entire
   * collection of cards in the factory.
   * @param set the subset of cards that are wanted
   * @param allCards the entire collection of cards in the factory
   * @returns a map of the cards to their card IDs
   */
  protected getMapFromSet(
    set: Set<string>,
    allCards: Map<string, T> = this._allCards
  ): Map<string, T> {
    const excluded: Map<string, T> = new Map();

    set.forEach((id) => {
      const card = allCards.get(id);
      if (card) {
        excluded.set(id, card);
      }
    });

    return excluded;
  }

  /**
   * The set of all records (i.e. pre-filtered)
   * @returns All the records in the factory
   */
  public get allCards(): T[] {
    return Array.from(this.allCardsMap.values());
  }

  /**
   * The map of all records as ID => record (i.e. pre-filtered)
   * @returns A Map of record IDs to records
   */
  public get allCardsMap(): Map<string, T> {
    return this._allCards;
  }

  /**
   * The array of excluded records
   * @returns An array of records excluded from use in the factory
   */
  public get excludedCards(): T[] {
    return Array.from(this.excludedCardsMap.values());
  }

  /**
   * The map of excluded records as ID => record
   * @returns A Map of record IDs to records
   */
  protected get excludedCardsMap(): Map<string, T> {
    return this.getMapFromSet(this._excludedCardIds);
  }

  /**
   * The set of available records (i.e.post-filtered)
   * @returns an array of records allowed to be selected from
   */
  public get availableCards(): T[] {
    return Array.from(this.availableCardsMap.values());
  }

  /**
   * The map of available records as ID => record (i.e. post-filtered)
   * @returns A Map of record IDs to records
   */
  protected get availableCardsMap(): Map<string, T> {
    return this._excludedCardIds.size > 0
      ? this.excludeFromMap(this._excludedCardIds)
      : this._allCards;
  }

  /**
   * Returns 1 random card entry from the list of available cards
   * @returns A single card entry
   */
  public getRandom(): T;
  /**
   * Gets a number of random cards from the list of filtered cards
   * @param count The number of cards to get. Defaults to 1
   * @param func An optional function for filtering the cards to randomize from
   * @returns An array of cards
   */
  public getRandom(count?: number, func?: (card: T) => boolean): T | T[];
  public getRandom(count = 1, func?: (card: T) => boolean): T | T[] {
    if (count === 1) {
      if (func !== undefined) {
        return randomize(this.availableCards.filter(func));
      }

      return randomize(this.availableCards);
    }

    const cards =
      func !== undefined
        ? this.availableCards.filter(func)
        : this.availableCards;

    const random = randomize(cards, count);
    return random instanceof Array ? random : [random];
  }

  /**
   * Get's the full item associated with the given item ID
   * @param id the ID of the item that is requested
   * @returns the requested item or undefined if it's not found
   */
  public getOne(id: string): T {
    const card = this.availableCardsMap.get(id);

    if (card === undefined) {
      throw new Error(
        `Provided card ID (${id}) is not in the list of available cards.`
      );
    }

    return card;
  }

  /**
   * For each ID passed to the function, get the full item associated with it.
   * Note: IDs that are not matched are skipped.
   * @param ids An array of ID strings
   * @returns An array of cards
   */
  public getMany(ids: string[]): T[] {
    const cards: T[] = [];
    ids.forEach((id) => {
      const card = this.getOne(id);

      if (card !== undefined) {
        cards.push(card);
      }
    });

    return cards;
  }

  /**
   * Returns whether the provided item ID is available in the factory
   * @param id the ID of the item that is requested
   * @returns true if it is available
   */
  public isAvailable(id: string): boolean;
  /**
   * Returns whether the provided item is available in the factory
   * @param item the item that is requested
   * @returns true if it is available
   */
  public isAvailable(item: T): boolean;
  public isAvailable(item: string | T): boolean {
    if (typeof item === 'string' || item instanceof String) {
      return this.availableCardsMap.get(item as string) !== undefined;
    }

    return this.availableCards.includes(item);
  }

  /**
   * Returns the type of card stored within the string
   * @returns a string name of the store
   */
  public getStoreType(): string {
    return this.availableCards[0].constructor.name;
  }
}
