import { Component } from '@angular/core';

import { LatestSetupsStore } from '../latest-setups.store';

@Component({
  selector: 'schemetwister-latest-setups',
  templateUrl: './latest-setups.component.html',
  styleUrls: ['./latest-setups.component.scss'],
  providers: [LatestSetupsStore],
})
export class LatestSetupsComponent {
  public setups$ = this._store.setups$;

  constructor(private readonly _store: LatestSetupsStore) {}
}
