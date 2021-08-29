import { Component, Input } from '@angular/core';

import { IMastermind } from 'libtwister';

@Component({
  selector: 'app-ui-mastermind',
  templateUrl: './ui-mastermind.component.html',
  styleUrls: ['./ui-mastermind.component.scss'],
})
export class UiMastermindComponent {
  @Input() mastermind!: IMastermind;
}
