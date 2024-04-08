import { Component, Input } from '@angular/core';
import {
  Mastermind,
  AdaptingMastermind,
  TransformingMastermind,
} from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-mastermind-card-content',
  templateUrl: './mastermind-card-content.component.html',
  styleUrls: ['./mastermind-card-content.component.scss'],
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
