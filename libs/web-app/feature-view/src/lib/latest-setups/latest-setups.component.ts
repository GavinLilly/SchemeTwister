import { Component, Inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ISeries, LibTwister } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { LatestSetupsStore } from '../latest-setups.store';

@Component({
  selector: 'schemetwister-latest-setups',
  templateUrl: './latest-setups.component.html',
  styleUrls: ['./latest-setups.component.scss'],
  providers: [LatestSetupsStore],
})
export class LatestSetupsComponent {
  libTwister: LibTwister;

  public setups = toSignal(this._store.setups$);

  constructor(
    private readonly _store: LatestSetupsStore,
    @Inject(SERIES_REGISTER_TOKEN) seriesRegister: ISeries[]
  ) {
    this.libTwister = new LibTwister(...seriesRegister);
  }
}
