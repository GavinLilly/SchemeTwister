import { HeroClass, IKeyword } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

// TODO fill in descriptions
export const CYBER_MODS_FOR_HEROES: IKeyword = {
  name: `${KeywordName.CYBER_MOD}s for Heroes`,
  id: '8b4e5dc3-e57c-48a8-8d5a-0442540d6c55',
  description: `In 2099, weak organic flesh is quickly becoming obsolete. Desperate Heroes work with underground hacker-docs to augment their bodies with cybernetic enhancements, unleashing raw power. This is represented by the new Cyber-Mod keyword. Some Heroes say things like "${HeroClass.TECH}: Draw a card."
<ul>
<li>You may use a Cyber-Mod ability only if you have a card of the listed Hero Class in your Victory Pile.</li>
<li>Likewise, you can use "Cyber-Mod ${HeroClass.RANGED}${HeroClass.RANGED}${HeroClass.RANGED}: You get +2 Attack" only if you have at least 3 ${HeroClass.RANGED} cards in your Victory Pile.</li>
<li>The Heroes that use Cyber-Mods have ways to send cards Undercover. This can help you put the right cards into your Victory Pile to activate your Cyber-Mods.</li>
<li>The cyber-tech that infused Hulk 2099 with gamma rays lets him push his pain under the surface, channeling it into ever more strength and rage. Accordingly, Hulk 2099 can send Wounds Undercover and use "Cyber-Mod Wound" abilities in the same way.</li>
</ul>`,
};

export const CYBER_MODS_FOR_ENEMIES: IKeyword = {
  name: `${KeywordName.CYBER_MOD}s for Enemies`,
  id: '910f9884-45f6-415b-a8c9-9d10f13b819c',
  description: `The corporations, bounty hunters, and enforcers of 2099 also enhance their abilities with deadly cybernetic tech, often scavenged from captured victims. Some enemies say things like "Cyber-Mod ${HeroClass.COVERT}${HeroClass.COVERT}${HeroClass.COVERT}: This gets +3 Attack.
<ul>
<li>Villains and Masterminds use their Cyber-Mod abilities only while there are cards of the listed Hero Classes in the Escape Pile.</li>
<li>Likewise, if a Villain says "Fight — Cyber-Mod ${HeroClass.TECH}: KO one of your Heroes", use that ability only if there is a ${HeroClass.TECH} card in the Escape Pile.</li>
<li>If a Villain escapes the city with a captured Hero, that Hero card stays in the Escape Pile and can help activate all enemies' Cyber-Mods.</li>
<li>Cyber-Mod Enemies also have ways to put Hero cards directly into the Escape Pile, helping activate Cyber-Mods.</li>
</ul>`,
};

export const FATED_FUTURE: IKeyword = {
  name: KeywordName.FATED_FUTURE,
  id: '0e3b716d-67c0-48d8-892e-ea75a9fe97b6',
  description: `Marvel 2099 shows a chilling vision of what could come to pass if the characters of the Marvel Universe don't change Earth's fate. Sometimes fate can seem inevitable… until someone finds the courage to turn the future in a new direction. This is represented by the new Fated Future keyword.
<ul>
<li>When you play a card with Fated Future, you may put it on the bottom of your deck.</li>
<li>This helps you draw the card again more quickly than if you discarded it, waited for your discard pile to shuffle into a new deck, then waited to draw the card.</li>
<li>You can "predict the future" of when you’ll see it again.</li>
<li>You can also increase the chance that you will draw multiple Fated Future cards in the same powerful hand once you get to the bottom of your deck.</li>
</ul>`,
};
