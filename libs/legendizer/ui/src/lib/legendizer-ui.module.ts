import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SchemeComponent } from './scheme/scheme.component';
import { MastermindComponent } from './mastermind/mastermind.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  declarations: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent
  ],
  exports: [
    HeaderComponent,
    SchemeComponent,
    MastermindComponent
  ],
})
export class LegendizerUiModule {}
