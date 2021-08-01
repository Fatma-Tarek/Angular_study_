import { AfterContentChecked, 
        AfterContentInit,
        AfterViewChecked,
        AfterViewInit,
        Component,
        DoCheck,
        ElementRef,
        Input,
        OnChanges, 
        OnDestroy, 
        OnInit,
        SimpleChanges,
        ViewChild,
        ViewEncapsulation,
        ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None , Native
})
export class ServerElementComponent implements OnInit,
    OnChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit, 
    AfterViewChecked,
    OnDestroy{

  @Input('srvElement') element !: {type: string,name: string, content: string};
  @Input() name!: string;
  @ViewChild('heading', {static: true}) header !: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph !: ElementRef; 

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnchanges called!");
    console.log(changes);
  }
    
  constructor(){
    //this.element = {type:"", name:"",content:""}; 
    console.log("constructor called!"); 
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log('content Text '+ this.header.nativeElement.textContent);
    console.log('content paragraph '+ this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    console.log('content paragraph '+ this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
    console.log('content Text '+ this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy(){
    console.log(" ngOnDestroy called!");
  }
  

}
