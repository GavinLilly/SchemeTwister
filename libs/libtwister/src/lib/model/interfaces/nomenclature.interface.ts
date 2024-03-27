interface IPlural {
  singular: string;
  plural: string;
}

export interface INomenclature {
  bystander: string;
  henchmen: string | IPlural;
  hero: string | IPlural;
  mastermind: string;
  scheme: string;
  sidekick: string;
  twist: string;
  villain: string | IPlural;
  wound: string;
}
