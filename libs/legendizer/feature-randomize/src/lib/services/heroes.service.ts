import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { ALL_HEROES } from "@legendizer/shared/hero/data";
import { IHero } from "@legendizer/shared/hero/types";

@Injectable({
  providedIn: 'root'
})
export class HeroesService extends BaseDataService<IHero> {

  constructor() {
    super(ALL_HEROES);
  }
}
