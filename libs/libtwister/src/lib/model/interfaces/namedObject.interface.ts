export interface INamedObject {
  /**
   * The name of the object
   */
  readonly name: string;

  /**
   * Meta: ID of the card (only used in this library)
   */
  readonly id: string;
}
