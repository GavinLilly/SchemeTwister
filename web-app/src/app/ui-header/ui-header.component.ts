import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss'],
})
export class UiHeaderComponent {
  public isMenuCollapsed = true;
}
