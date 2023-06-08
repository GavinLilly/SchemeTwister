export interface INamedObject {
  /**
   * The name of the object
   */
  readonly name: string;

  /**
   * Meta: ID of the object
   */
  readonly id: string;
}

export function nameSorter(a: INamedObject, b: INamedObject) {
  return a.name < b.name ? -1 : 1;
}
