import { trigger, state, style, transition, animate, keyframes, group} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
        state('normal', style({
          'background-color': 'red',
           transform: 'translateX(0)'
        })),
        state('highlighted', style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)'
        })),
        //transition('normal => highlighted', animate(300)),
        //transition('highlighted => normal', animate(800)),
        /********** To use same time in both direction **********/
        transition('normal <=> highlighted', animate(300)),
    ]),

    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
         transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
     // transition('shrunken => *', animate(800)),
     //it jumb to another style directly and we don't want that
      /*transition('shrunken => *', animate(500, style({
        borderRadius: '50px'
      }))),*/
      transition('shrunken <=> *',[
        style({
          'background-color':'orange'
        }),
        animate(5000, style({ ///for radius 
          borderRadius: '50px'
        })),
        animate(10000) ///for orange 
      ])
  ]),
/* trigger('list1', [
    //in is just dumy data 
    state('in', style({
      opacity: 1, //fully visiable
       transform: 'translateX(0)'
    })),
    transition('void => *', animate(300)),
  ]),*/
  trigger('list1', [
    //in is just dumy data 
    state('in', style({
      opacity: 1, //fully visiable
       transform: 'translateX(0)'
    })),
    transition('void => *', [
      style({
        opacity:0,
        transform: 'translateX(-100px)'
      }),
      animate(300)
    ]),
    transition('* => void',[
      animate(300, style({
        transform: 'translateX(100px)',
        opacity: 0
      }))
    ])
  ]),
  trigger('list2', [
    //in is just dumy data 
    state('in', style({
      opacity: 1, //fully visiable
       transform: 'translateX(0)'
    })),
    transition('void => *', [
      animate(1000, keyframes([
        style({
          transform: 'translateX(-100px)', 
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translateX(-50px)', 
          opacity: 0.5,
          offset: .3
        }),
        style({
          transform: 'translateX(-20px)', 
          opacity: 1,
          offset: .8
        }),
        style({
          transform: 'translateX(0px)', 
          opacity: 1,
          offset: 1
        }),
      ]))
    ]),
    /*n*/
    transition('* => void',[
      group([
        animate(300, style({
          color: 'red'
        })),
        animate(800, style({
          transform: 'translateX(100px)',
          opacity: 0
        })),
      ])     
    ])
  ]),

  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];
    onAnimate(){
      this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal'
      this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'

    }

    onAdd(item: string) {
      this.list.push(item);
    }

    onShrink(){
      this.wildState = 'shrunken';
    }

    onDelete(item: string){
    this.list.splice(this.list.indexOf(item), 1);
    }

    animationStarted(event: any){
      console.log(event)
    }
    animationEnded(event: any){
      console.log(event)
    }
}
