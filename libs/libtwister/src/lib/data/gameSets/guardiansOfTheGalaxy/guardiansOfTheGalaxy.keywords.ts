import { IKeyword } from '../../../model';
import { HeroClass, KeywordName } from '../../enums';

export const SHARDS: IKeyword = {
  name: KeywordName.SHARDS,
  id: 'e4359ef4-6d89-457f-8e5a-1f38e2401fdf',
  description: `This set contains 18 "Shard" tokens. These tokens can be gained by players, Villains and Masterminds from the supply.
<ul>
<li>Players: When you gain a Shard, put it in front of you. You can spend a Shard to get +1 Attack (returning the Shard to the supply). If you don't use a Shard immediately, you can keep it for future turns and use it later. You can spend as many as you wish in a single turn. Shards do not have Victory Points.</li>
<li>Villains: When a Villain gains Shards, put them on that Villain from the supply. That Villain gets +1 Attack for each Shard it has. After you defeat a Villain, you take one of its Shards. Return the rest to the supply. When a Villain escapes, the Mastermind gains one of the Shards on that Villain. Return the rest to the supply.</li>
<li>Mastermind: When a Mastermind gains Shards, put them on that Mastermind from the supply. That Mastermind gets +1 Attack for each Shard it has. After you fight a Mastermind, you take one of its Shards. Return the rest to the supply. Then do the Fight effect on the Mastermind Tactic, which might give the Mastermind additional Shards for future fights.</li>
</ul>`,
};

export const ARTIFACT: IKeyword = {
  name: KeywordName.ARTIFACT,
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
