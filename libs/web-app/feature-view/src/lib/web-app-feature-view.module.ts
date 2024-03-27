import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebAppSharedModule } from '@schemetwister/web-app/shared';

import { LatestSetupsComponent } from './latest-setups/latest-setups.component';
import { StoredSetupToGameSetupPipe } from './stored-setup-to-game-setup.pipe';
import { WebAppFeatureViewRoutingModule } from './web-app-feature-view-routing.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Bootstrap
    NgbModule,

    // Firebase
    FirestoreModule,

    // Schemetwister
    WebAppFeatureViewRoutingModule,
    WebAppSharedModule,
  ],
  declarations: [LatestSetupsComponent, StoredSetupToGameSetupPipe],
})
export class WebAppFeatureViewModule {}
