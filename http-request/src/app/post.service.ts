import { Inject, Injectable } from "@angular/core";
import { Post } from './post.model'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class PostService {
    loadedPosts: Post[] = [];
    isFetching = false;

    constructor(private http: HttpClient){}
    createAndStorePost(title: string, content: string){
        //...send request
        const postData: Post = {title: title, content: content}
        this.http
        .post<{ name: string }>(
            'https://ng-complete-guide-30f5b-default-rtdb.firebaseio.com/post.json',postData)
        .subscribe(
        
        );
    }

    onFetchPosts(){
       return  this.fetchPosts();
    }
   
    fetchPosts(){
      return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-30f5b-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
      );
        
    }

}