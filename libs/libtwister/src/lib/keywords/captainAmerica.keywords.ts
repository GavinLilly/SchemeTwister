import { ABOMINATION, MAN_OUT_OF_TIME, SAVIOR } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const ManOutOfTime: IKeyword = {
  ...MAN_OUT_OF_TIME,
  description: `"After you use this card's abilities, set it aside. At the beginning of your next turn, play this card a second time then discard it."
The card is discarded the second time you play it, so you play the card only twice total.
Play your returning Man Out of Time cards after the "Play a Villain Card" part of your turn and before you start playing out your hand.
You "played" a Man Out of Time card on both the first turn you played it and the second turn when you replayed it, so it can help activate your Superpower Abilities on both turns.`,
};

export const Savior: IKeyword = {
  ...SAVIOR,
  description: `"Use this ability if you have at least 3 Bystanders in your Victory Pile."
If you defeat a Villain with Bystanders, put those Bystanders into your Victory Pile before checking any Savior ability on that Villain.
If a Hero card rescues a Bystander, that Bystander counts towards any Savior ability on that Hero.`,
};

export const Abomination: IKeyword = {
  ...ABOMINATION,
  description: `"This Villain gets +Attack equal to the printed Attack of the Hero in the HQ space under this Villain's city space."
"Ultimate Abomination" means "This Mastermind gets +Attack equal to the total printed Attack of all the Heroes in the HQ."
An Abomination Villain's Attack can go up and down as the Villain moves through the city.`,
};
