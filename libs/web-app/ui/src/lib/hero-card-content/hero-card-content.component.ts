import { Component, Input } from '@angular/core';
import { Hero } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-hero-card-content',
  templateUrl: './hero-card-content.component.html',
  styleUrls: ['./hero-card-content.component.scss'],
})
export class HeroCardContentComponent {
  @Input() hero!: Hero;
}
