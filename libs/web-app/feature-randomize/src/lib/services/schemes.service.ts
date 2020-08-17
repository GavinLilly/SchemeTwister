import { Injectable } from '@angular/core';
import { BaseSingleDataService } from './base-data-service';
import { AllSchemes } from "@legendizer/shared/data";
import { IScheme } from "@legendizer/shared/models";

@Injectable({
  providedIn: 'root'
})
export class SchemesService extends BaseSingleDataService<IScheme> {
  constructor() {
    super(AllSchemes);
  }
}
