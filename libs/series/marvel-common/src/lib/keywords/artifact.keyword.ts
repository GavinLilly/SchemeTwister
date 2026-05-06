import { IKeyword, HeroClass } from '@schemetwister/libtwister';

export const ARTIFACT: IKeyword = {
  name: 'Artifact',
  id: '274600dc-3310-4dbd-b741-aa7556de51fe',
  description: `This set also contains powerful new "Artifacts" cards that players can use for permanent advantages. Some Hero cards are also Artifacts. (They still count as Hero cards too.) When you gain a Hero Artifact, put it in your discard pile like any other Hero card. When you draw that Artifact later in the game, you may play it in front of you and use its effects, usually once on each of your turns. This means you "control" that Artifact. At the end of your turn, when you discard all the cards you played that turn, the Artifacts you control stay in.
<ul>
<li>You can use an Artifact on the first turn you play it.</li>
<li>You can control multiple Artifacts with the same card name and use each of them.</li>
<li>You can't use your Artifacts' "once per turn" abilities during other players' turns.</li>
<li>If a card effect during any player's turn asks you to "Reveal a ${HeroClass.RANGED} Hero," you may reveal a ${HeroClass.RANGED} Hero Artifact you control. Card effects that say "your Heroes" or "Heroes you have" include Hero Artifacts you control as well.</li>
<li>However, you only "played" an Artifact on the turn you put it out, so it only activates Superpower Abilities (like "${HeroClass.STRENGTH}: You get +1 Attacks") on the turn you play the Artifact, not every turn of the game. Likewise, card effects that count "each ${HeroClass.TECH} Hero you played this turn" only count an Artifact if you played it this turn.</li>
<li>You don't have to use an Artifact's abilities on a turn if you don't want to.</li>
<li>If you are using Final Showdown, you can use Artifacts during your Showdown Turn.</li>
<li>If a card effect like Rogue, Chameleon, or Star-Lord would let you "copy" an Artifact card, then you can use that Artifact's "Once per turn" ability once, and there is no other effect.</li>
</ul>`,
};
