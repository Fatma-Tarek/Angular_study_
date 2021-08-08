import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription} from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSubscribtion: Subscription;
  constructor() { }

  ngOnInit(): void {
   // this.firstObsSubscribtion = interval(1000).subscribe((count)=>{console.log(count)});
   /**************** Custome Observable *****************/
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if (count === 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('count greater than 3'));
        }
        count++;
      },1000);
    });
  /*
    customIntervalObservable.pipe(map((data: number)=>{
    return 'Rounded' + (data+1);
    }))
  */

    this.firstObsSubscribtion = customIntervalObservable.pipe(
      filter((data)=>{return data > 0})
      ,map((data: number)=>{
      return 'Rounded' + (data+1);
    })).subscribe((data)=>{
       console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    },
      () => {
        console.log('Completed!')
      }
    );

  }//end of ngOnInit

  ngOnDestroy(){
     this.firstObsSubscribtion.unsubscribe();
  
  }

  

}
