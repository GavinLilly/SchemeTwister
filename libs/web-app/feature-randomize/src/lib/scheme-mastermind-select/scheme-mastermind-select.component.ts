import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  Mastermind,
  SchemeMinusRules,
  CARD_TYPE,
  LibTwister,
  NumPlayers,
  SoloBannedScheme,
  CardType,
} from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

import { randomizePageActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { INumPlayersState } from '../+state/reducers/num-players.reducer';
import { selectLibTwister } from '../+state/selectors/game-sets.selectors';
import {
  selectDefinedMastermind,
  selectDefinedScheme,
} from '../+state/selectors/game-setup-scheme.selectors';

@Component({
  selector: 'schemetwister-scheme-select',
  templateUrl: './scheme-mastermind-select.component.html',
  styleUrls: ['./scheme-mastermind-select.component.scss'],
})
export class SchemeMastermindSelectComponent implements OnInit {
  @Input() itemType!: CardType;
  availableItems!: (SchemeMinusRules | Mastermind)[];
  selectedItem = '**Random**';
  numPlayers$: Observable<NumPlayers> = this._store.select(
    (state) => state.numPlayers.numPlayers
  );
  libTwister$: Observable<LibTwister> = this._store.select(selectLibTwister);
  definedScheme$ = this._store.select(selectDefinedScheme);
  definedMastermind$ = this._store.select(selectDefinedMastermind);

  constructor(
    public activeModal: NgbActiveModal,
    private _store: Store<{
      numPlayers: INumPlayersState;
      setupState: IGameSetupState;
    }>
  ) {}

  ngOnInit(): void {
    this.numPlayers$.subscribe((value: number) => {
      if (this.itemType === CARD_TYPE.scheme && value === 1) {
        this.availableItems = this.availableItems.filter(
          (scheme) => !(scheme instanceof SoloBannedScheme)
        );
      }
    });

    this.libTwister$.subscribe((value: LibTwister) => {
      this.availableItems =
        this.itemType === CARD_TYPE.scheme
          ? value.schemeFactory.availableCards
          : value.stores.mastermindStore.availableCards;

      this.availableItems.sort((a, b) => a.name.localeCompare(b.name));
    });

    if (this.itemType === CARD_TYPE.scheme) {
      this._subscribeToDefined(this.definedScheme$);
    } else if (this.itemType === CARD_TYPE.mastermind) {
      this._subscribeToDefined(this.definedMastermind$);
    }
  }

  setItem(value: string) {
    const item = this.availableItems.find((card) => card.id === value);
    if (this.itemType === CARD_TYPE.scheme) {
      if (item !== undefined) {
        this._store.dispatch(
          randomizePageActions.setDefinedScheme({
            scheme: item as SchemeMinusRules,
          })
        );
      } else {
        this._store.dispatch(randomizePageActions.resetDefinedScheme());
      }
    } else if (this.itemType === CARD_TYPE.mastermind) {
      if (item !== undefined) {
        this._store.dispatch(
          randomizePageActions.setDefinedMastermind({
            mastermind: item as Mastermind,
          })
        );
      } else {
        this._store.dispatch(randomizePageActions.resetDefinedMastermind());
      }
    }
  }

  private _subscribeToDefined(
    observable: Observable<SchemeMinusRules | Mastermind | undefined>
  ) {
    observable.subscribe((value) => {
      if (value !== undefined) {
        this.selectedItem = value.id;
      }
    });
  }
}
