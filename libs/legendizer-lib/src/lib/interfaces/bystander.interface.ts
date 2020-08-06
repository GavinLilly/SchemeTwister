import { IBase } from "./base.interface";

export interface IBystander extends IBase {
  copies: number;
  victoryPoints: number;
}
