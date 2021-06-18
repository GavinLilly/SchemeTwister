import { Component, OnInit } from '@angular/core';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CardType } from '@schemetwister/libtwister';

import { GameSetSelectComponent } from '../game-set-select/game-set-select.component';
import { GameSetupStore } from '../game-setup-store';
import { SchemeMastermindSelectComponent } from '../scheme-mastermind-select/scheme-mastermind-select.component';

@Component({
  selector: 'schemetwister-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;
  faCog = faCog;
  faLock = faLock;
  schemeLocked = false;
  mastermindLocked = false;

  villainDeck = 'Villain Deck';
  heroDeck = 'Hero Deck';

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
    );
    this.gameSetupStore.definedMastermind.subscribe(
      (value) => (this.mastermindLocked = !value.random)
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

  pickScheme() {
    const modalRef = this.modalService.open(SchemeMastermindSelectComponent);
    modalRef.componentInstance.itemType = CardType.SCHEME;
  }

  pickMastermind() {
    const modalRef = this.modalService.open(SchemeMastermindSelectComponent);
    modalRef.componentInstance.itemType = CardType.MASTERMIND;
  }

  reset() {
    this.gameSetupStore.setDefinedItem({ random: true }, CardType.SCHEME);
    this.gameSetupStore.setDefinedItem({ random: true }, CardType.MASTERMIND);
  }
}
