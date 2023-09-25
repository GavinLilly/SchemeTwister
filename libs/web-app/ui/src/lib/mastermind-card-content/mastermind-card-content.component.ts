import { Component, Input } from '@angular/core';
import { Mastermind, TransformingMastermind } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-mastermind-card-content',
  templateUrl: './mastermind-card-content.component.html',
  styleUrls: ['./mastermind-card-content.component.scss'],
})
export class MastermindCardContentComponent {
  @Input() mastermind!: Mastermind | TransformingMastermind;
}
