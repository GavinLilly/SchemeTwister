import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  AbstractMastermind,
  SchemeMinusRules,
  CardType,
  LibTwister,
  NumPlayers,
  SoloBannedScheme,
} from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

import {
  resetDefinedMastermind,
  resetDefinedScheme,
  setDefinedMastermind,
  setDefinedScheme,
} from '../+state/actions/game-setup.actions';
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
  availableItems!: (SchemeMinusRules | AbstractMastermind)[];
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
      if (this.itemType === CardType.SCHEME) {
        if (Number(value) === 1) {
          this.availableItems = this.availableItems.filter(
            (scheme) => !(scheme instanceof SoloBannedScheme)
          );
        }
      }
    });

    this.libTwister$.subscribe((value: LibTwister) => {
      if (this.itemType === CardType.SCHEME) {
        this.availableItems = value.schemeFactory.availableCards;
      } else if (this.itemType === CardType.MASTERMIND) {
        this.availableItems = value.mastermindStore.availableCards;
      }

      this.availableItems.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    });

    if (this.itemType === CardType.SCHEME) {
      this._subscribeToDefined(this.definedScheme$);
    } else if (this.itemType === CardType.MASTERMIND) {
      this._subscribeToDefined(this.definedMastermind$);
    }
  }

  setItem(value: string) {
    const item = this.availableItems.find((card) => card.id === value);
    if (this.itemType === CardType.SCHEME) {
      if (item !== undefined) {
        this._store.dispatch(
          setDefinedScheme({ scheme: item as SchemeMinusRules })
        );
      } else {
        this._store.dispatch(resetDefinedScheme());
      }
    } else if (this.itemType === CardType.MASTERMIND) {
      if (item !== undefined) {
        this._store.dispatch(
          setDefinedMastermind({ mastermind: item as AbstractMastermind })
        );
      } else {
        this._store.dispatch(resetDefinedMastermind());
      }
    }
  }

  private _subscribeToDefined(
    observable: Observable<SchemeMinusRules | AbstractMastermind | undefined>
  ) {
    observable.subscribe((value) => {
      if (value !== undefined) {
        this.selectedItem = value.id;
      }
    });
  }
}
