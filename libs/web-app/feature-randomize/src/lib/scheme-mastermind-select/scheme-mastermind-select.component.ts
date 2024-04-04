import {
  Component,
  Inject,
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
  NumPlayers,
  SoloBannedScheme,
  CardType,
  MastermindWithEpic,
  MastermindType,
  ISeries,
  EpicMastermind,
} from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { randomizePageActions } from '../+state/actions/game-setup.actions';
import { IGameSetsState } from '../+state/reducers/game-sets.reducer';
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
})
export class SchemeMastermindSelectComponent implements OnInit {
  @Input() itemType!: CardType;
  availableItems!: (SchemeMinusRules | MastermindType)[];
  selectedItem = '**Random**';

  private _definedScheme: Signal<SchemeMinusRules | undefined> =
    this._store.selectSignal(selectDefinedScheme);
  private _definedMastermind: Signal<MastermindType | undefined> =
    this._store.selectSignal(selectDefinedMastermind);
  private _numPlayers: Signal<NumPlayers> = this._store.selectSignal(
    (state) => state.numPlayers.numPlayers
  );
  private _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );

  constructor(
    public activeModal: NgbActiveModal,
    private _store: Store<{
      numPlayers: INumPlayersState;
      setupState: IGameSetupState;
      gameSets: IGameSetsState;
    }>,
    private _injector: Injector,
    @Inject(SERIES_REGISTER_TOKEN) private _seriesRegister: ISeries[]
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
        let comparer = (
          a: SchemeMinusRules | MastermindType,
          b: SchemeMinusRules | MastermindType
        ) => a.name.localeCompare(b.name);

        if (this.itemType === CARD_TYPE.scheme) {
          this.availableItems = this._libTwister().schemeFactory.availableCards;
        } else if (this.itemType === CARD_TYPE.mastermind) {
          const allMasterminds =
            this._libTwister().stores.mastermindStore.availableCards;
          this.availableItems = allMasterminds.flatMap((mastermind) => {
            if (mastermind instanceof MastermindWithEpic) {
              return [mastermind, mastermind.epic];
            }
            return [mastermind];
          });

          comparer = SchemeMastermindSelectComponent._mastermindComparer;
        }
        this.availableItems.sort(comparer);
      },
      { injector: this._injector }
    );

    effect(
      () => {
        const scheme = this._definedScheme();
        if (this.itemType === CARD_TYPE.scheme && scheme !== undefined) {
          this.selectedItem = scheme.id;
        }
      },
      { injector: this._injector }
    );

    effect(
      () => {
        const mastermind = this._definedMastermind();
        if (
          this.itemType === CARD_TYPE.mastermind &&
          mastermind !== undefined
        ) {
          this.selectedItem = mastermind.id;
        }
      },
      { injector: this._injector }
    );
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

  private static _mastermindComparer(
    a: SchemeMinusRules | MastermindType,
    b: SchemeMinusRules | MastermindType
  ) {
    if (!(a instanceof EpicMastermind) && b instanceof EpicMastermind) {
      return -1;
    } else if (a instanceof EpicMastermind && !(b instanceof EpicMastermind)) {
      return 1;
    }

    return a.name.localeCompare(b.name);
  }
}
