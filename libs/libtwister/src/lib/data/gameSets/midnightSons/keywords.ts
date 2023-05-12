import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums';
import { DARK_MEMORIES as REV_DARK_MEMORIES } from '../revelations/keywords';
import { WAKING_NIGHTMARE as NEW_MUTANTS_WAKING_NIGHTNMARE } from '../theNewMutants/keywords';

export const DARK_MEMORIES: IKeyword = {
  ...REV_DARK_MEMORIES,
  id: '0667f660-bbc2-4f8e-8359-ec0a7d8d2cac',
};

export const WAKING_NIGHTMARE: IKeyword = {
  ...NEW_MUTANTS_WAKING_NIGHTNMARE,
  id: '48bf23c8-e79e-4d56-b5d1-1a9b9596ae4a',
};

export const BLOOD_FRENZY: IKeyword = {
  id: '915831d0-26ad-4683-bd0d-c9d9e4a3aca0',
  name: KeywordName.BLOOD_FRENZY,
  description: 'TBD',
};

export const HAUNT: IKeyword = {
  id: 'd0d5da8e-fb30-464e-8e1d-0a34ae356350',
  name: KeywordName.HAUNT,
  description: 'TBD',
};

export const HUNT_FOR_VICTIMS: IKeyword = {
  id: 'cdf25fdb-bd5e-41ff-8259-aec80d00ef8c',
  name: KeywordName.HUNT_FOR_VICTIMS,
  description: 'TBD',
};
