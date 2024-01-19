import {
  Component,
  Injector,
  Input,
  OnInit,
  Signal,
  effect,
} from '@angular/core';
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
  TransformingMastermind,
} from '@schemetwister/libtwister';

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

  private _libTwister: Signal<LibTwister> =
    this._store.selectSignal(selectLibTwister);
  private _definedScheme: Signal<SchemeMinusRules | undefined> =
    this._store.selectSignal(selectDefinedScheme);
  private _definedMastermind: Signal<
    Mastermind | TransformingMastermind | undefined
  > = this._store.selectSignal(selectDefinedMastermind);
  private _numPlayers: Signal<NumPlayers> = this._store.selectSignal(
    (state) => state.numPlayers.numPlayers
  );

  constructor(
    public activeModal: NgbActiveModal,
    private _store: Store<{
      numPlayers: INumPlayersState;
      setupState: IGameSetupState;
    }>,
    private _injector: Injector
  ) {}

  ngOnInit(): void {
    effect(
      () => {
        if (this.itemType === CARD_TYPE.scheme && this._numPlayers() === 1) {
          this.availableItems = this.availableItems.filter(
            (scheme) => !(scheme instanceof SoloBannedScheme)
          );
        }
      },
      { injector: this._injector }
    );

    effect(
      () => {
        this.availableItems =
          this.itemType === CARD_TYPE.scheme
            ? this._libTwister().schemeFactory.availableCards
            : this._libTwister().stores.mastermindStore.availableCards;

        this.availableItems.sort((a, b) => a.name.localeCompare(b.name));
      },
      { injector: this._injector }
    );

    effect(() => {
      const scheme = this._definedScheme();
      if (this.itemType === CARD_TYPE.scheme && scheme !== undefined) {
        this.selectedItem = scheme.id;
      }
    });

    effect(() => {
      const mastermind = this._definedMastermind();
      if (this.itemType === CARD_TYPE.mastermind && mastermind !== undefined) {
        this.selectedItem = mastermind.id;
      }
    });
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
}
