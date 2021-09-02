import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { GameSetSize, GameSets, IGameSet } from '@schemetwister/libtwister';

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

  gameSelectError = '';

  constructor(
    public gameSetupStore: GameSetupStore,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.gameSetupStore.gameSets.subscribe(
      (value) => (this.selectedGameSets = value),
      (error) => (this.gameSelectError = error)
    );
  }

  setGameSets() {
    if (
      this.selectedGameSets.every((item) => {
        return [
          GameSetSize.SMALL,
          GameSetSize.MEDIUM,
          GameSetSize.PROMO,
        ].includes(item.size);
      })
    )
      this.gameSelectError =
        'At least one core box or big box game set must be chosen.';
    else {
      this.gameSetupStore.setGameSets(this.selectedGameSets);
      this.activeModal.close('Close click');
    }
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
