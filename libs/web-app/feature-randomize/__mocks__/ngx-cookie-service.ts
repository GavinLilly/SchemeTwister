export class CookieService {
  _cookieReg: { [name: string]: string } = {}
  constructor() {}

  check(name: string) {
    return this._cookieReg[name] ? true : false;
  }

  get(name: string) {
    return this._cookieReg[name];
  }

  getAll() {
    return this._cookieReg;
  }

  set(name: string,
    value: string,
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite: 'Lax' | 'None' | 'Strict' = 'Lax') {
    this._cookieReg[name] = name + '=' + value;
  }

  delete(name: string, path?: string, domain?: string, secure?: boolean, sameSite: 'Lax' | 'None' | 'Strict' = 'Lax') {
    delete this._cookieReg[name];
  }

  deleteAll(path?: string, domain?: string, secure?: boolean, sameSite: 'Lax' | 'None' | 'Strict' = 'Lax') {
    this._cookieReg = {};
  }
}
