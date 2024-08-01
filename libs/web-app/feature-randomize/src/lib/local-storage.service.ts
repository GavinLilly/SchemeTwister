import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<T> {
  get(key: string): T | null {
    const rawItem = localStorage.getItem(key);

    if (rawItem === null) {
      return null;
    }

    return JSON.parse(rawItem) as T;
  }

  set(key: string, data: T) {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
  }
}
