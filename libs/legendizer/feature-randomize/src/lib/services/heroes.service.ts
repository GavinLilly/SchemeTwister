import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { LegendaryHeroes, DarkCityHeroes } from "@legendizer/shared/hero/data";
import { IHero } from "@legendizer/shared/hero/types";

@Injectable({
  providedIn: 'root'
})
export class HeroesService extends BaseDataService<IHero> {

  constructor() {
    super([
      ...Object.values(LegendaryHeroes),
      ...Object.values(DarkCityHeroes)
    ]);
  }
}
