import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { villainGroups } from "@legendizer/shared/villainGroup/data";
import { VillainGroup } from '@legendizer/shared/villainGroup/types';


@Injectable({
  providedIn: 'root'
})
export class VillainGroupsService extends BaseDataService<VillainGroup> {

  constructor() {
    super(villainGroups);
  }
}
