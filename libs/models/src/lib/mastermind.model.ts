import { IMastermind } from '@legendizer/api-interfaces';
import { Base } from './base.model';
import { Henchmen } from "./henchmen.model";
import { VillainGroup } from "./villainGroup.model";

export class Mastermind extends Base implements IMastermind {
  name: string;
  always_leads: Henchmen | VillainGroup;

}
