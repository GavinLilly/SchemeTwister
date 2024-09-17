import { Component, Inject, Signal, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { NgbAccordionModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  CARD_TYPE,
  ISeries,
  Scheme,
  SchemeMinusRules,
  SoloBannedScheme,
} from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import {
  ModalSelectorComponent,
  WebAppUiModule,
} from '@schemetwister/web-app/ui';

import { randomizePageActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { INumPlayersState } from '../+state/reducers/num-players.reducer';
import { selectLibTwister } from '../+state/selectors/game-sets.selectors';
import {
  selectDefinedScheme,
  selectGameSetupScheme,
  selectIsDefinedScheme,
} from '../+state/selectors/game-setup-scheme.selectors';

@Component({
  selector: 'schemetwister-scheme-card',
  standalone: true,
  imports: [WebAppUiModule, FontAwesomeModule, NgbAccordionModule],
  templateUrl: './scheme-card.component.html',
  styleUrls: ['./scheme-card.component.scss'],
})
export class SchemeCardComponent {
  private _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );

  private _availableCards = computed(
    () => this._libTwister().schemeFactory.availableCards
  );

  schemeLocked: Signal<boolean> = this._store.selectSignal(
    selectIsDefinedScheme
  );

  scheme: Signal<Scheme> = this._store.selectSignal(selectGameSetupScheme);

  faLock = faLock;
  faLockOpen = faLockOpen;
  faCog = faCog;

  constructor(
    private _modalService: NgbModal,
    private _store: Store<{
      gameSetup: IGameSetupState;
      numPlayers: INumPlayersState;
    }>,
    @Inject(SERIES_REGISTER_TOKEN) private _seriesRegister: ISeries[]
  ) {}

  pickScheme() {
    const selectedScheme = this._store.selectSignal(selectDefinedScheme);

    const modalSelector = this._modalService.open(ModalSelectorComponent);
    modalSelector.componentInstance.itemType = CARD_TYPE.scheme;
    modalSelector.componentInstance.availableItems =
      this._availableCards().filter((scheme) =>
        this._removeSoloBannedSchemes(scheme)
      );

    const selectedItem = selectedScheme();
    if (selectedItem !== undefined) {
      modalSelector.componentInstance.selectedItem = selectedItem.id;
    }

    modalSelector.componentInstance.chosenItem.subscribe(
      (receivedScheme: string | undefined) =>
        this._handleChosenItem(receivedScheme)
    );
  }

  dispatchLocked(lockedScheme: Scheme) {
    const item = this._availableCards().find(
      (card) => card.id === lockedScheme.id
    );

    this._dispatch(item);
  }

  dispatchReset = () =>
    this._store.dispatch(randomizePageActions.resetDefinedScheme());

  private _removeSoloBannedSchemes(scheme: SchemeMinusRules) {
    const numPlayers = this._store.selectSignal(
      (state) => state.numPlayers.numPlayers
    );

    if (numPlayers() === 1) {
      return !(scheme instanceof SoloBannedScheme);
    }

    return true;
  }

  private _handleChosenItem(receivedScheme: string | undefined) {
    const item = this._availableCards().find(
      (card) => card.id === receivedScheme
    );

    this._dispatch(item);
  }

  private _dispatch(scheme?: SchemeMinusRules) {
    if (scheme !== undefined) {
      this._store.dispatch(
        randomizePageActions.setDefinedScheme({ scheme: scheme })
      );
    } else {
      this.dispatchReset();
    }
  }
}
