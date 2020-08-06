import { IBase } from "./base.interface";

export interface IBaseBadGuy extends IBase {
  attackPoints: number | string;
  victoryPoints: number;
}
