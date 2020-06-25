import { Hero } from "./hero.model";
import * as Heroes from "./data";
import { async } from 'rxjs/internal/scheduler/async';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
  find = async() => {
    return Object.values(Heroes) as Array<Hero>;
  };

  findOne = async(id: string) => {
    return Object.values(Heroes).find(h => h.id === id) as Hero;
  };

  findRandom = async () => {
    const heroes = Object.values(Heroes);
    return heroes[Math.floor(Math.random() * heroes.length)].id;
  }
}
