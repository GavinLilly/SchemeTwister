import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { VillainGroup } from "@legendizer/models";
import { VillainGroups } from "@legendizer/data-repository";

@Injectable()
export class VillainsService {
  private villainGroups: Array<VillainGroup>
  constructor() {
    this.villainGroups = plainToClass(VillainGroup, VillainGroups);
  }

  find = async() => {
    return this.villainGroups;
  };

  findOne = async(id: string) => {
    return this.villainGroups.find(h => h.id === id);
  };

  findRandom = async () => {
    return this.villainGroups[Math.floor(Math.random() * this.villainGroups.length)].id;
  }
}
