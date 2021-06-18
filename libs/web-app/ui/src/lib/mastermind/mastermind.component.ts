import { Component, Input, OnInit } from '@angular/core';

import { IMastermind } from "@schemetwister/libtwister";

@Component({
  selector: 'schemetwister-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent implements OnInit {
  @Input() mastermind!: IMastermind

  constructor() { }

  ngOnInit(): void {
  }

}
