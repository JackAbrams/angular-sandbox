import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDepartment } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url: string = "/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error");
  }
}
