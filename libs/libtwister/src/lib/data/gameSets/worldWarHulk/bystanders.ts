import { Bystander } from '../../../model';

import { META } from './meta';

export const ACTOR = new Bystander({
  id: '2aaa5da3-153c-4476-87ff-4489450f8b6e',
  name: 'Actor',

  copies: 1,
  gameSet: META,
  victoryPoints: 1,
});

export const ANIMAL_TRAINER = new Bystander({
  id: '6e887374-f835-4644-af30-d30d853283f5',
  name: 'Animal Trainer',

  copies: 1,
  gameSet: META,
  victoryPoints: 1,
});

export const TOURIST_COUPLE = new Bystander({
  id: '3b9b6f5a-7bb1-46d1-a877-1cfeb6b4234f',
  name: 'Tourist Couple',

  copies: 1,
  gameSet: META,
  victoryPoints: 1,
});

export const TRIAGE_NURSE = new Bystander({
  id: '0600b7d1-c2d1-4335-9e24-54176f924c94',
  name: 'Triage Nurse',

  copies: 1,
  gameSet: META,
  victoryPoints: 1,
});
