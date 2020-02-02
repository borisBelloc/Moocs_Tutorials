import { Injectable } from '@angular/core';

// DATAS
import { Hero } from '../class/hero';
import { HEROES } from '../class/mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: obtainer heroes from mock-heroes');
    return of(HEROES);
  }

  /* Get data from the mock (wont work with real http cause of async response) */
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}

// CONTINUE : https://angular.io/tutorial/toh-pt5
