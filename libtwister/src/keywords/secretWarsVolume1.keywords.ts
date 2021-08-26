import {
  CROSS_DIMENSIONAL_RAMPAGE,
  RISE_OF_THE_LIVING_DEAD,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const RiseOfTheLivingDead: IKeyword = {
  ...RISE_OF_THE_LIVING_DEAD,
  description: `"Each player checks the top card of their Victory Pile. If that card is a Villain with a 'Rise of the Living Dead' ability, that Villain reenters the city."
(Mastermind Tactics never return this way.)
If you put a Villain with Bystanders into your Victory Pile, you choose the order.`,
};

export const CrossDimensionalRampage: IKeyword = {
  ...CROSS_DIMENSIONAL_RAMPAGE,
  description: `"Cross-Dimensional (Character) Rampage" means "Each player reveals one of their (Character) Heroes or a (Character) card in their Victory pile or gains a Wound." (Character) cards include any card with "(Character)" in its card name or Hero name.
"Hulk" cards additionally include "Maestro" and "Nul, Breaker of Worlds."
"Wolverine" cards additionally include any card with "Weapon X" or "Old Man Logan".`,
};
