import { Component } from '@angular/core';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { CARD_TYPE, Scheme } from '@schemetwister/libtwister';
import { Observable } from 'rxjs';

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
  schemeLocked$: Observable<boolean> = this._store.select(
    selectIsDefinedScheme
  );
  faLock = faLock;
  faCog = faCog;
  scheme$: Observable<Scheme> = this._store.select(selectGameSetupScheme);

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
