import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class UpdateService {
  constructor(private _updates: SwUpdate) {
    if (this._updates.isEnabled) {
      console.log(
        'Updates enabled. Will reload when an a new SchemeTwister version is available'
      );
      _updates.versionUpdates.pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        tap(() => this._promptUser())
      );
    }
  }

  private _promptUser(): void {
    console.log('Updating to new version');
    this._updates.activateUpdate().then(() => document.location.reload());
  }
}
