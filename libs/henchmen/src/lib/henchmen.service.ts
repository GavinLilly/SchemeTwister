import { Injectable } from '@nestjs/common';

import { Henchmen } from "@legendizer/models";
import { Henchmen as HenchmenData } from "@legendizer/data-repository";
import { plainToClass } from 'class-transformer';

@Injectable()
export class HenchmenService {
  private henchmen: Array<Henchmen>
  constructor() {
    this.henchmen = plainToClass(Henchmen, HenchmenData);
  }

  find = async() => {
    return this.henchmen;
  };

  findOne = async(id: string) => {
    return this.henchmen.find(h => h.id === id);
  };

  findRandom = async () => {
    return this.henchmen[Math.floor(Math.random() * this.henchmen.length)].id;
  }
}
