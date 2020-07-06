import { Bystander } from '@legendizer/shared/bystander/types';
import { gameSets } from '@legendizer/shared/gameSet/data';

export const bystanders: Bystander[] = [
  {
    id: 'd84ef365-e212-430b-9925-c567ef17569f',
    name: 'Bystander',
    copies: 30,
    victoryPoints: 1,
    gameSet: gameSets.find(
      (record) => record.id === 'aa4eb824-5316-4f0d-bca7-a072b58dee5d'
    ),
  },
];
