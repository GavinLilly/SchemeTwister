import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'schemetwister-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [RouterLink, NgbCollapse, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase]
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
