import { CookieService } from 'ngx-cookie-service';

import { GameSetupStore } from './game-setup-store';

describe('GameSetupStore', () => {
  const _cookieReg = {};
  const fakeCookie = {
    check: (name: string): boolean => {
      return _cookieReg[name] ? true : false;
    },
    get: (name: string): string => {
      return _cookieReg[name];
    },
    set: (name: string, value: string) => {
      _cookieReg[name] = name + '=' + value;
    }
  };
  it('should create an instance', () => {
    expect(new GameSetupStore(fakeCookie as CookieService)).toBeTruthy();
  });
});
