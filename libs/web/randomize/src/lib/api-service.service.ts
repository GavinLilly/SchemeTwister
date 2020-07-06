import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = `http://localhost:3333/api/schemes/random`

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
