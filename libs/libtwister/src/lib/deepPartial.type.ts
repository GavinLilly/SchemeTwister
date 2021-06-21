/* eslint-disable @typescript-eslint/ban-types */
/**
 * @todo See if there's a way to make this typesafe
 */
export type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
