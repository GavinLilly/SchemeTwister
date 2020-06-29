import { Bystanders as LBystanders } from "./legendary.bystanders";
import { Schemes as LSchemes }from "./legendary.schemes";
import { VillainGroups as LVillainGroups } from "./legendary.villains";
import { Heroes as LHeroes } from "./legendary.heroes";
import { Henchmen as LHenchmen } from "./legendary.henchmen";
import { Masterminds as LMasterminds } from "./legendary.masterminds";
import { SetBuilder } from "../setBuilder";

const GameSet = 'Legendary (base set)';

const Bystanders = SetBuilder.buildGameSet(LBystanders, GameSet);
const Henchmen = SetBuilder.buildGameSet(LHenchmen, GameSet);
const Heroes = SetBuilder.buildGameSet(LHeroes, GameSet);
const Masterminds = SetBuilder.buildGameSet(LMasterminds, GameSet);
const Schemes = SetBuilder.buildGameSet(LSchemes, GameSet);
const VillainGroups = SetBuilder.buildGameSet(LVillainGroups, GameSet);

export {
  GameSet,
  Bystanders,
  Henchmen,
  Heroes,
  Masterminds,
  Schemes,
  VillainGroups
}
