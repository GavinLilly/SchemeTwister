import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IScheme, Schemes } from '@legendizer/legendizer-lib';

import { GameSetupStore } from '../game-setup-store';

@Component({
  selector: 'legendizer-scheme-select',
  templateUrl: './scheme-select.component.html',
  styleUrls: ['./scheme-select.component.scss'],
})
export class SchemeSelectComponent implements OnInit {
  availableSchemes: IScheme[] = [];
  selectedScheme!: string;

  constructor(
    public gameSetupStore: GameSetupStore,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.gameSetupStore.gameSets.subscribe((value) => {
      this.availableSchemes = Schemes.ALL.filter((item) =>
        value.includes(item.gameSet)
      );
    });
    this.gameSetupStore.definedScheme.subscribe((value) => {
      if (value.random) this.selectedScheme = '**Random**';
      else this.selectedScheme = (value.definedItem as IScheme).id;
    });
  }

  setScheme() {
    if (this.selectedScheme !== '**Random**')
      this.gameSetupStore.setScheme({
        random: false,
        definedItem: Schemes.ALL.find(
          (value) => value.id === this.selectedScheme
        ),
      });
    else this.gameSetupStore.setScheme({ random: true });
  }
}
