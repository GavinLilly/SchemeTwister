import { Injectable, inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
  constructor() {
    const updates = inject(SwUpdate);

    if (updates.isEnabled) {
      console.log(
        'Updates enabled. Will reload when a new SchemeTwister version is available'
      );

      updates.versionUpdates.subscribe((evt) => {
        switch (evt.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version: ${evt.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${evt.currentVersion.hash}`);
            console.log(
              `New app version ready for use: ${evt.latestVersion.hash}`
            );
            console.log(`Reloading now...`);
            window.location.reload();
            break;
          case 'VERSION_INSTALLATION_FAILED':
            console.log(
              `Failed to install app version '${evt.version.hash}': ${evt.error}`
            );
            break;
        }
      });
    }
  }
}
