import { Component, Input } from '@angular/core';
import {
  Mastermind,
  AdaptingMastermind,
  TransformingMastermind,
} from '@schemetwister/libtwister';

import { BadguyCardContentComponent } from '../badguy-card-content/badguy-card-content.component';
import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

@Component({
    selector: 'schemetwister-mastermind-card-content',
    templateUrl: './mastermind-card-content.component.html',
    styleUrls: ['./mastermind-card-content.component.scss'],
    imports: [BadguyCardContentComponent, BaseCardContentComponent]
})
export class MastermindCardContentComponent {
  @Input() mastermind!:
    | Mastermind
    | TransformingMastermind
    | AdaptingMastermind;

  isAdapting(t: Mastermind): t is AdaptingMastermind {
    return t instanceof AdaptingMastermind;
  }

  isTransforming(t: Mastermind): t is TransformingMastermind {
    return t instanceof TransformingMastermind;
  }
}
