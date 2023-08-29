import { IPlayableObject } from '../model';
import { randomize } from '../utils/randomize';

/**
 * A factory for selecting a single card from a large set.
 */
export class SingleCardFactory<T extends IPlayableObject> {
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
   * Creates a map of cards to the their IDs as a subset of the entire
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
   */
  public get allCards(): T[] {
    return Array.from(this.allCardsMap.values());
  }

  /**
   * The map of all records as ID => record (i.e. pre-filtered)
   */
  public get allCardsMap(): Map<string, T> {
    return this._allCards;
  }

  /**
   * The set of excluded records
   */
  public get excludedCards(): T[] | undefined {
    return Array.from(this.excludedCardsMap.values());
  }

  /**
   * The map of excluded records as ID => record
   */
  public get excludedCardsMap(): Map<string, T> {
    return this.getMapFromSet(this._excludedCardIds);
  }

  /**
   * The set of available records (i.e. has already been filtered)
   */
  public get availableCards(): T[] {
    return Array.from(this.availableCardsMap.values());
  }

  /**
   * The map of available records as ID => record (i.e. has already been filtered)
   */
  public get availableCardsMap(): Map<string, T> {
    return this._excludedCardIds.size > 0
      ? this.excludeFromMap(this._excludedCardIds)
      : this._allCards;
  }

  /**
   * Returns 1 random card entry from the list of available cards
   * @param func an optional function to filter the cards before randomisation
   * @returns a single card entry
   */
  public getOneRandom(func?: (card: T) => boolean): T {
    if (func !== undefined) {
      return randomize(this.availableCards.filter(func));
    }

    return randomize(this.availableCards);
  }

  /**
   * Get's the full item associated with the given item ID
   * @param id the ID of the item that is requested
   * @returns the requested item or undefined if it's not found
   */
  public getOne(id: string): T | undefined {
    return this.availableCardsMap.get(id);
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
