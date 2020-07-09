import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { masterminds } from "@legendizer/shared/mastermind/data";
import { Mastermind } from "@legendizer/shared/mastermind/types";

@Injectable({
  providedIn: 'root'
})
export class MastermindService extends BaseDataService<Mastermind> {

  constructor() {
    super(masterminds);
  }
}
