import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
    selector: 'schemetwister-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [RouterLink, NgFor, MatToolbarModule, MatButtonModule]
})
export class HeaderComponent {
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
