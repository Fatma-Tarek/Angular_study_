import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css'],
  
})
export class CokpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string , serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string , serverContent: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef ;
  @ViewChild('serverNameInput', {static: true}) serverNameinput !: ElementRef;
  constructor() { }

  //newServerName = '';
  newServerContent = '';

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement ) {
   console.log(nameInput.value);
   this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
   });
  }

  onAddBlueprint(contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: contentInput.value,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint2(){
    console.log(this.serverContentInput.nativeElement.value);
    this.blueprintCreated.emit({
      serverName: this.serverContentInput.nativeElement.value,
      serverContent: this.serverNameinput.nativeElement.value
    })
  }

}
