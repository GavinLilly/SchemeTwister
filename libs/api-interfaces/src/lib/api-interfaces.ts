import { Team, GameSet } from "./constants";

type numPlayers = 2 | 3 | 4 | 5;

interface IBase {
  gameSet: GameSet;
  id: string;
}

export interface IHenchmen extends IBase {
  name: string;
  fight: string;
  attackPoints: number;
  victoryPoints: number;
}

export interface IBystander extends IBase {
  name: string;
  copies: number;
  victory_points: number;
  ability?: string;
}

export interface IHero extends IBase {
  name: string;
  team?: Team
}

export interface IMastermind extends IBase {
  name: string;
  always_leads: IHenchmen | IVillainGroup
}

export interface IRules {
  numVillains: Record<numPlayers, number>;
  numHenchmen: Record<numPlayers, number>;
  numBystanders: Record<numPlayers, number>;
  numHeroes: Record<numPlayers, number>;
  numTwists: Record<numPlayers, number>;
}

export interface IScheme extends IBase {
  name: string;
  rules: IRules;
  twist: Map<number, string>;
  evilWins: string;
  specialRules?: string;
}

export interface ISetup {
  villains: Array<IVillainGroup>;
  henchmen: Array<IHenchmen>;
  numBystanders: number;
  heroes: Array<IHero>;
  numTwists: number;
  numWounds?: number;
  numBystandersInVillainDeck?: number;
  schemeName: string;
}

export interface IVillainGroup extends IBase {
  name: string;
}
