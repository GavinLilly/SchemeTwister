import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { ALL_VILLAIN_GROUPS } from "@legendizer/shared/villainGroup/data";
import { IVillainGroup } from '@legendizer/shared/villainGroup/types';


@Injectable({
  providedIn: 'root'
})
export class VillainGroupsService extends BaseDataService<IVillainGroup> {

  constructor() {
    super(ALL_VILLAIN_GROUPS);
  }
}
