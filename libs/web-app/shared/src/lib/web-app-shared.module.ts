import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { StoredSetupsService } from './storedSetups.service';

@NgModule({
  imports: [CommonModule, provideFirestore(() => getFirestore())],
  providers: [StoredSetupsService],
})
export class WebAppSharedModule {}
