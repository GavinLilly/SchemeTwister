import { Routes } from '@angular/router';
import { LatestSetupsComponent } from './latest-setups/latest-setups.component';

export const VIEW_ROUTES: Routes = [
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
