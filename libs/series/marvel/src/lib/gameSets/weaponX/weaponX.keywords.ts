import { IKeyword } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const BERSERK_VILLAINS: IKeyword = {
  name: KeywordName.BERSERK_VILLAINS,
  id: '1d94df70-d8d2-45e1-9363-d6fc2562a1ae',
  description: `As a new twist, this set also includes unpredictable Enemies with Berserk. When they face stronger Heroes, they become even more enraged and violent.
- When you try to fight an Enemy that has Berserk, discard the top card of your deck. That Enemy gets + Attack equal to the discarded card's printed Attack.
- If you have at least as many Attack points as the Enemy's improved Attack, spend that many Attack and defeat the Enemy as normal.
- If you don't have enough Attack points, then you don't defeat this Enemy, you lose all your Attack points, and you can't fight anymore this turn. You can still play cards and recruit. Don't use that Enemy's "Fight" effect. (Also don't use any "When you fight" or "When you defeat" effects. You can't use the "if you don't fight..." Healing ability on normal Wounds.)
- If an Enemy says Berserk multiple times, do the Berserk effect that many times, giving all of that Attack.
- Once you start to fight an Enemy, you can't play any more cards until after that fight is complete. Remember to generate all the Attack you can before you fight them!
- Look for ways to set up the top cards of your deck to have low or not Attack before you fight a Berserk Enemy.`,
};

export const FAIL: IKeyword = {
  name: KeywordName.FAIL,
  id: 'ac7707f1-c16f-4881-88fd-c17a7e4f45f5',
  description: `Some Berserk Enemies say "Fail: You gain a Wound."
- Do the "Fail" effect if you try to fight that Enemy but the Berserk Attack bonus causes you to fail.
- You can't try to fight an Enemy unless you have enough points to match its printed Attack.`,
};

export const WEAPON_X_SEQUENCE: IKeyword = {
  name: KeywordName.WEAPON_X_SEQUENCE,
  id: 'a5e066c3-e76a-47d7-ab59-a567df416e11',
  description: `The lethal success of the Weapon Plus program comes from their relentless iteration on the science of death. From Weapon XII to Weapon XIII to Weapon XV, each of their sequence of killers is more deadly than the last.
- On a Hero, "Weapon X Sequence" means "you get + Attack equal to the longest sequence of different printed cost numbers on your cards."
- "Your cards" includes both cards you've played this turn and cards in your hand, so you can count both.
- For example, say your cards have the costs 0,4,2,7,3,3. Then each time you played a card with the Weapon X Sequence ability, you would get +3 Attack, since your longest sequence of different cost numbers is 2-3-4.
- Each number in the sequence must be one higher than the previous number. Your sequence can start with any number, including 0. You can't skip any number in the sequence. Having duplicates of the same cost doesn't help. If your costs are 0,0,0,4,4,6, then your longest sequence is 1 and you would get +1 Attack.
- After you play a Weapon X Sequence card, if you draw more cards later in the turn that would have extended your sequence, it's too late to go back and get more Attack from the Weapon X Sequence you already played.
- "Doubled Weapon X Sequence" means double the bonus.
- Build your deck carefully to get long sequences!

Enemies with Weapon X Sequence:
- On Enemies, Weapon X Sequence means "This Enemy gets + Attack equal to the longest sequence of different printed cost numbers among cards in the HQ."
- For example, say the Heroes in the HQ have printed costs 4,7,5,3,2. Then Weapon X Sequence gives an Enemy +4 Attack (for the sequence 2-3-4-5).
- It doesn't matter which HQ spaces those cards are in or if any of them are physically in any particular order.
- One clever move is to recruit a Hero from the HQ at the right time, disrupting an Enemy's Weapon X Sequence before you fight them. Take the above example where Heroes in the HQ have printed costs 4,7,5,3,2. If you recruit the 3-cost Hero and it gets replaced with a 5-cost Hero, you've reduced the Enemy's Weapon X Sequence bonus from +4 Attack to +2 Attack.`,
};

export const ENEMIES_WITH_WEAPON_X_SEQUENCE: IKeyword = {
  name: KeywordName.ENEMIES_WITH_WEAPON_X_SEQUENCE,
  id: '32e9ebc1-b739-481f-9df7-0ad1bacdac0c',
  description: `- On Enemies, Weapon X Sequence means "This Enemy gets + Attack equal to the longest sequence of different printed cost numbers among cards in the HQ."
- For example, say the Heroes in the HQ have printed costs 4,7,5,3,2. Then Weapon X Sequence gives an Enemy +4 Attack (for the sequence 2-3-4-5).
- It doesn't matter which HQ spaces those cards are in or if any of them are physically in any particular order.
- One clever move is to recruit a Hero from the HQ at the right time, disrupting an Enemy's Weapon X Sequence before you fight them. Take the above example where Heroes in the HQ have printed costs 4,7,5,3,2. If you recruit the 3-cost Hero and it gets replaced with a 5-cost Hero, you've reduced the Enemy's Weapon X Sequence bonus from +4 Attack to +2 Attack.`,
};
