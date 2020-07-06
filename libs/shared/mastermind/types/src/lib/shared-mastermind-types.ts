import { BaseBadGuy } from "@legendizer/shared/base/types";
import { Henchmen } from "@legendizer/shared/henchmen/types";
import { VillainGroup } from "@legendizer/shared/villainGroup/types";

export interface Mastermind extends BaseBadGuy {
  alwaysLeads: Henchmen | VillainGroup;
}
