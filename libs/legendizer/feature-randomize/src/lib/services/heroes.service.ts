import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { heroes } from "@legendizer/shared/hero/data";
import { Hero } from "@legendizer/shared/hero/types";

@Injectable({
  providedIn: 'root'
})
export class HeroesService extends BaseDataService<Hero> {

  constructor() {
    super(heroes);
  }
}
