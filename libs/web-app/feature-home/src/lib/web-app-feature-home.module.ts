import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: HomePageComponent }
        ]),
        HomePageComponent,
    ],
})
export class WebAppFeatureHomeModule {}
