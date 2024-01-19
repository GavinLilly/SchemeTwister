import { Component, Signal } from '@angular/core';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { CARD_TYPE, Scheme } from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectGameSetupScheme,
  selectIsDefinedScheme,
} from '../+state/selectors/game-setup-scheme.selectors';
import { SchemeMastermindSelectComponent } from '../scheme-mastermind-select/scheme-mastermind-select.component';

@Component({
  selector: 'schemetwister-scheme-card',
  templateUrl: './scheme-card.component.html',
  styleUrls: ['./scheme-card.component.scss'],
})
export class SchemeCardComponent {
  schemeLocked: Signal<boolean> = this._store.selectSignal(
    selectIsDefinedScheme
  );
  scheme: Signal<Scheme> = this._store.selectSignal(selectGameSetupScheme);

  faLock = faLock;
  faCog = faCog;

  constructor(
    private _modalService: NgbModal,
    private _store: Store<{
      gameSetup: IGameSetupState;
    }>
  ) {}

  pickScheme() {
    const modalRef = this._modalService.open(SchemeMastermindSelectComponent);
    modalRef.componentInstance.itemType = CARD_TYPE.scheme;
  }
}
