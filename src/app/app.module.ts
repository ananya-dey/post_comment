import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';

import { AppRouting } from './app-routing.module';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
