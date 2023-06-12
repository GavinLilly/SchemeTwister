import { SchemeDefinition } from '../../../model';

import { VEILED_SCHEMES } from './messiahComplex.keywords';
import { META } from './messiahComplex.meta';

export const HACK_CEREBRO_SERVERS_TO = new SchemeDefinition({
  id: 'e25e8c41-af6f-4481-b2f0-d98f3113d492',
  name: 'Hack Cerebro Servers to...',
  setup: '10 Twists',
  twist: `1-5: Put a card from the Bystander Stack next to this Scheme as a "Hacker". KO a Hero from the HQ with the cost equal to the number of Hackers. If you KO'd a Hero this way, stack this Twist next to the Mastermind as "Stolen Cerebro Data".
6: Put the Hackers on the bottom of the Bystander Stack. This Scheme Transforms into a random Unveiled Scheme. Do it's Twist effect.`,
  evilWins: 'N/A',
  keywords: [VEILED_SCHEMES],
  meta: { numTwists: 10 },
  gameSet: META,
});

export const RAID_GENE_BANK_TO = new SchemeDefinition({
  id: 'f20c107f-bba4-4a2d-89ca-196a8f9ce902',
  name: 'Raid Gene Bank to...',
  setup: '8 Twists',
  twist: `1-3: If there is a Villain in the Bank, stack this Twist next to the Mastermind as a "Mutant Genome". Otherwise, move a villain from another city space to the Bank.
4: This Scheme Transforms into a random Unveiled Scheme. Do it's Twist effect.`,
  evilWins: 'N/A',
  keywords: [VEILED_SCHEMES],
  meta: { numTwists: 8 },
  gameSet: META,
});

export const HIRE_SINGULARITY_INVESTIGATIONS_TO = new SchemeDefinition({
  id: '5fd38dd7-1a83-4c9f-aea8-4500b6536659',
  name: 'Hire Singularity Investigations to...',
  setup: '9 Twists',
  twist: `1-4: If there are any "Singularity Investigators" in the city, stack this Twist next to the Mastermind as a "Dark Discovery". Whether you did that or not, Investigate the Bystander Stack for a card and have it enter the city as a "Singularity Investigator" Villain. It has 6 attack and "Fight: Rescue this as a Bystander. Then KO one of your Heroes. Then Investigate your deck for a card with a buy icon."
5: This Scheme Transforms into a random Unveiled Scheme. Do it's Twist effect.`,
  evilWins: 'N/A',
  keywords: [VEILED_SCHEMES],
  meta: { numTwists: 9 },
  gameSet: META,
});

export const DRAIN_MUTANTS_POWERS_TO = new SchemeDefinition({
  id: '9d1dc041-7072-4219-9846-062f4cb59581',
  name: "Drain Mutants' powers to...",
  setup: '11 Twists',
  twist: `1-6: Stack the top two cards of the Sidekick Stack face down next to the Scheme as "Kidnapped Mutants". If there were any Kidnapped Mutants already there, put those on the bottom of the Sidekick Stack and put this Twist next to the Mastermind as a "Drained Power".
7: KO all Kidnapped Mutants. This Scheme Transforms into a random Unveiled Scheme. Do it's Twist effect.`,
  specialRules: `Players may spend 3 buy or 3 attack to gain a Kidnapped Mutant.`,
  evilWins: 'N/A',
  keywords: [VEILED_SCHEMES],
  meta: { numTwists: 11 },
  gameSet: META,
});
