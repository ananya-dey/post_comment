/**
 * Created by User on 11/25/2016.
 */

import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { NgModule } from "@angular/core";

const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRouting{}
