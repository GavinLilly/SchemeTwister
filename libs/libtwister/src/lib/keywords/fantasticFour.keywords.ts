import { HeroClass } from '../enums';
import {
  BURROW,
  COSMIC_THREAT,
  FOCUS,
  GALACTUS_COSMIC_THREAT,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Focus: IKeyword = {
  ...FOCUS,
  description: `The new "Focus" keyword lets you transform your Recruit Points into powerful, flexible effects. It looks like this:
"Focus Recruit -> [EFFECT]"
When you play a card with a Focus ability, you can pay the cost on the left side of the arrow to get the effect on right side of the arrow. You can use that Focus ability as many times as you want for the rest of the turn. For example, say you play a card that says:
"Focus 2 Recruit -> Draw a card."
For the rest of your turn, you can use 2 Recruit Points to draw a card, as many times as you want, as long as you have the Recruit points avaiable. You can even play more Heroes, recruit, fight, then use the Focus ability more.
<ul><li>Note: You can use Focus abilities and still use the "Healing" ability on Wounds.</li></ul>`,
};

export const Burrow: IKeyword = {
  ...BURROW,
  description: `Subterranea Villains use the new Burrow keyword. This allows them to retreat by digging to safety when they are attacked. "Burrow" means:
"Fight: If the Streets were empty, put this Villain back into the Streets."
When you fight a Villain with Burrow, do all of that Villain's Fight effects. You rescue any Bystanders the Villain may have captured as normal. Then, if the "Streets" city space was empty, put that Villain back into the Streets space. This means that to stop a Villain with Burrow permanently, you have to:
<ul>
<li>Fight it while it's in the Streets, or</li>
<li>Fight it while another Villain occupies the Streets, or</li>
<li>Fight it once to drive it back to the Streets then fight it again in the Streets to finish it.</li>
</ul>
If you fight a Villain with Burrow twice in a turn, you'll do that Villain's "Fight" effects twice. Cards that do something "when you defeat" a Villain still work if the Villain burrows to the Streets. When a Villain burrows to the Streets, it does not do any Ambush effects`,
};

export const CosmicThreat: IKeyword = {
  ...COSMIC_THREAT,
  description: `Galactus and his Heralds use the new Cosmic Threat keyword. This gives them incredibly high Attack values with a special vulnerability. If an enemy has Cosmic Threat: ${HeroClass.RANGED} that means: "Once per turn, for each ${HeroClass.RANGED} card you reveal, this Enemy gets -3 Attack this turn."
For example, Morg has Cosmic Threat: ${HeroClass.INSTINCT} and 12* Attack.
<ul>
<li>If you reveal two ${HeroClass.INSTINCT} cards, Morg gets -6 Attack this turn, so he has 6 Attack left.</li>
<li>If you reveal four or more ${HeroClass.INSTINCT} cards, Morg gets -12 Attack this turn, so he has 0 Attack, and you can fight him without spending any Attack.</li>
</ul>
(An asterisk next to an Enemy's Attack number is to remind you that their Attack can change. The asterisk doesn't mean anything else.)`,
};

export const GalactusCosmicThreat: IKeyword = {
  ...GALACTUS_COSMIC_THREAT,
  description: `Galactus has the "Cosmic Threat: ${HeroClass.STRENGTH} ${HeroClass.INSTINCT} ${HeroClass.COVERT} ${HeroClass.TECH} ${HeroClass.RANGED} ability. This means:
"Once per turn, choose ${HeroClass.STRENGTH}, ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH} or ${HeroClass.RANGED}. For each card of that color you reveal, this Enemy gets -3 Attack for one fight this turn."
If you try to fight Galactus a second time in the same turn, he will return to his full Attack and you cannot use his Cosmic Threat ability a second time that turn.`,
};
