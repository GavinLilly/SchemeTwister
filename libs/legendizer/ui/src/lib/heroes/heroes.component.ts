import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroModel } from "@legendizer/shared/hero/types";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'legendizer-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input() hero: HeroModel;
  @Output() heroID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() { }

  ngOnInit(): void { }

  shuffle() {
    this.heroID.emit(this.hero.id);
  }

}
