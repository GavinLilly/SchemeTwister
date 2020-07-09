import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemeComponent } from './scheme/scheme.component';
import { MastermindComponent } from './mastermind/mastermind.component';
import { SetupComponent } from './setup/setup.component';
import { VillainGroupComponent } from './villain-group/villain-group.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  declarations: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent,
    SetupComponent,
    VillainGroupComponent,
  ],
  exports: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent,
    SetupComponent,
    VillainGroupComponent
  ],
})
export class LegendizerUiModule {}
