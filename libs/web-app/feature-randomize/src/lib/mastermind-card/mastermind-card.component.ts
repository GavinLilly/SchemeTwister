import { CommonModule } from '@angular/common';
import { Component, Inject, Signal, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { NgbAccordionModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  Mastermind,
  CARD_TYPE,
  TransformingMastermind,
  AdaptingMastermind,
  ISeries,
} from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import {
  ModalSelectorComponent,
  WebAppUiModule,
} from '@schemetwister/web-app/ui';

import { randomizePageActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { selectLibTwister } from '../+state/selectors/game-sets.selectors';
import {
  selectDefinedMastermind,
  selectIsDefinedMastermind,
  selectMastermind,
} from '../+state/selectors/game-setup-scheme.selectors';

type MastermindType = Mastermind | TransformingMastermind | AdaptingMastermind;
@Component({
  selector: 'schemetwister-mastermind-card',
  standalone: true,
  imports: [
    CommonModule,
    WebAppUiModule,
    FontAwesomeModule,
    NgbAccordionModule,
  ],
  templateUrl: './mastermind-card.component.html',
  styleUrls: ['./mastermind-card.component.scss'],
})
export class MastermindCardComponent {
  private _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );

  private _availableCards = computed(
    () => this._libTwister().stores.mastermindStore.availableCards
  );

  mastermindLocked: Signal<boolean> = this._store.selectSignal(
    selectIsDefinedMastermind
  );

  mastermind: Signal<MastermindType> =
    this._store.selectSignal(selectMastermind);

  faLock = faLock;
  faLockOpen = faLockOpen;
  faCog = faCog;

  constructor(
    private _modalService: NgbModal,
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>,
    @Inject(SERIES_REGISTER_TOKEN) private _seriesRegister: ISeries[]
  ) {}

  pickMastermind() {
    const libTwister = this._store.selectSignal(
      selectLibTwister(this._seriesRegister)
    );

    const availableCards = computed(
      () => libTwister().stores.mastermindStore.availableCards
    );

    const selectedMastermind = this._store.selectSignal(
      selectDefinedMastermind
    );

    const modalSelector = this._modalService.open(ModalSelectorComponent);
    modalSelector.componentInstance.itemType = CARD_TYPE.mastermind;
    modalSelector.componentInstance.availableItems = availableCards();

    const selectedItem = selectedMastermind();
    if (selectedItem !== undefined) {
      modalSelector.componentInstance.selectedItem = selectedItem.id;
    }

    modalSelector.componentInstance.chosenItem.subscribe(
      (receivedMastermind: string | undefined) =>
        this._handleChosenItem(receivedMastermind)
    );
  }

  dispatchLocked(lockedScheme: MastermindType) {
    const item = this._availableCards().find(
      (card) => card.id === lockedScheme.id
    );

    this._dispatch(item);
  }

  dispatchReset = () =>
    this._store.dispatch(randomizePageActions.resetDefinedMastermind());

  private _handleChosenItem(receivedMastermind: string | undefined) {
    const item = this._availableCards().find(
      (card) => card.id === receivedMastermind
    );

    this._dispatch(item);
  }

  private _dispatch(mastermind?: MastermindType) {
    if (mastermind !== undefined) {
      this._store.dispatch(
        randomizePageActions.setDefinedMastermind({ mastermind: mastermind })
      );
    } else {
      this.dispatchReset();
    }
  }
}
