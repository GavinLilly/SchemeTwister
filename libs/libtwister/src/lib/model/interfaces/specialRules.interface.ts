import { IPlayableObject } from './playableObject.interface';

export interface ISpecialRules extends IPlayableObject {
  readonly specialRules?: string;
}
