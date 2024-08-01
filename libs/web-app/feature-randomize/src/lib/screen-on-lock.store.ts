import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, Subscription, switchMap } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

const IS_LOCKED_KEY = 'isScreenLocked';

export interface ScreenOnLockState {
  isLocked: boolean;
}

const initialState: ScreenOnLockState = {
  isLocked: false,
};

@Injectable()
export class ScreenOnLockStore
  extends ComponentStore<ScreenOnLockState>
  implements OnDestroy
{
  // eslint-disable-next-line no-undef
  private _screenLockSentinel?: WakeLockSentinel = undefined;

  private _storeStateSub: Subscription;

  constructor(private _localStorageService: LocalStorageService<boolean>) {
    super(initialState);

    const isLocked = _localStorageService.get(IS_LOCKED_KEY);

    if (isLocked !== null) {
      this.setLocked(isLocked);
    }

    this._storeStateSub = this.select((store) => store.isLocked).subscribe(
      (isLocked) => this._localStorageService.set(IS_LOCKED_KEY, isLocked)
    );
  }

  ngOnDestroy(): void {
    this._storeStateSub.unsubscribe();
  }

  private get _isScreenLocked() {
    return this._screenLockSentinel?.released === false;
  }

  readonly toggleLocked = this.effect(($) =>
    $.pipe(switchMap(async () => this._performLock(!this._isScreenLocked)))
  );

  readonly setLocked = this.effect((lock$: Observable<boolean>) =>
    lock$.pipe(switchMap(async (lock) => this._performLock(lock)))
  );

  private async _performLock(lock: boolean) {
    if (lock) {
      try {
        this._screenLockSentinel = await navigator.wakeLock.request('screen');
        this.setState({ isLocked: true });
      } catch (err: unknown) {
        const errMsg =
          err instanceof Error ? `${err.name}, ${err.message}` : err;
        console.log(errMsg);
        this.setState({ isLocked: false });
      }
    } else {
      if (this._screenLockSentinel !== undefined) {
        await this._screenLockSentinel.release();
        this.setState({ isLocked: false });
      }
    }
  }
}
