import { HeroClass, IKeyword } from '@schemetwister/libtwister';

export const EMPOWERED: IKeyword = {
  name: 'Empowered',
  id: '161fd453-f474-41a6-bc07-c235ce145e0b',
  description: `This keyword represents Heroes and Villains who draw power from ambient energy, technology, or superpowers around them.
<ul>
<li>Some Heroes say things like "You get Empowered by ${HeroClass.STRENGTH}." This means "You get +1 Attack for each ${HeroClass.STRENGTH} card in the HQ."</li>
<li>Likewise, some Villains and Masterminds say things like "Empowered by ${HeroClass.TECH}". This means "This gets +1 Attack for each ${HeroClass.TECH} card in the HQ."</li>
<li>As cards enter and leave the HQ, an Empowered card can get stronger or weaker. You only check the Attack bonus at the moment you play your Empowered Hero or at the moment you fight the Empowered enemy.</li>
<li>One clever move is to recruit a Hero from the HQ at the right time, changing the colors in the HQ to weaken an Empowered enemy or try to strengthen an Empowered Hero in your hand.</li>
<li>Some cards are even "Double Empowered" or "Triple Empowered" meaning that they get +2 Attack or +3 Attack for each appropriate card in the HQ.</li>
<li>(A multicolored or divided card from other sets counts if either half is the correct color. For example, an "Empowered by ${HeroClass.RANGED} and ${HeroClass.STRENGTH}" ability can get +1 Attack from a ${HeroClass.COVERT} ${HeroClass.RANGED} card or from a ${HeroClass.INSTINCT} ${HeroClass.STRENGTH} card. However, a "${HeroClass.RANGED} ${HeroClass.STRENGTH}" card in the HQ would only give +1 Attack, not +2 Attack.)</li>
</ul>`,
};
