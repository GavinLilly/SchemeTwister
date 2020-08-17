import { Component, OnInit } from '@angular/core';
import { GameSetupStore } from '../game-setup-store';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;

  constructor(public gameSetupStore: GameSetupStore) {
  }

  ngOnInit(): void {
    this.generateDecks();
  }

  generateDecks() {
    console.log(this.numPlayers)
    this.gameSetupStore.shuffle(this.numPlayers);
  }
}
