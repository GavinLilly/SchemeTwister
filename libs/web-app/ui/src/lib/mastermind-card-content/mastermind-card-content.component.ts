import { Component, Input } from '@angular/core';
import {
  Mastermind,
  MultiMastermind,
  TransformingMastermind,
} from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-mastermind-card-content',
  templateUrl: './mastermind-card-content.component.html',
  styleUrls: ['./mastermind-card-content.component.scss'],
})
export class MastermindCardContentComponent {
  @Input() mastermind!: Mastermind | TransformingMastermind | MultiMastermind;

  isMulti(t: Mastermind): t is MultiMastermind {
    return t instanceof MultiMastermind;
  }

  isTransforming(t: Mastermind): t is TransformingMastermind {
    return t instanceof TransformingMastermind;
  }
}
