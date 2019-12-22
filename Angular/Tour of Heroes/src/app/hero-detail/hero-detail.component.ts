import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../class/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Allow to pass the hero as :  [hero]="selectedHero" (heroes.component.html)
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
