import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class LegendizerUiModule {}
