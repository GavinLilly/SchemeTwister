import { Component, Signal } from '@angular/core';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  Mastermind,
  CARD_TYPE,
  TransformingMastermind,
  MultiMastermind,
} from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectIsDefinedMastermind,
  selectMastermind,
} from '../+state/selectors/game-setup-scheme.selectors';
import { SchemeMastermindSelectComponent } from '../scheme-mastermind-select/scheme-mastermind-select.component';

type MastermindType = Mastermind | TransformingMastermind | MultiMastermind;
@Component({
  selector: 'schemetwister-mastermind-card',
  templateUrl: './mastermind-card.component.html',
  styleUrls: ['./mastermind-card.component.scss'],
})
export class MastermindCardComponent {
  mastermind: Signal<MastermindType> =
    this._store.selectSignal(selectMastermind);
  mastermindLocked: Signal<boolean> = this._store.selectSignal(
    selectIsDefinedMastermind
  );

  faLock = faLock;
  faCog = faCog;

  constructor(
    private _modalService: NgbModal,
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}

  pickMastermind() {
    const modalRef = this._modalService.open(SchemeMastermindSelectComponent);
    modalRef.componentInstance.itemType = CARD_TYPE.mastermind;
  }
}
