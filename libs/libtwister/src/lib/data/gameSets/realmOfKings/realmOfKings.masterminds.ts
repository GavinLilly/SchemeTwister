import { MastermindWithEpic } from '../../../model';
import { KeywordName } from '../../enums/keywordName.enum';

import { ABOMINATION, THRONES_FAVOR } from './realmOfKings.keywords';
import { META } from './realmOfKings.meta';
import {
  INHUMAN_REBELLION,
  SHIAR_IMPERIAL_ELITE,
} from './realmOfKings.villains';

export const MAXIMUS_THE_MAD = new MastermindWithEpic(
  {
    id: '24610267-6acd-4b1f-899c-48b3a43af94f',
    attackPoints: 8,
    specialRules: `Highest ${KeywordName.ABOMINATION}`,
    masterStrike:
      "Reveal one of Maximus' remaining Mastermind Tactics at random. Use its Fight effect, then shuffle it back into those Tactics.",
    name: 'Maximus the Mad',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [INHUMAN_REBELLION],
    keywords: [THRONES_FAVOR, ABOMINATION],
  },
  {
    id: 'ae9b5953-23ca-4066-8ab4-d76291644ae7',
    attackPoints: 9,
    specialRules: `Double Highest ${KeywordName.ABOMINATION}`,
    masterStrike:
      "Reveal two different Tactics at random from Maximus' remaining Mastrmind Tactics. Then use each of those fight effects in the order that you revealed them. Then shuffle them back into those Tactics.",
  }
);

export const EMPEROR_VULCAN_OF_THE_SHIAR = new MastermindWithEpic(
  {
    name: "Emperor Vulcan of the Shi'ar",
    id: '21b14872-e23d-46d6-b721-94483dad908a',
    attackPoints: 10,
    specialRules: `Vulcan gets +3 Attack while he has the ${KeywordName.THRONES_FAVOR}.`,
    masterStrike: `Each player that doesn't have the ${KeywordName.THRONES_FAVOR} gains a Wound. Then Vulcan gains the ${KeywordName.THRONES_FAVOR}.`,
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [SHIAR_IMPERIAL_ELITE],
    keywords: [THRONES_FAVOR],
  },
  {
    name: 'Epic Emperor Vulcan',
    id: 'e3289899-5eb0-45fa-8321-3e24e1dd1fd3',
    attackPoints: 12,
    specialRules: `Vulcan gets +5 Attack while he has the ${KeywordName.THRONES_FAVOR}.`,
    masterStrike: `Each player that doesn't have the ${KeywordName.THRONES_FAVOR} gains a Wound to the top of their deck. Then Vulcan gains the ${KeywordName.THRONES_FAVOR}.`,
  }
);
