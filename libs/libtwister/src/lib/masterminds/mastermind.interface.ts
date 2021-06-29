import { IBadGuyCard } from '../cardSet/badGuyCard.interface';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup } from '../villains/villainGroup.interface';

export interface IMastermind extends IBadGuyCard {
  alwaysLeads: Array<IHenchmen | IVillainGroup>;
}
