import { Component, inject } from '@angular/core';

import { UpdateService } from './update.service';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'schemetwister-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet]
})
export class AppComponent {  private readonly _sw = inject(UpdateService);

}
