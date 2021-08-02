import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ood',
  templateUrl: './ood.component.html',
  styleUrls: ['./ood.component.css']
})
export class OodComponent implements OnInit {
  @Input() number !: number;
  constructor() { }

  ngOnInit(): void {
  }

  

}
