import { Component, Input } from '@angular/core';
import { IPlayableObject } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-base-card-content',
  templateUrl: './base-card-content.component.html',
  styleUrls: ['./base-card-content.component.scss'],
})
export class BaseCardContentComponent<T extends IPlayableObject> {
  @Input() card!: T;
}
