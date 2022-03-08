import { CardType } from './cardType.enum';
import { ICard, IHenchmen, IKeyword, IVillainGroup } from './interfaces';

export abstract class AbstractMastermind implements ICard {
  public readonly name: string;
  public readonly cardType = CardType.MASTERMIND;
  public abstract gameSetId: string;
  public readonly keywords: IKeyword[];
  public readonly alwaysLeads: (IVillainGroup | IHenchmen)[];

  constructor(
    id: string,
    name: string,
    attackPoints: string | number,
    victoryPoints: number,
    alwaysLeads: IVillainGroup | IHenchmen,
    epic?: boolean,
    ...keywords: IKeyword[]
  );
  constructor(
    id: string,
    name: string,
    attackPoints: string | number,
    victoryPoints: number,
    alwaysLeads: (IVillainGroup | IHenchmen)[],
    epic?: boolean,
    ...keywords: IKeyword[]
  );
  constructor(
    public readonly id: string,
    name: string,
    public attackPoints: string | number,
    public victoryPoints: number,
    alwaysLeads: (IVillainGroup | IHenchmen) | (IVillainGroup | IHenchmen)[],
    epic = false,
    ...keywords: IKeyword[]
  ) {
    this.name = epic ? `Epic ${name}` : name;
    this.keywords = keywords;

    if (Array.isArray(alwaysLeads)) {
      this.alwaysLeads = alwaysLeads;
    } else {
      this.alwaysLeads = [alwaysLeads];
    }
  }

  public static empty(): AbstractMastermind {
    return new (class extends AbstractMastermind {
      public readonly gameSetId = 'EMPTY_GAMESET';
    })('EMPTY_MASTERMIND', 'EMPTY MASTERMIND', 0, 0, []);
  }
}
