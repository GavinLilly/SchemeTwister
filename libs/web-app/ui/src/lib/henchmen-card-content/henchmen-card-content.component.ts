import { Component, Input } from '@angular/core';
import { Henchmen } from '@schemetwister/libtwister';

import { BadguyCardContentComponent } from '../badguy-card-content/badguy-card-content.component';
import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

@Component({
  selector: 'schemetwister-henchmen-card-content',
  templateUrl: './henchmen-card-content.component.html',
  imports: [BadguyCardContentComponent, BaseCardContentComponent],
})
export class HenchmenCardContentComponent {
  @Input() henchmen!: Henchmen;
}
