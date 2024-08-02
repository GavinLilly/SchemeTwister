import isUUID from 'validator/lib/isUUID';

import { IPlayableObject } from '../model/interfaces/playableObject.interface';
import { randomize } from '../utils/randomize';

export type GetRandomOptions<TCard extends IPlayableObject> = {
  count?: number;
  filter?: (card: TCard) => boolean;
};

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
      : idOrCard.id;

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
   * @param options The configuration to set the number of cards returned and/or
   * the function to filter the cards to choose from
   * @returns An array of cards
   */
  public getRandom(options: GetRandomOptions<TCard>): TCard[];
  public getRandom(options?: GetRandomOptions<TCard>): TCard | TCard[] {
    const applicableCards =
      options?.filter !== undefined
        ? this.availableCards.filter(options.filter)
        : this.availableCards;

    if (options === undefined) {
      return randomize(applicableCards);
    }

    if (options.count !== undefined) {
      return randomize(applicableCards, options.count);
    }

    return [randomize(applicableCards)];
  }

  /**
   * Get's the full item associated with the given item ID
   * @param id the ID of the item that is requested
   * @returns the requested item or undefined if it's not found
   */
  public get(id: string): TCard | undefined;
  /**
   * For each ID passed to the function, get the full item associated with it.
   * Note: IDs that are not matched are skipped.
   * @param ids An array of ID strings
   * @returns An array of cards
   */
  public get(ids: string[]): (TCard | undefined)[] | undefined;
  public get(
    idOrIds: string | string[]
  ): TCard | (TCard | undefined)[] | undefined {
    return this.getCardOrCards(idOrIds, (id) => {
      if (!isUUID(id)) {
        throw new Error(`The provided card ID (${id}) is not a valid UUID`);
      }

      return this.availableCardsMap.get(id);
    });
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

    if (!itemIsString) {
      return this.availableCards.includes(item);
    }

    const itemId = item as string;
    if (!isUUID(itemId)) {
      throw new Error(`The provided card ID (${itemId}) is not a valid UUID`);
    }

    return this.availableCardsMap.get(itemId) !== undefined;
  }

  /**
   * Returns the type of card stored within the string
   * @returns a string name of the store
   */
  public getStoreType(): string {
    return this.availableCards[0].constructor.name;
  }

  protected getCardOrCards<CardType>(
    idOrIds: string | string[],
    mapFunc: (
      value: string,
      index: number,
      array: string[]
    ) => CardType | undefined
  ): CardType | (CardType | undefined)[] | undefined {
    const ids = idOrIds instanceof Array ? idOrIds : [idOrIds];

    const cards = ids.map(mapFunc).filter((card): card is CardType => !!card);

    switch (cards.length) {
      case 0:
        return undefined;
      case 1:
        return cards[0];
      default:
        return cards;
    }
  }
}
