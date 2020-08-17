import { Injectable } from '@angular/core';
import { BaseSingleDataService } from './base-data-service';
import { AllMasterminds } from "@legendizer/shared/data";
import { IMastermind } from '@legendizer/shared/models';

@Injectable({
  providedIn: 'root',
})
export class MastermindsService extends BaseSingleDataService<IMastermind> {
  constructor() {
    super(AllMasterminds);
  }
}
