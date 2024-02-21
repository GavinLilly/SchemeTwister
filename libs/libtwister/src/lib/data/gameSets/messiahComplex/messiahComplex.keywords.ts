import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums/keywordName.enum';

export const CLONE_HEROES: IKeyword = {
  name: KeywordName.CLONE_HEROES,
  id: '55357d39-ece3-4994-b10c-af79a6321566',
  description: `Multiple Man and the Stepford Cuckoos are literal clones. M and her sisters can transform into copies of each other. Shatterstar is genetically engineered from cloned DNA. All of these use the new Clone keyword, saying things like Clone".

- This means: You may gain another copy of this card from the HQ. If there are none in the HQ, you may gain a copy from the Hero Deck and shuffle it.
- "Gain" means "put it into your discard pile."
- If you a Clone a S.H.I.E.L.D. Officer or Sidekick, search and shuffle that stack instead.

"When Recruited" Clones: Some Heroes say "When Recruited: Clone". This means Use the Clone ability immediately when you recruit this Hero. (Do this right after you put the recruited Hero in your discard pile, after you refill its HQ space.)

- Use a "When Recruited" ability only when you recruit a Hero, not when an ability causes you to "gain" a Hero or "put it in your hand." So the copy you gain from "When Recruited: Clone" won't make you also gain a third copy, then a fourth copy, etc.
- Some Heroes say things like "When Recruited: Clone." Use this ability only if you have played a Hero this turn before recruiting this card.`,
};

export const CLONE_VILLAINS: IKeyword = {
  name: KeywordName.CLONE_VILLAINS,
  id: '56088605-0a44-48ad-9ecb-40840449deb6',
  description: `On a Villain, "Ambush: Clone" means: Search the Villain Deck for a copy of this Villain, and it enters the city, ignoring any further Clone effects. Shuffle that deck. When you Clone a "Predator X" Villain, just use the first "Predator X" you find in the Villain Deck. If you can't find a Clone copy of a Villain (or Hero), just move on.`,
};

export const SHATTER: IKeyword = {
  name: KeywordName.SHATTER,
  id: 'a2ce9a22-ae61-4651-ab72-9f7ffdaaa3ad',
  description: `Rictor's earthquake powers, Siryn's sonic shrieks, and Shatterstar's bioelectric shocks can Shatter even the strongest defenses. Some Heroes say things like "Shatter a Villain in the Sewers."

- This means "Halve that enemy's current Atttack. (round up to the nearest whole number.)" This effect lasts until the end of this turn.
- You can shatter the same Villain multiple times, halving their Attack (rounding up) each time.
- "Shatter a Villain" can't be used on a Mastermind.
- "Shatter the Mastermind," lasts for one fight against that Mastermind.
- A few cards even let you Shatter a Hero in the HQ, halving their current cost (round up) the same way.
- Technically, the Villain gets - Attack equal to half its current Attack. For example: Pestilence has 5 printed Attack. Apocalypse says "Four Horsemen Villains get +2 Attack." Shattering gives her -3 Attack, from 7 Attack to 4 Attack.`,
};

export const PREY: IKeyword = {
  name: KeywordName.PREY,
  id: '0e4bab8e-5be4-46aa-bbaf-7eacd5f08515',
  description: `Some Villains say things like "Ambush: Prey on the fewest" After this Villain enters the Sewers, each player reveals their hand, and you check which player has the fewest https://cf.geekdo-static.com/mbs/mb_26287_0.png cards. (The current player decides how to break ties, including ties of 0 https://cf.geekdo-static.com/mbs/mb_26283_0.png cards.) Put this Villain in front of that player, "Preying" on them.

- Any player may still fight that Villain as normal. However: if no player defeats that Villain by the end of the preyed-on player's turn, use that Villain's "Finish the Prey" ability against that player, then that Villain enters the Sewers, ignoring its Ambush effects.
- Important: Do the "Finish the Prey" ability after that player draws their new hand at end of turn. Some players like to lean the Prey Villain on their deck as a reminder to Finish the Prey then.
- After Lady Deathstrike Finishes the Prey, or if you fight her while she's Preying on a player, return her to the Mastermind space. You still take one of her Tactics if you fight her while she's Preying.
- Multiple enemies can prey on a player at once.`,
};

export const TACTICAL_FORMATION: IKeyword = {
  name: KeywordName.TACTICAL_FORMATION,
  id: 'f6af2042-8773-4cae-9cf2-0aaa0345733f',
  description: `X-Force is known for precise strike force tactics. X-Factor Investigations likewise plans their missions to the finest detail. With this new keyword, some Heroes say things like "Tactical Formation 445: You get +3 Attack."

- You can use this ability only if you have two Heroes that cost 4 and one Hero that costs 5.
- You can count the "Tactical Formation" card itself.
- "Heroes you have" includes Heroes you already played this turn and Heroes in your hand.
`,
};

export const VEILED_SCHEMES: IKeyword = {
  name: KeywordName.VEILED_SCHEMES,
  id: '49e18666-d182-4102-9939-e7c0085d9cb7',
  description: `The enemies of mutantkind often hide their true goals until it's too late. All 4 Schemes in this set are "Veiled Schemes." They say "Unveiled Scheme" on the reverse side. When you use any of these Scheme cards, start with the "Veiled Scheme" side face up. At a certain point, it will say "This Scheme Transforms into a random Unveiled Scheme." This means you remove the Veiled Scheme from the game and replace it with a randomly selected "Unveiled Scheme" from all the ones you own. You might randomly select the reverse side of the Veiled Scheme you started with, or you might randomly select the Unveiled Scheme side of a different card.`,
};
