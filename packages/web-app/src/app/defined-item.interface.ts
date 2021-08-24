import { IMastermind, IScheme } from 'libtwister';

export interface IDefinedItem {
  random: boolean;
  definedItem?: IScheme | IMastermind;
}
