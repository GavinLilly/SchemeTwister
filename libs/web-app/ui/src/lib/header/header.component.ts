import { Component } from '@angular/core';

@Component({
    selector: 'schemetwister-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  public isMenuCollapsed = true;

  public links: { name: string; link: string }[] = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Randomize',
      link: '/randomize',
    },
    {
      name: 'View setups',
      link: '/view/setups',
    },
  ];
}
