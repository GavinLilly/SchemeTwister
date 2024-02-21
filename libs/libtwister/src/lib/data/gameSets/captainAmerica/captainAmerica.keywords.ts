import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums/keywordName.enum';

export const MAN_OUT_OF_TIME: IKeyword = {
  name: KeywordName.MAN_OUT_OF_TIME,
  id: 'a18e3209-38f7-4776-85b4-04e23e0647c4',
  description: `"After you use this card's abilities, set it aside. At the beginning of your next turn, play this card a second time then discard it."
The card is discarded the second time you play it, so you play the card only twice total.
Play your returning Man Out of Time cards after the "Play a Villain Card" part of your turn and before you start playing out your hand.
You "played" a Man Out of Time card on both the first turn you played it and the second turn when you replayed it, so it can help activate your Superpower Abilities on both turns.`,
};

export const SAVIOR: IKeyword = {
  name: KeywordName.SAVIOR,
  id: '97b26846-086a-45a6-840a-bef45069fea3',
  description: `"Use this ability if you have at least 3 Bystanders in your Victory Pile."
If you defeat a Villain with Bystanders, put those Bystanders into your Victory Pile before checking any Savior ability on that Villain.
If a Hero card rescues a Bystander, that Bystander counts towards any Savior ability on that Hero.`,
};

export const ABOMINATION: IKeyword = {
  name: KeywordName.ABOMINATION,
  id: 'c7b6f51d-19a3-40b6-9abe-b0b15db8159f',
  description: `"This Villain gets +Attack equal to the printed Attack of the Hero in the HQ space under this Villain's city space."
"Ultimate Abomination" means "This Mastermind gets +Attack equal to the total printed Attack of all the Heroes in the HQ."
An Abomination Villain's Attack can go up and down as the Villain moves through the city.`,
};
