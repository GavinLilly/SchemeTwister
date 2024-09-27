import { Component } from '@angular/core';

import { UpdateService } from './update.service';

@Component({
  selector: 'schemetwister-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly _sw: UpdateService) {
    // check the service worker for updates
  }
}
