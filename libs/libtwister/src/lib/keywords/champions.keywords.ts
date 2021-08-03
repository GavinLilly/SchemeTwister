import { CivilWar } from '.';
import { HeroClass } from '../enums';

import { CHEERING_CROWDS, SIZE_CHANGING } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const CheeringCrowds: IKeyword = {
  ...CHEERING_CROWDS,
  description: `This keyword represents the Champions being inspired to redouble their efforts by adoring fans.
<ul><li>Several Hero cards say "Cheering Crowds." This means "You may play this card twice in a row if you return a Bystander from your Victory Pile to the bottom of the Bystander Stack."</li></ul>

Example 1: Say you have a Hero that gives 1 Recruit and says "Draw a card. Cheering Crowds." As you play this Hero, you could return a Bystander to play the Hero twice in a row, getting 2 Recruit and drawing two cards.
<ul><li>Essentially you play the card itself, and then you play a bonus copy of that card.</li></ul>

Example 2: Say your first play of the turn was an ${HeroClass.INSTINCT} card that gives 2 Attack and says "${HeroClass.INSTINCT}: Draw a card. Cheering Crowds." You decide to return a Bystander to play this card twice in a row. The first play wouldn't get to use the "${HeroClass.INSTINCT}: Draw a card" ability, since you haven't played an ${HeroClass.INSTINCT} card earlier in the turn. However, the second play would get to use that Superpower ability, since you have now played an ${HeroClass.INSTINCT} card earlier in the turn. So you would end up getting 4 Attack and drawing one card.
<ul><li>If you had played a different ${HeroClass.INSTINCT} card before doubling the Cheering Crowds card, then you could would get to use the "${HeroClass.INSTINCT}: Draw a card" ability both times, getting 4 Attack and drawing two cards.</li></ul>

Example 3: Say your first play is using Cheering Crowds to play a ${HeroClass.TECH} card twice. Then, you play another card that says "${HeroClass.TECH}: You get +1 Attack for each other ${HeroClass.TECH} Hero you played this turn." That ability would count both plays of your Cheering Crowds card, giving you +2 Attack total.
<ul><li>When playing out a big turn, some people like to put the Bystander they're returning temporarily on the Cheering Crowds card to remind themselves they've played it twice.</li></ul>

If you use Cheering Crowds to play a Versatile card twice, you could get Recruit with one play and get Attack with the other play, or choose the same for both.`,
};

export const SizeChanging: IKeyword = {
  ...SIZE_CHANGING,
  description: `${CivilWar.SizeChanging.description}
---
<ul>
  <li>As a new Twist, some Heroes and Villains in this set say things like "Size-Changing ${HeroClass.STRENGTH}, ${HeroClass.COVERT}." If you played any ${HeroClass.STRENGTH} Heroes this turn, the cost is 2 less. If you played any ${HeroClass.COVERT} Heroes, the cost is 2 less. If you played both a ${HeroClass.STRENGTH} Hero and a ${HeroClass.COVERT} Hero this turn, then the cost is 4 less.</li>
  <li>Fin Fang Foom and one of his Monsters Unleashed even say "Size-Changing ${HeroClass.STRENGTH}, ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH}, ${HeroClass.RANGED}". You can pay 2 Attack less to fight them for each of these Hero Classes you played this turn.</li>
  <li>Note: For any Size-Changing card, it doesn't matter how many Heroes you played -- it only maters whether or not you played any Heroes of that Hero class.</li>
  <li>After you've recruited a card, Size-Changing doesn't do anything else on that card.</li>
  <li>If a Hero in the HQ already has "Size-Changing ${HeroClass.TECH}" and it gains "Size-Changing ${HeroClass.TECH}, ${HeroClass.RANGED}" from another special ability like the Sporr Villain, it just ends up with "Size-Changing ${HeroClass.TECH}, ${HeroClass.RANGED}." A card can't have Size-Changing for the same Hero Class twice.</li>
</ul>`,
};
