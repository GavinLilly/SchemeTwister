import { Component, inject } from '@angular/core';

import { UpdateService } from './update.service';

@Component({
    selector: 'schemetwister-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {  private readonly _sw = inject(UpdateService);

}
