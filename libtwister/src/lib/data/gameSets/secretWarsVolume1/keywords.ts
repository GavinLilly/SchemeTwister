import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums';

export const RISE_OF_THE_LIVING_DEAD: IKeyword = {
  name: KeywordName.RISE_OF_THE_LIVING_DEAD,
  id: 'e944ad1a-ebd7-4607-a5d9-0150d8de444f',
  description: `"Each player checks the top card of their Victory Pile. If that card is a Villain with a 'Rise of the Living Dead' ability, that Villain reenters the city."
(Mastermind Tactics never return this way.)
If you put a Villain with Bystanders into your Victory Pile, you choose the order.`,
};

export const CROSS_DIMENSIONAL_RAMPAGE: IKeyword = {
  name: KeywordName.CROSS_DIMENSIONAL_RAMPAGE,
  id: 'e26fa709-c866-4e1a-a983-84472d49c80e',
  description: `"Cross-Dimensional (Character) Rampage" means "Each player reveals one of their (Character) Heroes or a (Character) card in their Victory pile or gains a Wound." (Character) cards include any card with "(Character)" in its card name or Hero name.
"Hulk" cards additionally include "Maestro" and "Nul, Breaker of Worlds."
"Wolverine" cards additionally include any card with "Weapon X" or "Old Man Logan".`,
};
