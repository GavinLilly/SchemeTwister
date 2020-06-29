export interface IGameSet {
  id: string;
  name: string;
}

export interface IBase {
  gameSet: IGameSet;
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
  team?: string
}

export interface IMastermind extends IBase {
  name: string;
  always_leads: IHenchmen | IVillainGroup
}

export interface IScheme extends IBase {
  name: string;
  setup: string;
  twist: string;
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
