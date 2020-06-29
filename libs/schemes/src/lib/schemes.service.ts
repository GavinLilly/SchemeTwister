import { Injectable } from '@nestjs/common';
import { plainToClass } from "class-transformer";

import { Schemes } from "@legendizer/data-repository";
import { Scheme } from '@legendizer/models';

@Injectable()
export class SchemesService {
  private schemes: Array<Scheme>;
  constructor() {
    this.schemes = plainToClass(Scheme, Schemes);
  }

  find = async() => {
    return this.schemes;
  };

  findOne = async(id: string) => {
    return this.schemes.find(s => s.id === id);
  };

  findRandom = async () => {
    return this.schemes[Math.floor(Math.random() * this.schemes.length)].id;
  }
}
