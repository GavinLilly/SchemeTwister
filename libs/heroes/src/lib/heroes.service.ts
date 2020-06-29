import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { Hero } from "@legendizer/models";
import { Heroes } from "@legendizer/data-repository";

@Injectable()
export class HeroesService {
  private heroes: Array<Hero>;
  constructor() {
    this.heroes = plainToClass(Hero, Heroes);
  }

  find = async() => {
    return this.heroes;
  };

  findOne = async(id: string) => {
    return this.heroes.find(h => h.id === id);
  };

  findRandom = async () => {
    return this.heroes[Math.floor(Math.random() * this.heroes.length)].id;
  }
}
