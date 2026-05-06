import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService<boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add the value to the storage', () => {
    const key = 'isTrue';

    service.set(key, true);

    expect(service.get(key)).toBe(true);
  });

  it("should return null when key doesn't exist", () =>
    expect(service.get('keyDoesNotExist')).toBeNull());
});
