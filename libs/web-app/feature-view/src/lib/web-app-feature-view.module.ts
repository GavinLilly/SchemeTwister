import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LatestSetupsComponent } from './latest-setups/latest-setups.component';
import { LatestSetupsStoreStore } from './latest-setups-store.store';
import { StoredSetupToGameSetupPipe } from './stored-setup-to-game-setup.pipe';
import { WebAppFeatureViewRoutingModule } from './web-app-feature-view-routing.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Bootstrap
    NgbModule,

    // Firebase
    AngularFirestoreModule,

    // Schemetwister
    WebAppFeatureViewRoutingModule,
  ],
  declarations: [LatestSetupsComponent, StoredSetupToGameSetupPipe],
  providers: [LatestSetupsStoreStore],
})
export class WebAppFeatureViewModule {}
