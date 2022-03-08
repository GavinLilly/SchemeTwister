import { Component, Input } from '@angular/core';
import { IBadGuyCard } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-badguy-card-content',
  templateUrl: './badguy-card-content.component.html',
  styleUrls: ['./badguy-card-content.component.scss'],
})
export class BadguyCardContentComponent {
  @Input() card!: IBadGuyCard;
}
