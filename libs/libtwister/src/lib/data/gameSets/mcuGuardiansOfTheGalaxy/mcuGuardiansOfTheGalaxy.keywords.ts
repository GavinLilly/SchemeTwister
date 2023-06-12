import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums';

export const TRIGGERED_ARTIFACTS: IKeyword = {
  name: KeywordName.TRIGGERED_ARTIFACTS,
  id: 'ed122dfb-a92e-45aa-994c-4785202df6bc',
  description: `Some cards say things like "Triggered Artifact - Whenever you draw a card during your turn, you get +1 Attack." While you control this Artifact, every time you do that trigger, you get the listed effect.
If a card lets you "copy" a Triggered Artifact card of "play a copy of it," then you can use that Triggered Artifact ability (or "Thrown Artifact," "Once per turn" Artifact or "Ritual Aritfact" ability) once, and you don't need to fulfill the trigger. The copy doesn't stay in play as an Artifact. The 'Legendry Outlaw' card from the 2014 Guardians set cannot copy any Artifacts in this set.`,
};

export const EXCESSIVE_KINDNESS: IKeyword = {
  name: KeywordName.EXCESSIVE_KINDNESS,
  id: '5a82256f-394f-4af2-9f0c-155a4c4ee119',
  description:
    'By contrast, the empath Mantis and the adorable Baby Groot are often way kinder than necessary. Their "Excessive Kindness" abilities work just like Excessive Violence, except that you trigger them by spending 1 Recruit more than you need when recruiting a Hero.',
};

export const COMMAND: IKeyword = {
  name: KeywordName.COMMAND,
  id: '607b6e41-aeb3-43d6-819c-c92f2074ee48',
  description: `Some Villains say things like "Taserface gets +2 Attack while he Commands the Ravagers."
A Villain "Commands" their group and gets these abilities as long as it's the leftmost Villain of that Villain Group in the city.
If there's only one Villain of a Villain Group in the city, it still Commands that Villain Group.`,
};
