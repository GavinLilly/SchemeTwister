import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CardType,
  IMastermind,
  IScheme,
  Masterminds,
  Schemes,
} from '@schemetwister/libtwister';

import { GameSetupStore } from '../game-setup-store';

@Component({
  selector: 'schemetwister-scheme-select',
  templateUrl: './scheme-mastermind-select.component.html',
  styleUrls: ['./scheme-mastermind-select.component.scss'],
})
export class SchemeMastermindSelectComponent implements OnInit {
  @Input() itemType!: CardType;
  availableItems!: (IScheme | IMastermind)[];
  selectedItem!: string;

  constructor(
    public gameSetupStore: GameSetupStore,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.gameSetupStore.gameSets.subscribe((value) => {
      if (this.itemType === CardType.SCHEME) {
        this.availableItems = Schemes.ALL.filter((item) =>
          value.includes(item.gameSet)
        );
        this.gameSetupStore.definedScheme.subscribe((scheme) => {
          if (scheme.random) this.selectedItem = '**Random**';
          else this.selectedItem = (scheme.definedItem as IScheme).id;
        });
      } else if (this.itemType === CardType.MASTERMIND) {
        this.availableItems = Masterminds.ALL.filter((item) =>
          value.includes(item.gameSet)
        );
        this.gameSetupStore.definedMastermind.subscribe((mastermind) => {
          if (mastermind.random) this.selectedItem = '**Random**';
          else this.selectedItem = (mastermind.definedItem as IMastermind).id;
        });
      }
    });
  }

  setItem() {
    if (this.selectedItem !== '**Random**')
      this.gameSetupStore.setDefinedItem(
        {
          random: false,
          definedItem: this.availableItems.find(
            (value) => value.id === this.selectedItem
          ),
        },
        this.itemType
      );
    else this.gameSetupStore.setDefinedItem({ random: true }, this.itemType);
  }
}
