import { KeywordName } from '../../data/enums/keywordName.enum';

export interface IKeyword {
  name: KeywordName;
  description: string;
  id: string;
}
