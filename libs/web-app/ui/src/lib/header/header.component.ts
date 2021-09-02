import { Component } from '@angular/core';

@Component({
  selector: 'schemetwister-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isMenuCollapsed = true;
}
