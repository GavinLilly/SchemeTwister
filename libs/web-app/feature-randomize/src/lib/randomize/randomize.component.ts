import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GameSetSelectComponent } from '../game-set-select/game-set-select.component';
import { GameSetupStore } from '../game-setup-store';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers: number;
  faCog = faCog;

  constructor(
    public gameSetupStore: GameSetupStore,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.gameSetupStore.numPlayers.subscribe(
      (value) => (this.numPlayers = value)
    );
    this.generateDecks();
  }

  generateDecks() {
    this.gameSetupStore.shuffle();
  }

  setPlayers() {
    this.gameSetupStore.setNumPlayers(this.numPlayers);
  }

  pickGameSets() {
    const modalRef = this.modalService.open(GameSetSelectComponent);
  }
}
