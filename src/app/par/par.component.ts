
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  styleUrls: ['./par.component.css']
})
export class ParComponent implements OnInit {
  @Input() data: any;
  array:any
  constructor(private httpSvc: HttpService) { }

  ngOnInit(): void {
  this.getData()
  }
  getData(){
    this.httpSvc.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe((data:any) => {
    this.array = data
  console.log(this.array)

  })
  }
}
