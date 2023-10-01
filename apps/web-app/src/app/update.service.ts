import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
  constructor(private _updates: SwUpdate) {
    if (this._updates.isEnabled) {
      console.log(
        'Updates enabled. Will reload when an a new SchemeTwister version is available'
      );
      _updates.available.subscribe(() => this._promptUser());
    }
  }

  private _promptUser(): void {
    console.log('Updating to new version');
    this._updates.activateUpdate().then(() => document.location.reload());
  }
}
