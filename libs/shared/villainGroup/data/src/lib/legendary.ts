import { VillainGroup } from "@legendizer/shared/villainGroup/types";
import { gameSets } from "@legendizer/shared/gameSet/data";

const legGameSet = gameSets.find(
  (record) => record.id === 'aa4eb824-5316-4f0d-bca7-a072b58dee5d'
);

export const villainGroups: VillainGroup[] = [
  {
    id: '1777054a-5b47-49c5-a951-fadb598b0265',
    name: 'Brotherhood',
    gameSet: legGameSet,
  },
  {
    id: 'dfe941c5-ed7f-4f2b-80ce-25435af90a5d',
    name: 'Enemies of Asgard',
    gameSet: legGameSet
  },
  {
    id: 'd7d0f179-b55a-42b8-8875-fbe633f27482',
    name: 'HYDRA',
    gameSet: legGameSet
  },
  {
    id: 'f55315f9-009b-4f6b-a999-7a745270980a',
    name: 'Masters of Evil',
    gameSet: legGameSet
  },
  {
    id: 'a3fe1ac8-8772-4161-9528-7c044687bc77',
    name: 'Radiation',
    gameSet: legGameSet
  },
  {
    id: 'a3ee145c-54a6-4f76-8593-423a0a3360f0',
    name: 'Skrulls',
    gameSet: legGameSet
  },
  {
    id: '5c0a948c-9573-41e1-af8b-0fd4cbfecf72',
    name: 'Spider-Foes',
    gameSet: legGameSet
  }
]
