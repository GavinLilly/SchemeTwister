import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums/keywordName.enum';

export const DEMOLISH: IKeyword = {
  name: KeywordName.DEMOLISH,
  id: '937baa84-71ce-4167-9702-c1017d6cba13',
  description: `"Demolish each player" means "Reveal the top card of the Ally (Hero) Deck, note its cost, and put it on the bottom of the Ally Deck. Each player reveals their hand and discards a card with that cost."`,
};

export const DODGE: IKeyword = {
  name: KeywordName.DODGE,
  id: '2a4a43da-20c0-4032-9802-819f3b78dff8',
  description: `"Dodge" means "During your turn, you may discard this card from your hand to draw another card." Many Dodge cards have conditional effects so that sometimes you want to play them, and sometimes you want to Dodge them away. Dodge also helps you sculpt your hand towards Recruit Points or Attack as you desire.
<ul>
<li>When you Dodge a card from your hand, ignore all the other text on that card.</li>
<li>When you Dodge a card from your hand, you didn't "play" that card, so the Dodged card's Ally (Hero) Class/color doesn't help you use the Superpower abilities of other cards you play that turn.</li>
<li>Some Allies in the Villains set count the number of cards you discarded this turn. This includes cards you discarded with Dodge.</li>
</ul>`,
};

export const ELUSIVE: IKeyword = {
  name: KeywordName.ELUSIVE,
  id: '1169318b-8285-405c-86b6-9f9baa90ad87',
  description: `"Elusive 6" means "You can only fight this Adversary if you have made at least 6 Recruit this turn." You don't have to spend that Recruit to fight this Adversary, you just have to have made that much Recruit this turn. You can still spend that Recruit on recruiting Allies (Heroes).`,
};

export const X_TREME_ATTACK: IKeyword = {
  name: KeywordName.X_TREME_ATTACK,
  id: '7a113c93-b762-478a-887b-ba421c491a42',
  description: `"X-Treme" means "This Adversary gets +1 Attack for each other Adversary in the city with X-Treme Attack."`,
};
