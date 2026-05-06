import { Henchmen } from '@schemetwister/libtwister';

import { META } from './buffyTheVampireSlayer.meta';

export const HARBINGERS_OF_DEATH = new Henchmen({
  id: 'c324f469-68bb-491e-bc6b-e2b6fc40df74',
  name: 'Harbingers of Death',
  fight: 'Advance the Light',
  attackPoints: 4,
  victoryPoints: 1,
  gameSet: META,
});

export const SHARK_GANGSTERS = new Henchmen({
  id: '0c85edbe-2e46-4d75-8aaa-13eb16ef37c2',
  name: 'Shark Gangsters',
  ability:
    'Shark Gangsters cannot be defeated if you have spent a Courage Token this turn',
  attackPoints: 4,
  victoryPoints: 1,
  gameSet: META,
});

export const HELLHOUNDS = new Henchmen({
  id: '7ac5c9ba-4585-4302-b232-427e1690b2cd',
  name: 'Hellhounds',
  ambush: 'Advance the Dark',
  attackPoints: 3,
  victoryPoints: 1,
  gameSet: META,
});

export const TUROK_HAN_VAMPIRES = new Henchmen({
  id: '511a22d9-8645-4ba6-89c6-0e4195ba6289',
  name: 'Turok-Han Vampires',
  fight: 'Gain a Courage Token',
  attackPoints: 5,
  victoryPoints: 1,
  gameSet: META,
});

export const VAMPIRE_INITIATE = new Henchmen({
  id: '85189bf1-6cf3-46c9-a0d7-62df15903a86',
  name: 'Vampire Initiate',
  ambush: 'Capure a Bystander',
  attackPoints: 3,
  victoryPoints: 0,
  gameSet: META,
});
