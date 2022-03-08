import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums';

export const SPECTRUM: IKeyword = {
  name: KeywordName.SPECTRUM,
  id: '5259fc38-4530-4408-b509-43ebf98edf36',
  description: `Some cards have abilities like "Spectrum: Draw a card." You can use a card's Spectrum abilities only if you have at least 3 classes of Hero.
Grey S.H.I.E.L.D. Heroes, HYDRA Allies, New Recruits and Sidekicks don't have classes, so they don't help.
You can count all the classes you have among cards you played this turn and cards in your hand.`,
};

export const PATROL: IKeyword = {
  name: KeywordName.PATROL,
  id: '45e93a51-2235-400f-9d6f-944d5a3b37d4',
  description: `Some cards have abilities like "Patrol the Sewers: If it's empty, rescue a Bystander." When you play that card, you can use that ability only if that city space has no cards in it.
If that city space becomes empty later in the turn, it's too late to use the Patrol ability.
This can also say "Fight: Patrol the Bank: If it's empty, you get +2 Recruit. If it's not, you get +2 Attack."
Other cards let you patrol even stranger places, like the Escape Pile or a Victory Pile. Similarly, you can use those Patrol abilities if that place has no cards in it.
If a Mastermind or Scheme causes a city space not to exist, you can't patrol that space.`,
};

export const CIRCLE_OF_KUNG_FU: IKeyword = {
  name: KeywordName.CIRCLE_OF_KUNG_FU,
  id: '8836f188-09fc-40d2-b2cd-06c4c012848b',
  description: `"5th Circle of Kung-Fu" means "During your turn, this Villain has +5 Attack unless you reveal a Hero that costs 5 or more."
Likewise, the 7th Circle gets +7 Attack unless you reveal a Hero that costs 7 or more, etc.
If a Villain or Mastermind already has a Circle of Kung-Fu, and a Scheme gives them another one, only count the highest circle - don't add them up.`,
};

export const FATEFUL_RESURRECTION: IKeyword = {
  name: KeywordName.FATEFUL_RESURRECTION,
  id: '4adc551f-8337-4c3a-8d98-9e45c16d9b30',
  description: `On a Villain card, "Fight: Fateful Resurrection" means "Fight: Reveal the top card of the Villain Deck. If it's a Scheme Twist or Master Strike, this Villain reenters the city."
If a Villain resurrects this way, you still rescue its Bystanders and do its other Fight effects.
The Villain pushes into the Sewers and does any Ambush abilities as normal.
If a Mastermind Tactic resurrects this way, shuffle it back into the other face down Tactics.
If a Villain that has ascended to become a Mastermind resurrects this way, it stays a Mastermind and does not reenter the city.`,
};

export const CHARGE: IKeyword = {
  name: KeywordName.CHARGE,
  id: '98498e20-6b61-4bcc-8d3c-acccbea9a435',
  description: `"Ambush: Charge one space" means "(After this Villain enters the Sewers,) it charges forward an extra space, pushing other Villains forward."`,
};
