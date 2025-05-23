import { Component, Input } from '@angular/core';
import { Hero } from '@schemetwister/libtwister';

@Component({
    selector: 'schemetwister-hero-card-content',
    templateUrl: './hero-card-content.component.html',
    standalone: false
})
export class HeroCardContentComponent {
  @Input() hero!: Hero;
}
