import { Injectable } from '@angular/core';

/**
 * A simple service that uses LocalStorage as it's backend for storing a
 * particular type of data.
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<T> {
  /**
   * Gets a value from LocalStorage
   * @param key the key to look for
   * @returns the value if it exists, null if not
   */
  get(key: string): T | null {
    const rawItem = localStorage.getItem(key);

    if (rawItem === null) {
      return null;
    }

    return JSON.parse(rawItem) as T;
  }

  /**
   * Stores the given data in LocalStorage against the given key
   * @param key the key to store the data against
   * @param data the data to store
   */
  set(key: string, data: T) {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
  }
}
