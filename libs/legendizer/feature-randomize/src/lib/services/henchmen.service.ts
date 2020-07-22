import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { LegendaryHenchmen, DarkCityHenchmen } from "@legendizer/shared/henchmen/data";
import { IHenchmen } from "@legendizer/shared/henchmen/types";

@Injectable({
  providedIn: 'root'
})
export class HenchmenService extends BaseDataService<IHenchmen> {

  constructor() {
    super([
      ...Object.values(LegendaryHenchmen),
      ...Object.values(DarkCityHenchmen)
    ]);
  }
}
