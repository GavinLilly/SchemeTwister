import * as Legendary from "./lib/legendary";

const Bystanders = Legendary.Bystanders
const GameSets = [ Legendary.GameSet ];
const Henchmen = Legendary.Henchmen;
const Heroes = Legendary.Heroes;
const Masterminds = Legendary.Masterminds;
const Schemes = Legendary.Schemes;
const VillainGroups = Legendary.VillainGroups;

export {
  Bystanders,
  GameSets,
  Henchmen,
  Heroes,
  Masterminds,
  Schemes,
  VillainGroups
};

export * from './lib/data-repository.module';
