import { Component, Signal, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { NgbAccordionModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  Mastermind,
  CARD_TYPE,
  TransformingMastermind,
  AdaptingMastermind,
} from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { ModalSelectorComponent } from '@schemetwister/web-app/ui';

import { randomizePageActions } from '../+state/actions/game-setup.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { selectLibTwister } from '../+state/selectors/game-sets.selectors';
import {
  selectDefinedMastermind,
  selectIsDefinedMastermind,
  selectMastermind,
} from '../+state/selectors/game-setup-scheme.selectors';
import { MastermindCardContentComponent } from '../../../../ui/src/lib/mastermind-card-content/mastermind-card-content.component';

type MastermindType = Mastermind | TransformingMastermind | AdaptingMastermind;

@Component({
  selector: 'schemetwister-mastermind-card',
  imports: [MastermindCardContentComponent, FontAwesomeModule, NgbAccordionModule],
  templateUrl: './mastermind-card.component.html',
  styleUrls: ['./mastermind-card.component.scss'],
  standalone: true,
})
export class MastermindCardComponent {
  private readonly _modalService = inject(NgbModal);
  private readonly _store = inject<
    Store<{
      gameSetup: IGameSetupState;
    }>
  >(Store);
  private readonly _seriesRegister = inject(SERIES_REGISTER_TOKEN);

  private readonly _libTwister = this._store.selectSignal(
    selectLibTwister(this._seriesRegister)
  );

  private readonly _availableCards = computed(
    () => this._libTwister().stores.mastermindStore.availableCards
  );

  mastermindLocked: Signal<boolean> = this._store.selectSignal(
    selectIsDefinedMastermind
  );

  mastermind: Signal<MastermindType> =
    this._store.selectSignal(selectMastermind);

  readonly faLock = faLock;
  readonly faLockOpen = faLockOpen;
  readonly faCog = faCog;

  pickMastermind() {
    const selectedMastermind = this._store.selectSignal(
      selectDefinedMastermind
    );

    const modalSelector = this._modalService.open(ModalSelectorComponent);
    modalSelector.componentInstance.itemType = CARD_TYPE.mastermind;
    modalSelector.componentInstance.availableItems = this._availableCards();

    const selectedItem = selectedMastermind();
    if (selectedItem !== undefined) {
      modalSelector.componentInstance.selectedItem = selectedItem.id;
    }

    modalSelector.componentInstance.chosenItem.subscribe(
      (receivedMastermind: string | undefined) =>
        this._handleChosenItem(receivedMastermind)
    );
  }

  dispatchLocked = () =>
    this._store.dispatch(randomizePageActions.lockMastermind());

  dispatchReset = () =>
    this._store.dispatch(randomizePageActions.resetDefinedMastermind());

  private _handleChosenItem(receivedMastermind: string | undefined) {
    const item = this._availableCards().find(
      (card) => card.id === receivedMastermind
    );

    if (item === undefined) {
      this.dispatchReset();
    } else {
      this._store.dispatch(
        randomizePageActions.setDefinedMastermind({ mastermind: item })
      );
    }
  }
}
