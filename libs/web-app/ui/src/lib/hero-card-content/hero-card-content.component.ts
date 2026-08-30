import { Component, Input } from '@angular/core';

import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

import { Hero } from '@schemetwister/libtwister';


@Component({
    selector: 'schemetwister-hero-card-content',
    templateUrl: './hero-card-content.component.html',
    imports: [BaseCardContentComponent]
})
export class HeroCardContentComponent {
  @Input() hero!: Hero;
}
