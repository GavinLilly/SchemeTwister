import { Component, OnInit } from '@angular/core';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CardType } from 'libtwister';

import { GameSetSelectComponent } from '../game-set-select/game-set-select.component';
import { GameSetupStoreService } from '../game-setup-store.service';
import { SchemeMastermindSelectComponent } from '../scheme-mastermind-select/scheme-mastermind-select.component';
@Component({
  selector: 'app-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;
  faCog = faCog;
  faLock = faLock;
  schemeLocked = false;
  mastermindLocked = false;
  isAdvancedSolo = false;

  villainDeck = 'Villain Deck';
  heroDeck = 'Hero Deck';

  constructor(
    public gameSetupStore: GameSetupStoreService,
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
    this.gameSetupStore.advancedSolo.subscribe(
      (value) => (this.isAdvancedSolo = value)
    );
    this.generateDecks();
  }

  generateDecks() {
    this.gameSetupStore.shuffle();
  }

  showAdvancedSolo(): boolean {
    return this.numPlayers == 1;
  }

  setPlayers() {
    this.gameSetupStore.setNumPlayers(this.numPlayers);
  }

  setAdvancedSolo() {
    this.gameSetupStore.setAdvancedSolo(this.isAdvancedSolo);
    this.gameSetupStore.shuffle();
  }

  pickGameSets() {
    this.modalService.open(GameSetSelectComponent);
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
