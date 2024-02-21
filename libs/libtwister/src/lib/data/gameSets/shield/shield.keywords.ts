import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums/keywordName.enum';

export const UNDERCOVER: IKeyword = {
  name: KeywordName.UNDERCOVER,
  id: '83e4f919-e9fc-4b8b-9597-a0bce81f53cf',
  description: `This new keyword represents sending S.H.I.E.L.D. agents off the grid on special missions to recover valuable intel.
<ul>
  <li>Some cards say things like "You may send a S.H.I.E.L.D. Hero from your hand Undercover." This means "Put that Hero into your Victory Pile. It's worth 1VP."</li>
  <li>This helps get your starting S.H.I.E.L.D. Agents and Troopers out of your deck so that you draw your more powerful Heroes more often. You can also use it to get rid of other S.H.I.E.L.D. cards like Officers that you might not need later in the game. The main heroes in this set are all part of the S.H.I.E.L.D. team too, so you can also send their cards Undercover.</li>
  <li>If you play a card, and it sends itself Undercover, you still get its Recruit and Attack.</li>
  <li>Sending S.H.I.E.L.D. Heroes Undercover is also key to increasing your S.H.I.E.L.D. Level, as shown below.</li>
</ul>`,
};

export const SHIELD_LEVEL: IKeyword = {
  name: KeywordName.SHIELD_LEVEL,
  id: '4b847ea2-0449-47ca-867c-bbd8c4842a16',
  description: `This new keyword represents how S.H.I.E.L.D. agents unlock special operations, resources, and abilities as they rise through the ranks of the organization. Sending agents on undercover missions, fighting Hydra, and defeating rogue S.H.I.E.L.D. operatives are all good ways to increase your S.H.I.E.L.D. Level.
<ul>
  <li>Your S.H.I.E.L.D. Level is the number of S.H.I.E.L.D. and/or HYDRA cards in your Victory Pile.</li>
  <li>Some cards say things like "S.H.I.E.L.D. level 2: Draw a card." You can use this ability only if your S.H.I.E.L.D. Level is 2 or higher.</li>
  <li>This counts any card with the S.H.I.E.L.D. or HYDRA team icons, as well as any card with "S.H.I.E.L.D." or "Hydra" in its card name, Villain Group name, or Mastermind name. So this includes S.H.I.E.L.D. Assault Squads, Hydra Kidnappers, Hydra High Council Tactics, etc.</li>
  <li>This never consumes the cards in your Victory Pile - it just checks to make sure you have them.</li>
  <li>Heroes that use S.H.I.E.L.D. Level all have ways to get the needed cards into your Victory Pile.</li>
  <li>Note: When playing with Hydra Villain Groups and/or multiple Heroes that use S.H.I.E.L.D. Levels, your S.H.I.E.L.D. Levels will naturally be higher.</li>
</ul>`,
};

export const HYDRA_LEVEL: IKeyword = {
  name: KeywordName.HYDRA_LEVEL,
  id: 'f37e25cb-e638-499c-9397-5219c9ec2200',
  description: `Some Villain Groups also try to rise through the ranks of the Hydra organization, achieving higher Hydra Levels and ever-greater power. To do this, they help Hydra operatives achieve their missions and escape the city unharmed. They also subvert double agents to infiltrate S.H.I.E.L.D., then escape it with key intel.
<ul>
  <li>The Hydra Level is the number of S.H.I.E.L.D. and/or HYDRA cards in the Escape Pile.</li>
  <li>Some Villains and Masterminds say things like "Growing Man gets + Attack equal to the Hydra Level."</li>
  <li>Like S.H.I.E.L.D. Level, this includes any card with the S.H.I.E.L.D. or HYDRA team icons, as well as any card with "S.H.I.E.L.D." or "Hydra" in its card name, Villain Group name, or Mastermind name.</li>
  <li>Some abilities put S.H.I.E.L.D. cards directly from S.H.I.E.L.D. Officer Stack into the Escape Pile to increase the Hydra Level. This is not an "escape" unless it's a Villain escaping from the city, so it won't KO a Hero of cost 6 or less from the HQ.</li>
</ul>`,
};

export const ADAPT: IKeyword = {
  name: KeywordName.ADAPT,
  id: '1cac7ea7-9ac3-4ab7-9752-897c071cfabe',
  description: `The Hydra Super-Adaptoid and the Hydra High Council constantly adapt their tactics to attack the Heroes in new ways. Accordingly, each of these Masterminds is a new "Adapting Mastermind" with 4 different Master Strikes. Here's how they work.
<ul>
<li>A normal Mastermind has a Mastermind card and 4 Mastermind Tactic cards. An Adapting Mastermind instead has just 4 Mastermind Tactic cards. Whichever Tactic is currently on top of the stack of Tactics counts as the current Mastermind card.</li>
<li>Say you are using Hydra Super-Adaptoid as your Mastermind. Keep all his Tactics in a face up stack. Use only the rules on the top card, ignoring the rest of the cards in the stack.</li>
<li>Whenever an Adapting Mastermind does a Master Strike, it says "Adapt" at the end. This means "Shuffle the Mastermind Tactics and randomly put one on top, face up." You might randomly pick the same Tactic that was previously on top, pr it might be a different Tactic.</li>
<li>Likewise, when you fight an Adapting Mastermind, you always fight the Tactic currently on top of the stack. You ignore all the card abilities and Attack bonuses that are not currently on top of the stack. The "Fight" ability also says "Adapt" at the end. So you put the Tactic you just fought into your Victory Pile, do its Fight effect, then shuffle the remaining Tactics and randomly put one on top, face up.</li>
</ul>`,
};
