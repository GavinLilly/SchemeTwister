import { Setup } from "./setup";

export class Scheme{
  name: string;
  setup: Setup = new Setup();
  twist: Map<number, string>;
  evilWins: string;
  specialRules?: string;

  constructor(init?: Partial<Scheme>) {
    Object.assign(this, init);
  }
}
