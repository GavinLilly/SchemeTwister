import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CardType,
  GameSetup,
  IMastermind,
  IScheme,
  Masterminds,
  Schemes,
} from 'libtwister';

import { GameSetupStoreService } from '../game-setup-store.service';

@Component({
  selector: 'app-scheme-mastermind-select',
  templateUrl: './scheme-mastermind-select.component.html',
  styleUrls: ['./scheme-mastermind-select.component.scss'],
})
export class SchemeMastermindSelectComponent implements OnInit {
  @Input() itemType!: CardType;
  availableItems!: (IScheme | IMastermind)[];
  selectedItem!: string;

  constructor(
    public GameSetupStoreService: GameSetupStoreService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.GameSetupStoreService.gameSets.subscribe((value) => {
      if (this.itemType === CardType.SCHEME) {
        this.availableItems = Schemes.ALL.filter((item) =>
          value.includes(item.gameSet)
        );
        this.GameSetupStoreService.definedScheme.subscribe((scheme) => {
          if (scheme.random) this.selectedItem = '**Random**';
          else this.selectedItem = (scheme.definedItem as IScheme).id;
        });
      } else if (this.itemType === CardType.MASTERMIND) {
        this.availableItems = Masterminds.ALL.filter((item) =>
          value.includes(item.gameSet)
        );
        this.GameSetupStoreService.definedMastermind.subscribe((mastermind) => {
          if (mastermind.random) this.selectedItem = '**Random**';
          else this.selectedItem = (mastermind.definedItem as IMastermind).id;
        });
      }
    });

    this.GameSetupStoreService.numPlayers.subscribe((value: number) => {
      if (this.itemType === CardType.SCHEME) {
        if (Number(value) === 1) {
          this.availableItems = this.availableItems.filter((scheme) => {
            return !GameSetup.soloBannedSchemes.includes(scheme as IScheme);
          });
        }
      }
    });
  }

  setItem() {
    if (this.selectedItem !== '**Random**')
      this.GameSetupStoreService.setDefinedItem(
        {
          random: false,
          definedItem: this.availableItems.find(
            (value) => value.id === this.selectedItem
          ),
        },
        this.itemType
      );
    else
      this.GameSetupStoreService.setDefinedItem(
        { random: true },
        this.itemType
      );
  }
}
