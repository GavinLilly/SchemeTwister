import { AbstractMastermind, AbstractScheme } from '@schemetwister/libtwister';

export interface IDefinedItem {
  random: boolean;
  definedItem?: AbstractScheme | AbstractMastermind;
}
