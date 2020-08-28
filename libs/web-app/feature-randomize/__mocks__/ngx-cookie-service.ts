export class CookieService {
  _cookieReg = {};
  constructor() {}

  check(name) {
    return this._cookieReg[name] ? true : false;
  }

  get(name) {
    return this._cookieReg[name];
  }

  getAll() {
    return this._cookieReg;
  }

  set(name, value, expires, path, domain, secure, sameSite) {
    this._cookieReg[name] = name + '=' + value;
  }

  delete(name, path, domain) {
    delete this._cookieReg[name];
  }

  deleteAll(path, domain) {
    this._cookieReg = {};
  }
}
