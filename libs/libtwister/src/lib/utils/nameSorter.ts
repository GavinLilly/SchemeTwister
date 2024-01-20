import { INamedObject } from '../model';

/**
 * A function for sorting cards by name
 * @param a The first item to sort
 * @param b The second item to sort
 * @returns 1, -1 or 0 based on which card comes first alphabetically
 */
export const nameSorter = (a: INamedObject, b: INamedObject) =>
  a.name.localeCompare(b.name);
