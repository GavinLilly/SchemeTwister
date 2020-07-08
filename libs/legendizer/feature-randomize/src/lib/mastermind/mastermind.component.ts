import { Component, OnInit } from '@angular/core';
import { MastermindService } from '../mastermind.service';
import { Mastermind } from '@legendizer/shared/mastermind/types';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'legendizer-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss'],
})
export class MastermindComponent extends BaseComponent<Mastermind> implements OnInit {
  constructor(private mastermindService: MastermindService) {
    super(mastermindService);
  }

  ngOnInit(): void {}
}
