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

/**
 * A store which controls the screen-on lock state.
 */
@Injectable()
export class ScreenOnLockStore
  extends ComponentStore<ScreenOnLockState>
  implements OnDestroy
{
  // eslint-disable-next-line no-undef
  private _screenLockSentinel?: WakeLockSentinel = undefined;

  private _localStorageUpdateSub: Subscription;

  constructor(private _screenOnStorageService: LocalStorageService<boolean>) {
    super(initialState);

    const isLocked = _screenOnStorageService.get(IS_LOCKED_KEY);

    if (isLocked !== null) {
      this.setLock(isLocked);
    }

    this._localStorageUpdateSub = this.select(
      (store) => store.isLocked
    ).subscribe((isLocked) =>
      this._screenOnStorageService.set(IS_LOCKED_KEY, isLocked)
    );
  }

  ngOnDestroy(): void {
    this._localStorageUpdateSub.unsubscribe();
  }

  /**
   * The screen will only be locked if the sentinel is active and not released.
   *  @returns true if screen is locked, false if not
   */
  private get _isScreenLocked() {
    return this._screenLockSentinel?.released === false;
  }

  /**
   * Toggles the lock on/off
   */
  readonly toggleLock = this.effect(($) =>
    $.pipe(
      switchMap(async () =>
        this._isScreenLocked ? this._unlockScreen() : this._lockScreen()
      )
    )
  );

  /**
   * Explicitly sets the screen on lock to on or off based on the provided value
   */
  readonly setLock = this.effect((lock$: Observable<boolean>) =>
    lock$.pipe(
      switchMap(async (lock) =>
        lock ? this._lockScreen() : this._unlockScreen()
      )
    )
  );

  /**
   * Locks the screen if it's not already locked
   */
  private async _lockScreen() {
    if (!this._isScreenLocked) {
      try {
        this._screenLockSentinel = await navigator.wakeLock.request('screen');
        this.setState({ isLocked: true });
      } catch (err: unknown) {
        const errMsg =
          err instanceof Error ? `${err.name}, ${err.message}` : err;
        console.log(errMsg);
        this.setState({ isLocked: false });
      }
    }
  }

  /**
   * Unlocks the screen if it's currently locked
   */
  private async _unlockScreen() {
    if (this._screenLockSentinel !== undefined && this._isScreenLocked) {
      await this._screenLockSentinel.release();
      this.setState({ isLocked: false });
    }
  }
}
