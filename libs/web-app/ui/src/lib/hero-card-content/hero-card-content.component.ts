import { Component, Input } from '@angular/core';
import { Hero } from '@schemetwister/libtwister';
import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

@Component({
    selector: 'schemetwister-hero-card-content',
    templateUrl: './hero-card-content.component.html',
    imports: [BaseCardContentComponent]
})
export class HeroCardContentComponent {
  @Input() hero!: Hero;
}
