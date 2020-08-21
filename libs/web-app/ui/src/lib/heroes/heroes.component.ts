import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import { IHero } from "@legendizer/legendizer-lib";

@Component({
  selector: 'legendizer-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input() hero: IHero;
  @Output() heroID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() { }

  ngOnInit(): void { }

  shuffle() {
    this.heroID.emit(this.hero.id);
  }

}
