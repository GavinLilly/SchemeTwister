import { THROWN_ARTIFACT, URU_ENCHANTED_WEAPONS } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const ThrownArtifact: IKeyword = {
  ...THROWN_ARTIFACT,
  description: `Some Ally cards in this set are "Thrown Artifacts". These are Artifact cards that the player can "throw" at the perfect moment.
<ul>
<li>To "throw" a Thrown Artifact, put it on the bottom of your deck and use its ability.</li>
<li>You can throw as many Artifacts as you want in a turn. You can only throw during your turn.</li>
<li>If a card effect like Rogue, Chameleon, or Star-Lord would let you "copy" a Thrown Artifact card, use that Artifact's "When you throw this" ability once, and there is no other effect. (Don't put anything on the bottom of your deck.)</li>
</ul>`,
};

export const UruEnchantedWeapons: IKeyword = {
  ...URU_ENCHANTED_WEAPONS,
  description: `When you try to fight an enemy that has some number of Uru-Enchanted Weapons, reveal that many cards from the top of the Adversary Deck. That enemy immediately gains +Attack equal to the total Victory Points of all the cards you revealed. If you have enough Attack points to match the enemy's improved Attack, use them and defeat the enemy as normal. If you don't have enough Attack points, you don't defeat this enemy, you lose all your Attack points, and you can't fight anymore this turn.
<ul>
<li>Whether you defeat that enemy or not, put all the cards you revealed from the Adversary Deck on the bottom of that deck in random order.</li>
<li>Many of these enemies have a "Fight or Fail:" effect. Do this effect if you defeat them or if the Uru-Enchanted Weapons cause you to fail to defeat them.</li>
<li>You can't try to fight an enemy unless you have enough Attack points to match its printed Attack.</li>
<li>Once you start to fight an enemy, you can't play any more cards or throw any Artifacts until after that fight is complete. So remember to generate all the Attack points you can before you attack an enemy with Uru-Enchanted Weapons!</li>
<li>The * symbol next to these Enemies' Attack indicates that they might get more Attack.</li>
<li>Flipping cards for Uru-Enchanted Weapons cannot end the game. If you run out of cards in the Adversary Deck, shuffle the cards you've revealed so far and keep revealing. (If there are no cards left in the Adversary Deck there is no Attack bonus.)</li>
<li>With 2-5 players, each flip tends to be worth about 1.5 attack. In solo mode: about 1 attack.</li>
</ul>`,
};
