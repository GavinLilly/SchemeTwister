import {
  DIVIDED,
  FORTIFY,
  PHASING,
  SHIELD_CLEARANCE,
  SIZE_CHANGING,
} from './baseKeywords';
import { HeroClass } from '../enums';
import { IKeyword } from './keyword.interface';

export const Divided: IKeyword = {
  ...DIVIDED,
  description: `Matching the theme of division and duality, Civil War introduces "Divided Cards," which have two miniature cards printed on the same card.
<ul>
<li>You recruit a Divided Card from the HQ as normal by paying its cost. Each side of a Divided Card shows the same cost. (If it costs "3" on each side, you pay only 3 Recruit, not 6.)</li>
<li>When you play a Divided Card, you choose which side to play. You generate all the Recruit, Attack, and special abilities of that side as normal. You ignore the other side, as if it doesn't exist.</li>
<li>Each side of a Divided Card has a different Hero Class, like ${HeroClass.STRENGTH} or ${HeroClass.RANGED}. You can play the ${HeroClass.STRENGTH} side to get ready to use a Superpower Ability that triggers on ${HeroClass.STRENGTH} cards later in your turn.</li>
<li>Different sides of Divided Cards often let you choose between Recruit, Attack, drawing cards, and other effects. Choose carefully which side to play!</li>
<li>While a Divided Card is in your hand or the HQ, it counts as all its Hero Classes, Teams and Hero Names. But once you play it, the card only counts as the side you chose.</li>
<li>When sorting and setting up, always use the Hero Name on the left side of a Divided Card.</li>
<li>A Divided Card is one card, not two. So if you have to "discard two cards," "draw two cards," or count the number of cards in your hand, a Divided Card only counts as one card.</li>
</ul>`,
};

export const SizeChanging: IKeyword = {
  ...SIZE_CHANGING,
  description: `This keyword represents Heroes and Villains using superpowers to massively change their size.
<ul>
<li>Some Hero cards say, "Size-Changing: ${HeroClass.COVERT}." This means "You can recruit this card for 2 Recruit less if you played a ${HeroClass.COVERT} card this turn."</li>
<li>Likewise, some Villain cards say, "Size-Changing: ${HeroClass.TECH}." This means "You can fight this Villain for 2 Attack less if you played a ${HeroClass.TECH} card this turn."</li>
<li>Some Divided Cards say "Size-Changing: ${HeroClass.TECH}" on one side and "Size-Changing: ${HeroClass.STRENGTH}" on the other side. You can recruit either side of the card with its own Size-Changing discount, but you can't get both discounts at once.</li>
</ul>`,
};

export const Phasing: IKeyword = {
  ...PHASING,
  description: `This keyword represents Heroes becoming insubstantial and moving through solid objects.
<ul>
<li>During your turn, if a card with Phasing is in your hand, you may swap it with the top card of your deck.</li>
<li>This lets you get a different card instead, save a crucial Phasing card for the next turn, or set up a combo that cares about the top card of your deck.</li>
<li>Swapping cards this way isn't "playing a card" or "drawing a card," so it doesn't count for other abilities that trigger on those things.</li>
</ul>`,
};

export const Fortify: IKeyword = {
  ...FORTIFY,
  description: `This keyword represents Villains setting up nasty traps for the players.
<ul>
<li>Some Villains say things like "Escape: Fortify the Mastermind. While it's fortified, the Mastermind can't be fought."</li>
<li>Put this Villain on or near the specified place. While it's there, it has the listed effect. Any player can fight that Villain as normal to end that Fortify effect and put that Villain into their Victory Pile.</li>
<li>If a card would fortify a place, don't do anything if there's already a Villain fortifying that place.</li>
</ul>`,
};

export const ShieldClearance: IKeyword = {
  ...SHIELD_CLEARANCE,
  description: `This keyword represents pro-registration S.H.I.E.L.D. forces that can be only defeated with the help of S.H.I.E.L.D. information.
<ul>
<li>If a Villain says "S.H.I.E.L.D. Clearance," then you must discard a S.H.I.E.L.D. Hero as an additional cost to fight that Villain.</li>
<li>Likewise, if a Mastermind has "Double S.H.I.E.L.D. Clearance," then you must discard two S.H.I.E.L.D. Heroes each time you fight them.</li>
<li>If you are playing with HYDRA Heroes, you may discard them instead of S.H.I.E.L.D. Heroes.</li>
</ul>`,
};
