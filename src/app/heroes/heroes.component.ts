import { Component, OnInit } from '@angular/core';
import { Heroes } from "src/app/data";
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = Array<Hero>(Object.values(Heroes).length);

  constructor() { }

  ngOnInit(): void {
    this.heroes = Object.values(Heroes);
  }

}
