import { DEMOLISH, DODGE, ELUSIVE, X_TREME_ATTACK } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Demolish: IKeyword = {
  ...DEMOLISH,
  description: `"Demolish each player" means "Reveal the top card of the Ally (Hero) Deck, note its cost, and put it on the bottom of the Ally Deck. Each player reveals their hand and discards a card with that cost."`,
};

export const Dodge: IKeyword = {
  ...DODGE,
  description: `"Dodge" means "During your turn, you may discard this card from your hand to draw another card." Many Dodge cards have conditional effects so that sometimes you want to play them, and sometimes you want to Dodge them away. Dodge also helps you sculpt your hand towards Recruit Points or Attack as you desire.
<ul>
<li>When you Dodge a card from your hand, ignore all the other text on that card.</li>
<li>When you Dodge a card from your hand, you didn't "play" that card, so the Dodged card's Ally (Hero) Class/color doesn't help you use the Superpower abilities of other cards you play that turn.</li>
<li>Some Allies in the Villains set count the number of cards you discarded this turn. This includes cards you discarded with Dodge.</li>
</ul>`,
};

export const Elusive: IKeyword = {
  ...ELUSIVE,
  description: `"Elusive 6" means "You can only fight this Adversary if you have made at least 6 Recruit this turn." You don't have to spend that Recruit to fight this Adversary, you just have to have made that much Recruit this turn. You can still spend that Recruit on recruiting Allies (Heroes).`,
};

export const XTremeAttack: IKeyword = {
  ...X_TREME_ATTACK,
  description: `"X-Treme" means "This Adversary gets +1 Attack for each other Adversary in the city with X-Treme Attack."`,
};
