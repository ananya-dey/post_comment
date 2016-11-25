import { Injectable } from '@angular/core';
import { Http }		  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http:Http) { }

  PostFunction(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json());
  }

  CommentFunction(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts'+'?title='+id).map(res=>res.json());
  }
}
