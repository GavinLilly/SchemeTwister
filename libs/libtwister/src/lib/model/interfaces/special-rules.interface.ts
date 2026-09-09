import { IPlayableObject } from './playable-object.interface';

export interface ISpecialRules extends IPlayableObject {
  readonly specialRules?: string;
}
