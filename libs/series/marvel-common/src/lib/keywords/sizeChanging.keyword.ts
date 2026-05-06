import { HeroClass, IKeyword } from '@schemetwister/libtwister';

export const SIZE_CHANGING: IKeyword = {
  name: 'Size Changing',
  id: '4093139f-8471-486b-95f3-48a125b9607b',
  description: `This keyword represents Heroes and Villains using superpowers to shrink, grow, or massively change their size. It's also used by characters that can change the size of a weapon, technology, or energy. It first debuted in Legendary Civil War and also appeared in Legendary Champions.
<ul>
<li>Some Hero cards say things like "Size-Changing ${HeroClass.COVERT}." This means "You can recruit this card for 2 Recruit less if you played any ${HeroClass.COVERT} cards this turn."</li>
<li>Likewise, some Villain cards say things like "Size-Changing ${HeroClass.TECH}." This means "You can fight this Villain for 2 Attack less if you played any ${HeroClass.TECH} cards this turn."</li>
<li>Note: For a typical Size-Changing card, it doesn't matter how many Heroes of that Hero Class you played - it only matters if you played any Heroes of that Hero Class or not.</li>
<li>After you've recruited a card, Size-Changing doesn't do anything else on that card.</li>
</ul>`,
};
