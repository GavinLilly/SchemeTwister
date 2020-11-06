import { Component, OnInit } from '@angular/core';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GameSetSelectComponent } from '../game-set-select/game-set-select.component';
import { GameSetupStore } from '../game-setup-store';
import { SchemeSelectComponent } from '../scheme-select/scheme-select.component';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;
  faCog = faCog;
  faLock = faLock;
  schemeLocked = false;

  constructor(
    public gameSetupStore: GameSetupStore,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.gameSetupStore.numPlayers.subscribe(
      (value) => (this.numPlayers = value)
    );
    this.gameSetupStore.definedScheme.subscribe(
      (value) => (this.schemeLocked = !value.random)
    )
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

  pickScheme() {
    const modalRef = this.modalService.open(SchemeSelectComponent);
  }
}
