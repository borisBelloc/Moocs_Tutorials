import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { interval } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // * Observe l'observable v1
  secondes: number;
  // * Observe l'observable v2
  counterSubscription: Subscription;

  constructor() {}


  ngOnInit(): void {
    const counter = interval(1000);
    // * Observe l'observable v1
    // counter.subscribe(
    //   (value: number) => {
    //     this.secondes = value;
    //   },
    //   (error: any) => {
    //     console.log('Une erreur a été rencontrée !');
    //   },
    //   () => {
    //     console.log('Observable complétée !');
    //   }
    // );
    // * Observe l'observable v2 ("meilleur methode qui permet d'appeler le subscriber afin de le destroy")
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
