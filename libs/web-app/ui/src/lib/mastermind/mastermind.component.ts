import { Component, Input } from '@angular/core';

import { IMastermind } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss'],
})
export class MastermindComponent {
  @Input() mastermind!: IMastermind;
}
