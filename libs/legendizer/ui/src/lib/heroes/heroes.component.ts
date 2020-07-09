import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "@legendizer/shared/hero/types";

@Component({
  selector: 'legendizer-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void { }

}
