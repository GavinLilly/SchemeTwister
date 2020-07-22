import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data-service';
import { LegendarySchemes, DarkCitySchemes } from "@legendizer/shared/scheme/data";
import { IScheme } from "@legendizer/shared/scheme/types";

@Injectable({
  providedIn: 'root'
})
export class SchemesService extends BaseDataService<IScheme> {

  constructor() {
    super([
      ...Object.values(LegendarySchemes),
      ...Object.values(DarkCitySchemes)
    ]);
  }
}
