import { PlayableObject } from './playable-object.interface';

export interface SpecialRules extends PlayableObject {
  readonly specialRules?: string;
}
