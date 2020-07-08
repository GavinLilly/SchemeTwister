import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data-service';
import { schemes } from "@legendizer/shared/scheme/data";
import { Scheme } from "@legendizer/shared/scheme/types";

@Injectable({
  providedIn: 'root'
})
export class SchemeService extends BaseDataService<Scheme> {

  constructor() {
    super(schemes);
  }
}
