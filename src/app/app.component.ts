import { BreakpointObserver } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'schemetwister-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    RouterLinkWithHref,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;

  constructor(private _observer: BreakpointObserver) {}

  ngAfterViewInit(): void {
    this._observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
  }
}
