import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { ALL_MASTERMINDS } from "@legendizer/shared/mastermind/data";
import { IMastermind } from "@legendizer/shared/mastermind/types";

@Injectable({
  providedIn: 'root'
})
export class MastermindsService extends BaseDataService<IMastermind> {

  constructor() {
    super(ALL_MASTERMINDS);
  }
}
