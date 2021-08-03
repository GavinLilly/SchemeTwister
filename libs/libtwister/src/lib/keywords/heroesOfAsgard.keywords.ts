import { VILLAINOUS_WEAPONS, WORTHY } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Worthy: IKeyword = {
  ...WORTHY,
  description: `Many Marvel stories involve Thor and others proving whether they are worth of wielding Asgard's mightiest weapons, like Mjolnir and Stormbreaker. This is represented by the new "Worthy" keyword. Some Hero cards say things like "If you are Worthy, draw a card."
<ul>
  <li>You are Worthy if you have a Hero that costs 5 or more.</li>
  <li>As usual, the phrases "your Heroes" and "Heroes you have" include both cards in your hand and cards you have played this turn. They also include Hero Artifacts you control. (Heroes in your deck and discard pile don't count.)</li>
  <li>Some Villains and Schemes also check if you are Worthy and reward or punish you accordingly.</li>
  <li>When you consider whether to recruit a card that asks you to be Worthy, you may find yourself hesitating, wondering whether you truly have enough to prove Worthy at the crucial moment. This is a great fit to how Thor and other Heroes question whether they will be Worthy at the crucial moment in Marvel stories.</li>
</ul>`,
};

export const VillainousWeapons: IKeyword = {
  ...VILLAINOUS_WEAPONS,
  description: `As a new Twist on the Artifacts of past sets, Legendary: Heroes of Asgard introduces an all-new card type: "Villainous Weapons." Villains and Masterminds can capture these ancient weapons to become even more powerful. But if you defeat them, you can seize those weapons to use as Artifacts of your own.
<ul>
  <li>Each Villain Group in this set includes cards that say "Villainous Weapon." These are not Villains.</li>
  <li>When a Villainous Weapon is played from the Villain Deck, the Weapon is captured by the Villain in the city that's closest to the Villain Deck. If there are no Villains in the city, then KO the Weapon instead.</li>
  <li>Villainous Weapons empower the Villain holding them, adding the Attack bonus printed on the Weapon. Tuck the Weapon under the Villain so you can see the Weapon's Attack bonus right under the Villain's Attack.</li>
  <li>An enemy can use any number of Weapons at the same time, getting all of their bonuses combined.</li>
  <li>When a Villain with any number of Villainous Weapons escapes the city, the Mastermind captures all those Weapons, getting their Attack bonuses.</li>
  <li>When you fight a Villain or Mastermind holding any number of Weapons, put all those Weapons into your discard pile as Artifacts.</li>
  <li>When you have a Villainous Weapon in your hand, you can play it just like any other Artifact.</li>
  <li>You never get the Weapon's printed Attack bonus when you play the Artifact or control it. Only Villains and Masterminds get that Attack bonus. You only get the specific Artifact abilities written on the card.</li>
  <li>Villainous Weapons you have captures as Artifacts have 0 costs, have no color of Hero Class, and don't count as Hero cards or Villain cards. Since they have no cost, Villainous Weapons can never make you Worthy. (How appropriate...)</li>
  <li>If you have gained a Villainous Weapon, and a card effect makes an enemy capture that Weapon again, then it works as a Villainous Weapon Again until someone defeats that enemy to reclaim it.</li>
  <li>Malekith and Hela both have Mastermind Tactics that run into Villainous Weapons. You win when the Mastermind has no face down Tactics left under them, even if there are still some Tactics that have turned into other card types somewhere.</li>
</ul>`,
};
