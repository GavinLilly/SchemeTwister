import { INomenclature } from './interfaces/nomenclature.interface';

export class SeriesMeta {
  private readonly _nomenclature: INomenclature;

  public get id() {
    return this._id;
  }

  public get seriesName() {
    return this._seriesName;
  }

  public get description() {
    return this._description;
  }

  public get nomenclature() {
    return this._nomenclature;
  }

  constructor(
    private readonly _id: string,
    private readonly _seriesName: string,
    private readonly _description: string,
    nomenclature?: Partial<INomenclature>
  ) {
    this._nomenclature = {
      bystander: 'Bystander',
      henchmen: 'Henchmen',
      hero: {
        singular: 'Hero',
        plural: 'Heroes',
      },
      mastermind: 'Mastermind',
      scheme: 'Scheme',
      sidekick: 'Sidekick',
      twist: 'Twist',
      villain: 'Villain',
      wound: 'Wound',
      purchase: 'Purchase',
      attack: 'Attack',
      ...nomenclature,
    };
  }
}
