import { IKeyword, HeroClass } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const SIZE_CHANGING: IKeyword = {
  name: KeywordName.SIZE_CHANGING,
  id: 'f1a4cee8-b640-4fc0-878a-46d45b97a3b3',
  description: `This keyword represents Heroes and Villains using superpowers to massively change their size.
<ul>
<li>Some Hero cards say, "Size-Changing: ${HeroClass.COVERT}." This means "You can recruit this card for 2 Recruit less if you played a ${HeroClass.COVERT} card this turn."</li>
<li>Likewise, some Villain cards say, "Size-Changing: ${HeroClass.TECH}." This means "You can fight this Villain for 2 Attack less if you played a ${HeroClass.TECH} card this turn."</li>
<li>Some Divided Cards say "Size-Changing: ${HeroClass.TECH}" on one side and "Size-Changing: ${HeroClass.STRENGTH}" on the other side. You can recruit either side of the card with its own Size-Changing discount, but you can't get both discounts at once.</li>
</ul>`,
};

export const PHASING: IKeyword = {
  name: KeywordName.PHASING,
  id: 'e357661a-e1c7-446c-8473-4c856e4b475e',
  description: `This keyword represents Heroes becoming insubstantial and moving through solid objects.
<ul>
<li>During your turn, if a card with Phasing is in your hand, you may swap it with the top card of your deck.</li>
<li>This lets you get a different card instead, save a crucial Phasing card for the next turn, or set up a combo that cares about the top card of your deck.</li>
<li>Swapping cards this way isn't "playing a card" or "drawing a card," so it doesn't count for other abilities that trigger on those things.</li>
</ul>`,
};

export const FORTIFY: IKeyword = {
  name: KeywordName.FORTIFY,
  id: 'a6463dc0-3551-4e0e-928a-47efa73910e9',
  description: `This keyword represents Villains setting up nasty traps for the players.
<ul>
<li>Some Villains say things like "Escape: Fortify the Mastermind. While it's fortified, the Mastermind can't be fought."</li>
<li>Put this Villain on or near the specified place. While it's there, it has the listed effect. Any player can fight that Villain as normal to end that Fortify effect and put that Villain into their Victory Pile.</li>
<li>If a card would fortify a place, don't do anything if there's already a Villain fortifying that place.</li>
</ul>`,
};

export const SHIELD_CLEARANCE: IKeyword = {
  name: KeywordName.SHIELD_CLEARANCE,
  id: 'f94ed911-9dda-4b27-8a42-c511c0df3146',
  description: `This keyword represents pro-registration S.H.I.E.L.D. forces that can be only defeated with the help of S.H.I.E.L.D. information.
<ul>
<li>If a Villain says "S.H.I.E.L.D. Clearance," then you must discard a S.H.I.E.L.D. Hero as an additional cost to fight that Villain.</li>
<li>Likewise, if a Mastermind has "Double S.H.I.E.L.D. Clearance," then you must discard two S.H.I.E.L.D. Heroes each time you fight them.</li>
<li>If you are playing with HYDRA Heroes, you may discard them instead of S.H.I.E.L.D. Heroes.</li>
</ul>`,
};
