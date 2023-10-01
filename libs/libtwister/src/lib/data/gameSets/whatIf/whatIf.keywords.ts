import { IKeyword } from '../../../model';
import { HeroClass, KeywordName } from '../../enums';

export const LIBERATE: IKeyword = {
  name: KeywordName.LIBERATE,
  id: '0b1c304f-cb08-4df8-b8d8-77760df91665',
  description: ` Apocalyptic Black Widow hails from the reality where Ultron won, destroyed the other Avengers, and annihilated most of humanity.
She realizes that destroying replaceable robotic sentries will never win the war. Instead she devotes herself to specific strikes on two targets: saving human hostages and destroying the Mastermind once and or all. Killmonger, Spec Ops likewise devotes himself to targeted rescue missions and taking out the top of the opposing command structure. This is represented by the new Liberate keyword. Some Hero cards say things like "Liberate 3."
- This means "You get +3 Attack, usable only against Villains holding Bystanders or the Mastermind."
- You can use the bonus Attack against the Mastermind whether it's holding Bystanders or not.
- You can use Attack that's "only usable against Masterminds" (like Liberate) on additional Attack that Mastermind abilities ask you to spend, like when Hank Pym Yellowjacket requires extra Attack to "track him down."`,
};

export const WHAT_IF: IKeyword = {
  name: KeywordName.WHAT_IF,
  id: 'fd132b56-477e-4381-a4c3-54a26e9b70bc',
  description: `This new keyword highlights how a Hero's destiny can pivot on a single crucial choice, with consequences that spill through the rest
  of that dimension. Some Hero cards say things like "What If…?: You get +3 Recruit."
- This means "Choose a Hero Class or Hero Name. Then reveal the top card of your deck, and either put it back on top of your deck or discard it. If the revealed card had the Hero Class or Hero Name you chose, then do the What If effect."
- What If…? is not allowed to trigger on 0-cost grey starting cards like S.H.I.E.L.D. Agent or S.H.I.E.L.D. Trooper, so don't choose those Hero Names.
- Even if a What If…? ability misses, it's still valuable to be able to choose to put your top card in your discard pile or not. For example, it can give you key information about your top card so you know what to choose with your next What If…? card that turn. Or if the top card is a S.H.I.E.L.D. Agent, you can discard it so you have a chance to hit with your next What If…? ability that turn and so you don't have to draw it next turn.
- If you choose a Hero Name like "Black Widow," that will trigger on any card whose Hero Name is literally "Black Widow" as well as any Hero Name that contains "Black Widow", such as "Apocalyptic Black Widow." However, you have to choose an actual Hero Name. You can't choose just the word "Captain" and trigger on both Captain America and Captain Carter cards, since the single word "Captain" isn't a Hero Name.
  `,
};

export const SOULBIND: IKeyword = {
  name: KeywordName.SOULBIND,
  id: 'c7d70fa1-2fd3-447a-95d9-bbb8f0089de4',
  description: `In a maddened drive to save his beloved Christine Palmer, the alternate-dimension variant known as Doctor Strange Supreme binds demons' dark souls to devour their power. Uatu the Watcher and Gamora also make crucial moves to bind certain souls and Infinity Stones. This is represented with the new Soulbind keyword. Some cards say things like "${HeroClass.RANGED} Soulbind: You get +Attack equal to that Villain's printed Victory Points."
- This means "If you have played a Hero earlier this turn, you may choose a face up Villain card from your Victory Pile, turn it face down, and put it on the bottom of your Victory Pile. If you do, then do the listed Soulbind effect." At the end of the game when you are counting Victory Points, turn all those face down cards face up again and you can count their Victory Points. But until the end of the game, the face down cards count as not being in your Victory Pile at all.
- This is a great way to stop Rise of the Living Dead Villains from coming back to life out of your Victory Pile. The face down card can't be used for another Soulbind effect later. The face down card can't help you against Cross-Dimensional Rampages. It doesn't count for effects that count the number of cards or Villains in your Victory Pile. Act as if the face down card is no longer in your Victory Pile at all, until you are counting Victory Points at the end of the game.
- Some cards ask you to Soulbind more specific things, like "Soulbind a Henchman" or "Soulbind six Villains."
- Using Soulbind is usually optional. You generally don't have to use Soulbind if you don't want to, whether on a Hero card you played or a Villain you just fought. However, some cards explicitly say that you "must Soulbind," which means you have to do it.
  `,
};
