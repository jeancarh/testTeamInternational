import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  res:any
  @Output() open: EventEmitter<any> = new EventEmitter();
  constructor(){

  }
  ngOnInit() {
  }
  title = 'test';

}
