import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { henchmen } from "@legendizer/shared/henchmen/data";
import { Henchmen } from "@legendizer/shared/henchmen/types";

@Injectable({
  providedIn: 'root'
})
export class HenchmenService extends BaseDataService<Henchmen> {

  constructor() {
    super(henchmen);
  }
}
