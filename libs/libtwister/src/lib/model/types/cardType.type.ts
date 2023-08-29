import { ObjectValues } from '../../utils/objectValues.type';

export const CARD_TYPE = {
  bystander: 'Bystander',
  henchmen: 'Henchmen',
  hero: 'Hero',
  mastermind: 'Mastermind',
  scheme: 'Scheme',
  sidekick: 'Sidekick',
  twist: 'Twist',
  villainGroup: 'Villain Group',
  wound: 'Wound',
} as const;

export type CardType = ObjectValues<typeof CARD_TYPE>;
