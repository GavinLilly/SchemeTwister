import { Component, OnInit, Input } from '@angular/core';
import { IMastermind } from "@legendizer/shared/mastermind/types";

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
