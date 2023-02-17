import { Component, Input } from '@angular/core';
import { IHenchmen } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-henchmen-card-content',
  templateUrl: './henchmen-card-content.component.html',
  styleUrls: ['./henchmen-card-content.component.scss'],
})
export class HenchmenCardContentComponent {
  @Input() henchmen!: IHenchmen;
}