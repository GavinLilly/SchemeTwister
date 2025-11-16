import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebAppFeatureSetupStoreModule } from '@schemetwister/web-app/feature-setup-store';


import { LatestSetupsComponent } from './latest-setups/latest-setups.component';
import { StoredSetupToGameSetupPipe } from './stored-setup-to-game-setup.pipe';
import { WebAppFeatureViewRoutingModule } from './web-app-feature-view-routing.module';

@NgModule({
    imports: [
    // Angular
    CommonModule,
    // Bootstrap
    NgbModule,
    // Schemetwister
    WebAppFeatureViewRoutingModule,
    WebAppFeatureSetupStoreModule,
    LatestSetupsComponent, StoredSetupToGameSetupPipe,
],
})
export class WebAppFeatureViewModule {}
