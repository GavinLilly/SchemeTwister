import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IHero } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  @Input() hero!: IHero;
  @Output() heroID = new EventEmitter<string>();
  faRedo = faRedo;

  shuffle() {
    this.heroID.emit(this.hero.id);
  }
}
