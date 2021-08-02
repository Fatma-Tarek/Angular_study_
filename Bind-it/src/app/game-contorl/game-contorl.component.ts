import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-contorl',
  templateUrl: './game-contorl.component.html',
  styleUrls: ['./game-contorl.component.css']
})
export class GameContorlComponent implements OnInit {
  //by Output can be reahced by outside 
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval (()=>{
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval)
  }

}
