import { Inject, Injectable } from "@angular/core";
import { Post } from './post.model'
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { map ,tap, catchError} from 'rxjs/operators'
import { Subject , throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    loadedPosts: Post[] = [];
    isFetching = false;
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        //...send request
        const postData: Post = {title: title, content: content}
        this.http
        .post<{ name: string }>(
            'https://ng-complete-guide-30f5b-default-rtdb.firebaseio.com/post.json'
            ,postData
            ,{observe: 'response'}
        )
        .subscribe( 
            (responseData)=>{
                console.log('sent data: '+ responseData.body)
            }
        ,(error)=>{this.error.next(error.message)});
    }
   
    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
      return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-30f5b-default-rtdb.firebaseio.com/post.json', 
        {
            headers: new HttpHeaders({'Custome-Header': 'Hello'}),
            params: searchParams,
            responseType: 'json'
        }
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
        }), catchError( errorRes => {
            return throwError(errorRes)
        })
      );        
    }

    clearPost(){
        return this.http.delete('https://ng-complete-guide-30f5b-default-rtdb.firebaseio.com/post.json',
        {
            observe: 'events',
            responseType: 'text'
        }).pipe(
            tap(event => {
                console.log(event);
                if(event.type === HttpEventType.Sent){
                    // ...
                }
                if(event.type === HttpEventType.Response){
                    console.log(event.body);
                }
            })
        )
    }

}