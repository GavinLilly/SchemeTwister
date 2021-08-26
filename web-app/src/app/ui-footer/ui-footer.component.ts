import { Component, OnInit } from '@angular/core';

import { version } from './version';

@Component({
  selector: 'app-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.scss'],
})
export class UiFooterComponent {
  public version: string = version;
}
