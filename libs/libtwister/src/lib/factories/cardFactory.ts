import { IPlayableObject } from '../model';
import { randomize } from '../utils/randomize';

/**
 * A factory for selecting cards from a large set.
 */
export class CardFactory<TCard extends IPlayableObject> {
  private readonly _allCards: Map<string, TCard>;
  private readonly _excludedCardIds: Set<string>;

  constructor(allCards: TCard[]);
  constructor(allCards: TCard[], excludedCardIds: string[]);
  constructor(allCards: TCard[], excludedCardIds?: string[]) {
    if (allCards.length === 0) {
      throw new Error('Empty array of records not allowed');
    }

    this._allCards = new Map(allCards.map((card) => [card.id, card]));

    this._excludedCardIds = new Set(excludedCardIds);
  }

  protected static getCardId = <T extends IPlayableObject>(
    idOrCard: string | T
  ): string =>
    typeof idOrCard === 'string' || idOrCard instanceof String
      ? (idOrCard as string)
      : (idOrCard as T).id;

  /**
   * The set of all cards (i.e. pre-filtered)
   * @returns All the cards in the factory
   */
  public get allCards(): TCard[] {
    return Array.from(this.allCardsMap.values());
  }

  /**
   * The array of excluded records
   * @returns An array of records excluded from use in the factory
   */
  public get excludedCards(): TCard[] {
    return Array.from(this.excludedCardsMap.values());
  }

  /**
   * The set of available records (i.e.post-filtered)
   * @returns an array of records allowed to be selected from
   */
  public get availableCards(): TCard[] {
    return Array.from(this.availableCardsMap.values());
  }

  /**
   * The map of all records as ID => record (i.e. pre-filtered)
   * @returns A Map of record IDs to records
   */
  protected get allCardsMap(): Map<string, TCard> {
    return this._allCards;
  }

  /**
   * The map of excluded records as ID => record
   * @returns A Map of record IDs to records
   */
  protected get excludedCardsMap(): Map<string, TCard> {
    return this.idSetToCardMap(this._excludedCardIds);
  }

  /**
   * The map of available records as ID => record (i.e. post-filtered)
   * @returns A Map of record IDs to records
   */
  protected get availableCardsMap(): Map<string, TCard> {
    return this.excludeCardsFromMap(this._excludedCardIds);
  }

  /**
   * Removes cards from the map of cards
   * @param cardIdsToExclude the cards to remove from the collection
   * @param allCards the entire collection of cards in the factory
   * @returns a subset of cards as a map
   */
  protected excludeCardsFromMap(
    cardIdsToExclude: Set<string>,
    allCards: Map<string, TCard> = this._allCards
  ): Map<string, TCard> {
    const availableCards = new Map(allCards);

    cardIdsToExclude.forEach((id) => availableCards.delete(id));

    return availableCards;
  }

  /**
   * Creates a map of cards to their IDs as a subset of the entire
   * collection of cards in the factory.
   * @param cardIds the subset of cards that are wanted
   * @param allCards the entire collection of cards in the factory
   * @returns a map of the cards to their card IDs
   */
  protected idSetToCardMap(
    cardIds: Set<string>,
    allCards: Map<string, TCard> = this._allCards
  ): Map<string, TCard> {
    const applicableCards = Array.from(allCards.values()).filter((card) =>
      cardIds.has(card.id)
    );

    return new Map(applicableCards.map((card) => [card.id, card]));
  }

  /**
   * Returns 1 random card entry from the list of available cards
   * @returns A single card entry
   */
  public getRandom(): TCard;
  /**
   * Gets a number of random cards from the list of filtered cards
   * @param count The number of cards to get. Defaults to 1
   * @param func An optional function for filtering the cards to randomize from
   * @returns An array of cards
   */
  public getRandom(
    count?: number,
    func?: (card: TCard) => boolean
  ): TCard | TCard[];
  public getRandom(
    count = 1,
    func?: (card: TCard) => boolean
  ): TCard | TCard[] {
    const applicableCards =
      func !== undefined
        ? this.availableCards.filter(func)
        : this.availableCards;

    if (count === 1) {
      return randomize(applicableCards);
    }

    return randomize(applicableCards, count) as TCard[];
  }

  /**
   * Get's the full item associated with the given item ID
   * @param id the ID of the item that is requested
   * @returns the requested item or undefined if it's not found
   */
  public get(id: string): TCard;
  /**
   * For each ID passed to the function, get the full item associated with it.
   * Note: IDs that are not matched are skipped.
   * @param ids An array of ID strings
   * @returns An array of cards
   */
  public get(ids: string[]): TCard[];
  public get(idOrIds: string | string[]): TCard | TCard[] {
    const ids = idOrIds instanceof Array ? idOrIds : [idOrIds];

    const cards: TCard[] = [];
    ids.forEach((id) => {
      const card = this.availableCardsMap.get(id);

      if (card === undefined) {
        throw new Error(
          `Provided card ID (${id}) is not in the list of available cards.`
        );
      }

      cards.push(card);
    });

    if (cards.length === 1) {
      return cards[0];
    }

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
  public isAvailable(item: TCard): boolean;
  public isAvailable(item: string | TCard): boolean {
    const itemIsString = typeof item === 'string' || item instanceof String;
    if (itemIsString) {
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
