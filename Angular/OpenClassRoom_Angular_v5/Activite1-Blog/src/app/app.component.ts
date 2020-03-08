import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[] = [
    new Post( 'John', 'Hero inconnu', 0 ),
    new Post( 'Alberto', 'Voiture rouge', -5 ),
    new Post( 'Jack', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, sequi!', 4 ),
    new Post( 'Justin', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quod.', 10 ),
    new Post( 'Stéphanie', 'Lorem ipsum dolor sit amet.', 0 ),
  ];

  // posts: Post[] =
  // [
  //   {
  //     title: 'Premier cas',
  //     content: '1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt rem sapiente reiciendis doloribus modi!',
  //   },
  //   {
  //     title: 'Deuxieme cas',
  //     content: '2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt rem sapiente reiciendis doloribus modi!',
  //   },
  //   {
  //     title: '3eme cas',
  //     content: '3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt rem sapiente reiciendis doloribus modi!',
  //   },
  //   {
  //     title: '4eme cas',
  //     content: '4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt rem sapiente reiciendis doloribus modi!',
  //   },
  // ];



  ngOnInit(): void {
    console.log('posts ', this.posts);

  }



}
