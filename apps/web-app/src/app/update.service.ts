import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
  constructor(private _updates: SwUpdate) {
    console.log('Service worker updates enabled', this._updates.isEnabled);
    if (this._updates.isEnabled) {
      console.log(
        'Updates enabled. Will subscribe and reload when an update is available'
      );
      _updates.available.subscribe(() => this._promptUser());
    }
  }

  private _promptUser(): void {
    console.log('updating to new version');
    this._updates.activateUpdate().then(() => document.location.reload());
  }
}
