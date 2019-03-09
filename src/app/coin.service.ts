import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Coin, ListingsPayload, MetricsPayload, Status } from './models';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root',
})
export class CoinService {

  private coinApi = "https://netfour.apphb.com/api/coin/"; // "https://localhost:44333/api/coin/";
  isVisibilityListenerAdded = false;

  constructor(private http: HttpClient) { }

  getCoinList (): Observable<Coin[]> {
    return this.http.get<ListingsPayload>(this.coinApi)
      .pipe(      
        tap(response => this.logCmcError(response.status)),
        map(response => response.data),
        catchError(this.handleError('getCoinList', []))
      );
  }

  getGlobalData() {
    return this.http.get<MetricsPayload>(this.coinApi + '/metrics')
      .pipe(
        tap(response => this.logCmcError(response.status)),
        map(response => response.data),
        catchError(this.handleError('getGlobalData', []))
      );
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`CoinService: ${message}`);
  }

  private logCmcError(status: Status) {
    if (status.error_message) {
      this.log(status.error_message)
    }
  }

}