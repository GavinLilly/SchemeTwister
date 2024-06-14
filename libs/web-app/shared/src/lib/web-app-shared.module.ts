import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoredSetupsService } from './storedSetups.service';

@NgModule({
  imports: [CommonModule],
  providers: [StoredSetupsService],
})
export class WebAppSharedModule {}
