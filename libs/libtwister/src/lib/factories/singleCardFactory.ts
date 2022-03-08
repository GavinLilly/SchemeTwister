import { ICard } from '../model';
import { randomize } from '../utils/randomize';

export class SingleCardFactory<T extends ICard> {
  private _allCards: Map<string, T> = new Map();
  private _excludedCardIds: Set<string>;

  constructor(allCards: T[], excludedCardIds?: string[]) {
    if (allCards.length == 0) {
      throw new Error('Empty array of records not allowed');
    }

    allCards.forEach((card) => this._allCards.set(card.id, card));

    this._excludedCardIds = new Set(excludedCardIds);
  }

  protected static excludeFromMap<T extends ICard>(
    allCards: Map<string, T>,
    toExclude: Set<string>
  ): Map<string, T> {
    const availMap = new Map(allCards);

    toExclude.forEach((id) => availMap.delete(id));

    return availMap;
  }

  protected static getMapFromSet<T extends ICard>(
    allCards: Map<string, T>,
    set: Set<string>
  ): Map<string, T> {
    const excluded: Map<string, T> = new Map();

    set.forEach((id) => {
      const card = allCards.get(id);
      if (card !== undefined) {
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

  public get allCardsMap(): Map<string, T> {
    return this._allCards;
  }

  /**
   * The set of excluded records
   */
  public get excludedCards(): T[] | undefined {
    return Array.from(this.excludedCardsMap.values());
  }

  public get excludedCardsMap(): Map<string, T> {
    return SingleCardFactory.getMapFromSet(
      this._allCards,
      this._excludedCardIds
    );
  }

  /**
   * The set of available records (i.e. has already been filtered)
   */
  public get availableCards(): T[] {
    return Array.from(this.availableCardsMap.values());
  }

  public get availableCardsMap(): Map<string, T> {
    return this._excludedCardIds.size > 0
      ? SingleCardFactory.excludeFromMap(this._allCards, this._excludedCardIds)
      : this._allCards;
  }

  /**
   * This method will return 1 random card entry from our list of available cards
   * @returns a single card entry
   */
  public getOneRandom(func?: (hero: T) => boolean): T {
    if (func === undefined) {
      return randomize(this.availableCards, 1)[0];
    } else {
      return randomize(this.availableCards.filter(func), 1)[0];
    }
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
    } else {
      return this.availableCards.includes(item);
    }
  }

  public getStoreType(): string {
    return this.availableCards[0].cardType;
  }
}
