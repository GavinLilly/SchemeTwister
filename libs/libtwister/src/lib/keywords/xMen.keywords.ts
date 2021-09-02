import { HeroClass } from '../enums';

import {
  BERSERK,
  DOMINATE,
  HUMAN_SHIELDS,
  LIGHTSHOW,
  PIERCING_ENERGY,
  SOARING_FLIGHT,
  TOKEN_CARDS,
  TRAPS,
  X_GENE,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const XGene: IKeyword = {
  ...X_GENE,
  description: `This keyword represents X-Men combining unique mutant powers with their signature teamwork.
<ul>
<li>Some Heroes say things like "X-Gene ${HeroClass.RANGED}: You get +2 Attack." This means "If you have a ${HeroClass.RANGED} card in your discard pile, you get +2 Attack." You can use a card's X-Gene ability only if you have the specified kind of card in your discard pile.</li>
<li>You can only use a card's X-Gene ability once, no matter how many matching cards you have in your discard pile.</li>
<li>Remember: when you play a card during your turn, it stays in front of you until the end of turn. Then all the cards you played that turn go to the discard pile. So if you have an empty discard pile, you can't play a ${HeroClass.TECH} card from your hand, then immediately play a card with "X-Gene ${HeroClass.TECH}" and use that X-Gene ability.</li>
<li>One cool combo is to recruit a ${HeroClass.STRENGTH} Hero into your discard pile, then play your "X-Gene ${HeroClass.STRENGTH}" card, and you'll get to use its X-Gene ability.</li>
</ul>`,
};

export const PiercingEnergy: IKeyword = {
  ...PIERCING_ENERGY,
  description: `This keyword represents X-Men using psychic knives & sonic screams to pierce enemy defenses.
<ul>
<li>Some Heroes give you a new kind of points called "Piercing Energy," using the Piercing icon. You can fight a Villain or Mastermind by spending Piercing points equal to that enemy's printed Victory Points value (VP). You ignore that enemy's Attack and any Attack modifiers.</li>
<li>You can also ignore any special conditions for fighting that enemy, automatically rescuing any Human Shields.</li>
<li>You can't use Piercing Energy against cards that have no printed VP value, like Shadow-X Villains, or Master Strikes that become Villains.</li>
</ul>`,
};

export const Berserk: IKeyword = {
  ...BERSERK,
  description: `This keyword represents some X-Men going into a berserker rage of unpredictable violence.
<ul>
<li>"Berserk" means "Discard the top card of your deck. You get +Attack equal to the discarded card's printed Attack." (So if the discarded card gives "2+ Attack", you just count 2.)</li>
<li>Some cards say "Berserk, Berserk, Berserk" so you discard three cards in a row.</li>
<li>Some cards say things like "Berserk. X-Gene ${HeroClass.TECH}: You get +1 Attack." You do the card abilities in order, so Berserk might discard a ${HeroClass.TECH} card from your deck, letting you use your X-Gene ability.</li>
<li>Berserk gives no benefit from discarding printed Recruit or Piercing values.</li>
</ul>`,
};

export const SoaringFlight: IKeyword = {
  ...SOARING_FLIGHT,
  description: `This ability represents X-Men flying into action as rapid reinforcements.
<ul><li>"Soaring Flight" means "When you recruit this Hero, set it aside. At the end of this turn, add it to your new hand as an extra card."</li></ul>`,
};

export const Lightshow: IKeyword = {
  ...LIGHTSHOW,
  description: `This keyword represents X-Men using fireworks and blinding bursts in spectacular combinations.
<ul>
<li>Some Heroes say things like "Lightshow: You get +3 Attack." Once per turn, if you played at least two Lightshow cards this turn, you can use a single Lightshow ability from any of those cards.</li>
<li>If you play three, four, or more Lightshow cards you still use only a single Lightshow ability.</li>
</ul>`,
};

export const Dominate: IKeyword = {
  ...DOMINATE,
  description: `This keyword represents Villains using telepathy, sorcery, or illusions to twist Heroes' minds to evil.
<ul>
<li>Some Villains and Masterminds say they "Dominate" Hero cards from various places. This means "Put those Heroes under this enemy. This enemy gets +1 Attack for each Hero it's Dominating."</li>
<li>When you fight that enemy, put one of those Dominated Heroes into each player's discard pile. You choose which player gets which Hero, including yourself. There might not be enough for every player to get one. KO any excess Dominated Heroes.</li>
<li>If a Villain escapes, any Heroes Dominated by that Villain go to the Escape Pile too.</li>
</ul>`,
};

export const HumanShields: IKeyword = {
  ...HUMAN_SHIELDS,
  description: `This keyword represents enemies hiding behind innocent people to prevent Heroes' attacks.
<ul>
<li>"Ambush: This Villain captures 2 Human Shields" means the Villain captures the top 2 cards of the Bystander Stack face-down. You can't fight a Villain while it has any Human Shields. During your turn, any number of times, you can pay Attack equal to that Villain's Attack value to rescue one of its Human Shields at random and put it in your Victory Pile. (The * on their Attack is a reminder.)</li>
<li>A Villain can have face up Bystanders and face-down Human Shields at the same time. You'll need to pay to rescue the face-down Human Shields. Then you can fight the Villain, which will rescue the face-up Bystanders automatically.</li>
<li>Human Shields still count as Bystanders. Villains escaping with Human Shields still make players discard as normal.</li>
</ul>`,
};

export const Traps: IKeyword = {
  ...TRAPS,
  description: `The Legendary® X-Men set adds a completely new card type to Legendary®: Traps. Every Villain Group in the set contains at least one Trap.
<ul>
<li>When a Trap is played from the Villain Deck, it gives you a challenge to complete this turn to avoid the Trap. If you complete the challenge, put the Trap in your Victory Pile and get its VP. A Trap is not a Villain and doesn't enter the city.</li>
<li>If you fail to complete the challenge, then at the end of the turn you must KO the trap and suffer the listed consequences! (Do this after you draw a new hand).</li>
</ul>`,
};

export const TokenCards: IKeyword = {
  ...TOKEN_CARDS,
  description: `Sometimes game play will cause additional Villains or Masterminds to be added during play. For example, a Master Strike may cause a special Villain to enter the city. Token cards represent these special characters that would otherwise be represented by the card that drew them out. Tokens are all identified by a Token icon in the upper right of the card. These new cards are optional so have fun with them!`,
};
