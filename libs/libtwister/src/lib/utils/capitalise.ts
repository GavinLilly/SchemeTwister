/**
 * Capitalises the first character of the given string
 * @param string the string to capitalise
 * @returns a capitalised string
 */
export const capitalise = (string: string) =>
  string[0].toUpperCase() + string.slice(1);
