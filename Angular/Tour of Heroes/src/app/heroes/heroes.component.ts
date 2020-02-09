import { Component, OnInit } from '@angular/core';
import { Hero } from '../class/hero';

import { HeroService } from '../services/hero.service';

// #t1
import { MessageService } from '../services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}
  // test #t1: add hero selected to the message
  // constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit() {
    this.getHeroes();
  }

  // Old code with selected hero
  // heroes.component.html (list with onSelect)
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // #t1
  // this.messageService.add('hero added : ' + hero.name);
  // }

  /* DOC : https://angular.io/tutorial/toh-pt4#subscribe-in-heroescomponent */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

}
