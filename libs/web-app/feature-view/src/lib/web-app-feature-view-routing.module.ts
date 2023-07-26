import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LatestSetupsComponent } from './latest-setups/latest-setups.component';

const routes: Routes = [
  { path: 'setups', pathMatch: 'full', component: LatestSetupsComponent },
  {
    path: '',
    redirectTo: 'setups',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'setups',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebAppFeatureViewRoutingModule {}
