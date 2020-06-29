import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { Mastermind } from "@legendizer/models";
import { Masterminds } from "@legendizer/data-repository";

@Injectable()
export class MastermindsService {
  private masterminds: Array<Mastermind>
  constructor() {
    this.masterminds = plainToClass(Mastermind, Masterminds);
  }

  find = async() => {
    return this.masterminds;
  };

  findOne = async(id: string) => {
    return this.masterminds.find(h => h.id === id);
  };

  findRandom = async () => {
    return this.masterminds[Math.floor(Math.random() * this.masterminds.length)].id;
  }
}
