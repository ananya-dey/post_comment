import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  private subs:Subscription;
  private commentBody:string;
  private comment:any;
  constructor(private route:ActivatedRoute, private as:AppService) { }

  ngOnInit() {
    this.subs = this.route.params.subscribe(
      res=>{this.commentBody = res['id'];
      this.getComment();
      }
    )
  }

  private getComment(){
    this.as.CommentFunction(this.commentBody)
      .subscribe(res=>{this.comment=res;
      }
    )
  }

}
