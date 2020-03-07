import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';



@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent,

  ]
})
export class PostsModule { }
