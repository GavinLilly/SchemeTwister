import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UpdateService } from './update.service';

import { FooterComponent, HeaderComponent } from '@schemetwister/web-app/ui';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'schemetwister-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class AppComponent {
  private readonly _sw = inject(UpdateService);
  firestore: Firestore = inject(Firestore);
}
