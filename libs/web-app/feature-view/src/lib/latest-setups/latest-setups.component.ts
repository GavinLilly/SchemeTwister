import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LibTwister } from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

import { LatestSetupsStore } from '../latest-setups.store';
import { DatePipe } from '@angular/common';
import { StoredSetupToGameSetupPipe } from '../stored-setup-to-game-setup.pipe';

@Component({
    selector: 'schemetwister-latest-setups',
    templateUrl: './latest-setups.component.html',
    styleUrls: ['./latest-setups.component.scss'],
    providers: [LatestSetupsStore],
    imports: [DatePipe, StoredSetupToGameSetupPipe],
})
export class LatestSetupsComponent {
  private readonly _store = inject(LatestSetupsStore);

  libTwister: LibTwister;

  public setups = toSignal(this._store.setups$);

  constructor() {
    const seriesRegister = inject(SERIES_REGISTER_TOKEN);

    this.libTwister = new LibTwister({ series: seriesRegister });
  }
}
