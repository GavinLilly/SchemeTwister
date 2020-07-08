import { Component, OnInit, ViewChild } from '@angular/core';
import { SchemeComponent } from '../scheme/scheme.component';
import { MastermindComponent } from '../mastermind/mastermind.component';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss']
})
export class RandomizeComponent implements OnInit {
  @ViewChild(SchemeComponent)
  private schemeComponent: SchemeComponent;

  @ViewChild(MastermindComponent)
  private mastermindComponent: MastermindComponent;

  constructor() { }

  ngOnInit(): void {
  }

  randomize() {
    this.schemeComponent.randomize();
    this.mastermindComponent.randomize();
  }

}
