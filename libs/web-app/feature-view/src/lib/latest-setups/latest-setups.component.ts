import { Component } from '@angular/core';

import { LatestSetupsStoreStore } from '../latest-setups-store.store';

@Component({
  selector: 'schemetwister-latest-setups',
  templateUrl: './latest-setups.component.html',
  styleUrls: ['./latest-setups.component.scss'],
  providers: [LatestSetupsStoreStore],
})
export class LatestSetupsComponent {
  public setups$ = this._store.setups$;

  constructor(private readonly _store: LatestSetupsStoreStore) {}
}
