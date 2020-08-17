import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHero } from "@legendizer/legendizer-lib";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

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
