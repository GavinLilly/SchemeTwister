import { skip, take } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { ScreenOnLockStore } from './screen-on-lock.store';

describe('ScreenOnLockStore', () => {
  let componentStore: ScreenOnLockStore;

  beforeAll(async () => {
    const localStorageService = new LocalStorageService<boolean>();
    componentStore = new ScreenOnLockStore(localStorageService);
  });

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });

  it("should show that the screen wake lock isn't on by default", () =>
    expect(componentStore.state().isLocked).toEqual(false));

  it('should toggle the screen wake lock', () => {
    const takeOne = componentStore.state$.pipe(skip(1), take(1));

    const trueSub = takeOne.subscribe(({ isLocked }) =>
      expect(isLocked).toBe(true)
    );
    componentStore.toggleLocked();
    trueSub.unsubscribe();

    const falseSub = takeOne.subscribe(({ isLocked }) =>
      expect(isLocked).toBe(false)
    );
    componentStore.toggleLocked();
    falseSub.unsubscribe();
  });
});
