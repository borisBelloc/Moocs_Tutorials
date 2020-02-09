import { Injectable } from '@angular/core';

import { Hero } from '../class/hero';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = 'api/heroes'; // URL to web api

  // you keep injecting the MessageService but since you'll call it so frequently, wrap it in a private log() method :
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** GET heroes from the server */
  // DOC: All HttpClient methods return an RxJS Observable of something.
  // DOC: To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
  // DOC:  the RxJS tap() operator, looks at the observable values, does something with those values,
  // and passes them along. The tap() call back doesn't touch the values themselves.
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('getHeroes() Tap message -> fetched heroes ')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  //   getHero(id: number): Observable<Hero> {
  //   // Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
