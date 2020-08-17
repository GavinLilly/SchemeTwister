import { Component, OnInit } from '@angular/core';
import { GameSets, IGameSet } from "@legendizer/legendizer-lib";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GameSetupStore } from '../game-setup-store';

@Component({
  selector: 'legendizer-game-set-select',
  templateUrl: './game-set-select.component.html',
  styleUrls: ['./game-set-select.component.scss']
})
export class GameSetSelectComponent implements OnInit {

  selectedGameSets: IGameSet[];
  gameSets: IGameSet[] = GameSets.ALL;

  constructor(public gameSetupStore: GameSetupStore, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.gameSetupStore.gameSets.subscribe((next) => {
      this.selectedGameSets = next;
    });
  }

  setGameSets() {
    this.gameSetupStore.setGameSets(this.selectedGameSets)
  }

}
