import { IKeyword } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const MOONLIGHT_AND_SUNLIGHT: IKeyword = {
  name: KeywordName.MOONLIGHT_AND_SUNLIGHT,
  id: 'f6e0d75c-8f51-4661-9595-d542db379e83',
  description: `As a werewolf, Wolfsbane gets extra powerful at night or under a full moon. By contrast, Sunspot absorbs solar energy to fuel his powers, gaining strength from the force of full sunlight. To fight at their best, they must carefully consider when to engage the enemy, by moonlight or sunlight. This is represented by this new matched pair of keywords.
<ul>
  <li>Some Hero cards say things like "Moonlight: You get +2 Attack." Others say things like "Sunlight: Draw a card."</li>
  <li>Moonlight abilities work only when most of the Heroes in the HQ have odd-numbered costs. Likewise, Sunlight abilites work only when most of the Heroes in the HQ have even-numbered costs.</li>
  <li>Bedsides Heroes, some Villains and Masterminds also say get extra Attack or abilities during Moonlight or Sunlight.</li>
  <li>If there are a tied number of odd and even-numbered Heroes in the HQ (because some HQ soaces have been added or destroyed), then niether Moonlight nor Sunlight is in effect.</li>
  <li>Only the printed costs matter. Abilities that change the costs of Heroes in the HQ won't affect Moonlight or Sunlight.</li>
  <li>"Divided Cards" from Civil War and other sets count as just one card for Moonlight/Sunlight.</li>
</ul>

<b>Moonlight and SUnlight Timing</b>
As always, do a cards abilities in the order they are listed. You check Moonlight or Sunlight at the moment when you would use that ability.
<ul>
  <li>For example. Sunspot has a card that says "Moonlight: You may put a Hero form the HQ on the bottom of the Hero Deck. Sunlight: Draw a card." Sunspot's cards primarily benefit from Sunlight, so the Moonlight ability here mostly helps him push the HQ towards Sunlight.</li>
  <li>You do these abilities in the order they are listed. So if there are three off-numbered cards in the HQ, and you play this card, you might be able to use the Moonlight ability to change the HQ to have only two odd-numbered cards, and then you could immediately use the Sunlight ability.</li>
  <li>Once you are completely done playing a Hero card or fighting a Villain with a Moonlight or Sunlight ability, move on. If later in the turn you change Moonlight or Sunlight, you don't go back in time to change the past.</li>
</ul>`,
};

export const WAKING_NIGHTMARE: IKeyword = {
  name: KeywordName.WAKING_NIGHTMARE,
  id: '617896b1-5a93-427c-b47a-fa6d0bd1c9ee',
  description: `The New Mutants often confront demons, monsters, sadists, trauma, and psychological horror. This keyword represents these attacks on their sanity. It's also used to represent how the Hero Mirage uses her powers to bring dream and nightmare constructs to life.
<ul>
  <li>Some cards tell you to "have a Waking Nightmare." This means "Discard a non-grey Hero from your hand. If you discard a Hero this way, draw a card."</li>
  <li>Getting pummeled by Waking Nightmares can downgrade your hand from powerful superheroes to mere S.H.I.E.L.D. Agents. However, you can sometimes find new courage in a nightmare you may be able to discard a non-grey Hero you don't need very much and have a chance to draw something more helpful.</li>
  <li>Some Mirage Hero Cards also let you have a Waking Nightmare and give you specific benefits for it.</li>
</ul>`,
};
