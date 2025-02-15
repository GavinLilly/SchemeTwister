import { Component, Input } from '@angular/core';
import { IFightable } from '@schemetwister/libtwister';

@Component({
    selector: 'schemetwister-badguy-card-content',
    templateUrl: './badguy-card-content.component.html',
    standalone: false
})
export class BadguyCardContentComponent {
  @Input() card!: IFightable;
}
