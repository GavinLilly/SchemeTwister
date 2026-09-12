interface Plural {
  singular: string;
  plural: string;
}

export interface Nomenclature {
  bystander: string;
  henchmen: string | Plural;
  hero: string | Plural;
  mastermind: string;
  scheme: string;
  sidekick: string;
  twist: string;
  villain: string | Plural;
  wound: string;
  purchase: string;
  attack: string;
  agents: string;
  troopers: string;
  officers: string;
  city: string;
  hq: string;
}
