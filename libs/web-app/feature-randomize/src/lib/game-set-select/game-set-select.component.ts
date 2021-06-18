import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { GameSets, GameSetSize, IGameSet } from '@schemetwister/libtwister';

import { GameSetupStore } from '../game-setup-store';

@Component({
  selector: 'schemetwister-game-set-select',
  templateUrl: './game-set-select.component.html',
  styleUrls: ['./game-set-select.component.scss'],
})
export class GameSetSelectComponent implements OnInit {
  selectedGameSets: IGameSet[] = [];
  coreSets: IGameSet[] = GameSets.ALL.filter(
    (item) => item.size === GameSetSize.CORE
  );
  lrgSets: IGameSet[] = GameSets.ALL.filter(
    (item) => item.size === GameSetSize.LARGE
  );
  medSets: IGameSet[] = GameSets.ALL.filter(
    (item) => item.size === GameSetSize.MEDIUM
  );
  smlSets: IGameSet[] = GameSets.ALL.filter(
    (item) => item.size === GameSetSize.SMALL
  );

  constructor(
    public gameSetupStore: GameSetupStore,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.gameSetupStore.gameSets.subscribe(
      (value) => (this.selectedGameSets = value)
    );
  }

  setGameSets() {
    this.gameSetupStore.setGameSets(this.selectedGameSets);
  }

  getPickerSize(): number {
    return Math.min(
      this.coreSets.length +
        this.lrgSets.length +
        this.medSets.length +
        this.smlSets.length +
        4,
      15
    );
  }
}
