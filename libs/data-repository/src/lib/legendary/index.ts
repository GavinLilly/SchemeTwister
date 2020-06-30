import { Bystanders as LBystanders } from "./legendary.bystanders";
import { Schemes as LSchemes }from "./legendary.schemes";
import { VillainGroups as LVillainGroups } from "./legendary.villains";
import { Heroes as LHeroes } from "./legendary.heroes";
import { Henchmen as LHenchmen } from "./legendary.henchmen";
import { Masterminds as LMasterminds } from "./legendary.masterminds";
import { SetBuilder } from "../setBuilder";

const GameSet = {
  name: 'Legendary (base set)',
  id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d'
};

const Bystanders = SetBuilder.buildDeck(LBystanders, GameSet.id);
const Henchmen = SetBuilder.buildDeck(LHenchmen, GameSet.id);
const Heroes = SetBuilder.buildDeck(LHeroes, GameSet.id);
const Masterminds = SetBuilder.buildDeck(LMasterminds, GameSet.id);
const Schemes = SetBuilder.buildDeck(LSchemes, GameSet.id);
const VillainGroups = SetBuilder.buildDeck(LVillainGroups, GameSet.id);

export {
  GameSet,
  Bystanders,
  Henchmen,
  Heroes,
  Masterminds,
  Schemes,
  VillainGroups
}
