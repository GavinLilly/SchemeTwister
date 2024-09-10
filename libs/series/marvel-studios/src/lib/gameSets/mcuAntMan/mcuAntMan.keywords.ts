import { IKeyword } from '@schemetwister/libtwister';

export const ANTICS: IKeyword = {
  name: 'Antics',
  id: '4fc9aed6-c1eb-4ca5-8a98-b050e7be4817',
  description: `Some of Ant-Man's craziest moments come when he uses his power to control tiny ants, as well as shrinking himself down to ant size or growing ants to giant size!
- Some cards say things like "Antics: You get +2 Attack."
- You can use a card's Antics abilities only if you have at least three cards that cost 1 or 2 and/or have Size-Changing.
- The Antics card itself can count towards those three cards if it costs 1 or 2 and/or has Size-Changing.
- "Cards you have" includes both cards you played this turn and cards still in your hand, so both of those can help you use Antics.
- Use the Antics ability at the moment you play the Antics card. If you don't use it then, you can't go back and use it later in the turn.`,
};

export const HEIST: IKeyword = {
  name: 'Heist',
  id: '891ff86f-6310-4676-a7a7-b9782c13aee5',
  description: `Scott Lang's elaborate Heists are highlights of the movies, represented by this new keyword:
- Some cards say things like "Heist: You get +2 Recruit."
- Once per turn, if you have played any Heroes with Heist abilities (and/or fought any Enemies with Heist abilities) you may "attempt a Heist."
- To do this, first assemble your crew: Count the number of different non-zero costs you have among all your Heroes this turn. This is your Heist Count. Then try to outfox the guards: Reveal the top card of the Villain Deck and check its printed VP.
- If your Heist Count is higher than that VP: The Heist worked! Use all Heist effects of Heroes you played and Enemies you fought this turn, in any order.
- If your Heist Count is tied with that VP: It all went sideways, and you barely escaped! No effects.
- If your Heist Count is lower than that VP: Your crew got caught! You gain a Wound (& no Heist effects).
- You can only ever attempt one Heist per turn, no matter the outcome. If you succeed in the on to playing more Heroes or recruiting or fighting anything else. After your one Heist attempt for the turn, if you draw additional cards with Heist abilities (or fight additional Enemies with Heist abilities), it will be too late to get those additional Heist effects.
- Heist checks for printed cost, so 4* and 4 count as the same cost.
- You don't have to go on a Heist. Weigh it carefully!`,
};

export const EXPLORE: IKeyword = {
  name: 'Explore',
  id: '29aa5989-e9e6-412d-ae6c-b78a41461a6b',
  description: `In the twisting landscapes of the Quantum Realm, Janet van Dyne searches for her loved ones and for escape routes, while Jentorra searches for Freedom Fighters. This is represented by the new "Explore" keyword.
- Some cards say things like "Microbadge: Legendary fan - Ranged Hero: Explore. You get + Attack equal to the Found Hero's printed Attack."
- Explore means "Put a Hero from the HQ on the bottom of the Hero Deck. Reveal the top two cards of the Hero Deck and choose which one refills the empty HQ space. Put the other on the bottom of the Hero Deck."
- Some Explore cards give bonus effects based on the "Found Hero." The Found Hero is the Hero you added to the HQ this way.`,
};

export const DOUBLE_CROSS: IKeyword = {
  name: 'Double Cross',
  id: '043c7458-c914-4534-a802-1689217d385b',
  description: `Seeming allies often betray the Heroes of the Ant-Man movies, represented by the new Double-Cross keyword.
- "Double-Cross each player" means "Each player reveals their hand and discards one of their highest-cost 'doubles' (a card that has the same cost as another card in your hand)."
- Example: The costs in your hand are 0,0,4,4,4,6. You must discard one of your 4-cost cards.`,
};

export const AMBUSH_SCHEMES: IKeyword = {
  name: 'Ambush Schemes',
  id: '3182f390-addd-43bd-83e2-63926b250790',
  description: `Each Villain Group in this set includes an "Ambush Scheme." These are shuffled into the Villain Deck alongside their Villain Group as normal. When an Ambush Scheme is played from the Villain Deck, put it next to the normal Scheme and do its Ambush effect. For the rest of the game, whenever a Scheme Twist is played, do each Scheme's Twist effect (in any order). Each Ambush Scheme tells you a way to "defeat this Scheme." When you do that, the current player puts it into their Victory Pile, scoring its Victory Points. Ambush Schemes aren't Villains. They don't enter the city or push other Villains forward. You don't need to defeat Ambush Schemes to win the game.
- Note: There can only be one Ambush Scheme in play at a time. If a second Ambush Scheme would be played from the Villain Deck, KO the new Ambush Scheme and play another card from the Villain Deck instead.`,
};
