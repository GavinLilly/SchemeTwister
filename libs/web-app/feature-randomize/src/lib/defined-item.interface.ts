import { IMastermind, IScheme } from '@schemetwister/libtwister';

export interface IDefinedItem {
  random: boolean;
  definedItem?: IScheme | IMastermind;
}
