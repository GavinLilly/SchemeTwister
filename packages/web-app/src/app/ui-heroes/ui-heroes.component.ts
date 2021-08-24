import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IHero } from 'libtwister';

@Component({
  selector: 'app-ui-heroes',
  templateUrl: './ui-heroes.component.html',
  styleUrls: ['./ui-heroes.component.scss'],
})
export class UiHeroesComponent {
  @Input() hero!: IHero;
  @Output() heroID = new EventEmitter<string>();
  faRedo = faRedo;

  shuffle() {
    this.heroID.emit(this.hero.id);
  }
}
