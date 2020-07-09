import { Mastermind } from "@legendizer/shared/mastermind/types";
import { gameSets } from "@legendizer/shared/gameSet/data";
import { henchmen } from "@legendizer/shared/henchmen/data";
import { villainGroups } from "@legendizer/shared/villainGroup/data";

const legGameSet = gameSets.find(
  (record) => record.id === 'aa4eb824-5316-4f0d-bca7-a072b58dee5d'
);

export const masterminds: Mastermind[] = [
  {
    id: '0bf45de9-7ee0-4650-98e0-2ef0300c6e22',
    name: 'Dr. Doom',
    alwaysLeads: henchmen.find((record) => record.id === '33ce6029-f4e6-4330-8061-122a6bc21bab'),
    gameSet: legGameSet,
    attackPoints: 9,
    victoryPoints: 5
  },
  {
    id: '2d54ba0e-d2f8-40ba-a685-0853ce7201ea',
    name: 'Loki',
    alwaysLeads: villainGroups.find((record) => record.id === 'dfe941c5-ed7f-4f2b-80ce-25435af90a5d'),
    gameSet: legGameSet,
    attackPoints: 10,
    victoryPoints: 5
  },
  {
    id: 'ddf93b06-2e71-4a4b-99bf-02dd54f0d0c2',
    name: 'Magneto',
    alwaysLeads: villainGroups.find((record) => record.id === '1777054a-5b47-49c5-a951-fadb598b0265'),
    gameSet: legGameSet,
    attackPoints: 8,
    victoryPoints: 5
  },
  {
    id: '9ed63c18-275f-4cfe-977e-c49efc391b9e',
    name: 'Red Skull',
    alwaysLeads: villainGroups.find((record) => record.id === 'd7d0f179-b55a-42b8-8875-fbe633f27482'),
    gameSet: legGameSet,
    attackPoints: 7,
    victoryPoints: 5
  },
]
