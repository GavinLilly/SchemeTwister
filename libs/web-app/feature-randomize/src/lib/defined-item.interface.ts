import { IMastermind, IScheme } from '@legendizer/legendizer-lib';

export interface IDefinedItem {
  random: boolean;
  definedItem?: IScheme | IMastermind;
}
