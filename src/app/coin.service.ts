import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Coin, CmcPayload } from './models';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': '7dd8cc75-3ccc-4dfe-8e22-a0d8391e1498'/* ,
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip' */
    })
};

@Injectable({
  providedIn: 'root',
})
export class CoinService {

  private coinApi = "https://api.coinmarketcap.com/v2/"; // https://localhost:44333/api/coin

  constructor(private http: HttpClient) { }

  getCoinList (): Observable<Coin[]> {
    return this.http.get<CmcPayload>(this.coinApi + 'ticker/?sort=rank&structure=array')
      .pipe(
        map(response => response.data),
        tap(data => this.log('Coins fetched')),
        catchError(this.handleError('getCoinList', []))
      );
  }

  getGlobalData() {
    return this.http.get<{data: {}}>(this.coinApi + 'global/')
      .pipe(
        map(response => response.data),
        tap(data => this.log('global data received')),
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
    //console.log(`CoinService: ${message}`);
  }
}