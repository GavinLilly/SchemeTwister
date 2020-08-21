import { Component, Input, OnInit } from '@angular/core';

import { IMastermind } from "@legendizer/legendizer-lib";

@Component({
  selector: 'legendizer-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent implements OnInit {
  @Input() mastermind: IMastermind

  constructor() { }

  ngOnInit(): void {
  }

}
