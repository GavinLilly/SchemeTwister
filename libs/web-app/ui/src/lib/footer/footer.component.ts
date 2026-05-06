import { Component } from '@angular/core';

import { version } from './version';

@Component({
    selector: 'schemetwister-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public version: string = version;
}
