import { CardType } from './cardType.enum';
import {
  ICard,
  IHenchmen,
  IKeyword,
  INumPlayerRules,
  IVillainGroup,
} from './interfaces';

type RuleOverrideFunc = (rule: INumPlayerRules, num: number) => INumPlayerRules;

export abstract class AbstractMastermind implements ICard {
  public readonly name: string;
  public readonly cardType = CardType.MASTERMIND;
  public abstract gameSetId: string;
  public readonly keywords: IKeyword[];
  public readonly alwaysLeads: (IVillainGroup | IHenchmen)[];
  private _overrideFunction: RuleOverrideFunc | undefined;

  constructor(
    id: string,
    name: string,
    attackPoints: string | number,
    victoryPoints: number,
    alwaysLeads?: IVillainGroup | IHenchmen,
    epic?: boolean,
    ...keywords: IKeyword[]
  );
  constructor(
    id: string,
    name: string,
    attackPoints: string | number,
    victoryPoints: number,
    alwaysLeads?: (IVillainGroup | IHenchmen)[],
    epic?: boolean,
    ...keywords: IKeyword[]
  );
  constructor(
    public readonly id: string,
    name: string,
    public attackPoints: string | number,
    public victoryPoints: number,
    alwaysLeads?: (IVillainGroup | IHenchmen) | (IVillainGroup | IHenchmen)[],
    epic = false,
    ...keywords: IKeyword[]
  ) {
    this.name = epic ? `Epic ${name}` : name;
    this.keywords = keywords;

    if (Array.isArray(alwaysLeads)) {
      this.alwaysLeads = alwaysLeads;
    } else if (alwaysLeads !== undefined) {
      this.alwaysLeads = [alwaysLeads];
    } else {
      this.alwaysLeads = [];
    }
  }

  public static empty(): AbstractMastermind {
    return new (class extends AbstractMastermind {
      public readonly gameSetId = 'EMPTY_GAMESET';
    })('EMPTY_MASTERMIND', 'EMPTY MASTERMIND', 0, 0, []);
  }

  /**
   * Override the rules for each number of players. Useful for setting a rule
   * based on the number of players
   * @param func a function to apply to the rule set for each number of players
   * @returns a configured instance of an {@link AbstractScheme}
   */
  public withRuleOverride(func: RuleOverrideFunc): this {
    this._overrideFunction = func;

    return this;
  }

  public getRuleOverride(): RuleOverrideFunc | undefined {
    return this._overrideFunction;
  }
}
