import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(url: string, params = {}): Observable<any> {
    console.log("url",url);
    let options = {
      params
    }
    return this.http.get(`${this.API_URL}/${url}`, options).pipe(
      catchError(err => {
        return throwError(() => new Error(err));
      })
    );
  }
}
