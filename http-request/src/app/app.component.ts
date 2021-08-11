import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub!: Subscription;


  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe( errorMessage =>{
      console.log(errorMessage)
    })
    this.postService.fetchPosts().subscribe((posts)=>{
      this.isFetching = false;
      this.loadedPosts = posts;
      console.log(this.loadedPosts)
    }, (error) => {
        this.error = error.error.error  ;
        console.log(error);
    },
    )

    
  }

  onCreatePost(postData: Post) {
    // Send Http request   
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPosts().subscribe((posts)=>{
      this.isFetching = false;
      this.loadedPosts = posts;
      console.log(this.loadedPosts)
    },(error) => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
  })
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(()=>{
      this.loadedPosts = [];
    })
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  onHandleError(){
    this.error=null;
  }

}
