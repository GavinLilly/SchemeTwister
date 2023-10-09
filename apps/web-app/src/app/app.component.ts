import { Component } from '@angular/core';

import { UpdateService } from './update.service';

@Component({
  selector: 'schemetwister-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _sw: UpdateService) {
    // check the service worker for updates
  }
}
