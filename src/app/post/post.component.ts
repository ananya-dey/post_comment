import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts=[];
  constructor(private as:AppService, private router:Router) { }

  ngOnInit() {
    this.initPost();
  }

  initPost(){
    this.as.PostFunction()
      .subscribe(res=>{
        this.posts = res;
      });
  }

  onPost(postid){
    this.router.navigate(['/comment', postid]);
  }

}
