import { Component, Input } from '@angular/core';
import { Henchmen } from '@schemetwister/libtwister';

@Component({
    selector: 'schemetwister-henchmen-card-content',
    templateUrl: './henchmen-card-content.component.html',
    standalone: false
})
export class HenchmenCardContentComponent {
  @Input() henchmen!: Henchmen;
}
