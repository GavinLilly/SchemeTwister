import { BaseModel } from '@legendizer/shared/base/types';
import { IScheme } from "./scheme.interface";
import { VillainGroupModel } from '@legendizer/shared/villainGroup/types';
import { IRules } from './rules.interface';

export class SchemeModel extends BaseModel<IScheme> implements IScheme {
  private static VALUES: SchemeModel[] = [];
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  numWounds?: number;
  requiredVillains?: VillainGroupModel;
  rules: IRules;

  protected constructor(scheme: IScheme) {
    super(scheme);
    this.twist = scheme.twist;
    this.evilWins = scheme.evilWins;
    this.setup = scheme.setup;
    this.specialRules = scheme.specialRules;
    this.numWounds = scheme.numWounds;
    this.requiredVillains = scheme.requiredVillains;
    this.rules = scheme.rules;
  }

  public static values() {
    return SchemeModel.VALUES;
  }
}
