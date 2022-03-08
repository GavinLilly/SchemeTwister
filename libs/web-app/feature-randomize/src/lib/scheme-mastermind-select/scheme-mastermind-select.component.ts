import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  AbstractMastermind,
  AbstractScheme,
  CardType,
  LibTwister,
  NumPlayers,
  SoloBannedScheme,
} from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

import { INumPlayersState } from '../+state/reducers/num-players.reducer';

@Component({
  selector: 'schemetwister-scheme-select',
  templateUrl: './scheme-mastermind-select.component.html',
  styleUrls: ['./scheme-mastermind-select.component.scss'],
})
export class SchemeMastermindSelectComponent implements OnInit {
  @Input() itemType!: CardType;
  @Input() libTwister!: LibTwister;
  availableItems!: (AbstractScheme | AbstractMastermind)[];
  selectedItem = '**Random**';
  numPlayers$: Observable<NumPlayers> = this._store.select(
    (state) => state.numPlayers.numPlayers
  );

  constructor(
    public activeModal: NgbActiveModal,
    private _store: Store<{
      numPlayers: INumPlayersState;
    }>
  ) {}

  ngOnInit(): void {
    if (this.itemType === CardType.SCHEME) {
      this.availableItems = this.libTwister.schemeFactory.availableCards;
    } else if (this.itemType === CardType.MASTERMIND) {
      this.availableItems = this.libTwister.mastermindStore.availableCards;
    }

    this.availableItems.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.numPlayers$.subscribe((value: number) => {
      if (this.itemType === CardType.SCHEME) {
        if (Number(value) === 1) {
          this.availableItems = this.availableItems.filter(
            (scheme) => !(scheme instanceof SoloBannedScheme)
          );
        }
      }
    });
  }

  setItem() {
    // if (this.selectedItem !== '**Random**')
    //   this.gameSetupStore.setDefinedItem(
    //     {
    //       random: false,
    //       definedItem: this.availableItems.find(
    //         (value) => value.id === this.selectedItem
    //       ),
    //     },
    //     this.itemType
    //   );
    // else this.gameSetupStore.setDefinedItem({ random: true }, this.itemType);
  }
}
