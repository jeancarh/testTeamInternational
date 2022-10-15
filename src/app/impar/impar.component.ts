import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-impar',
  templateUrl: './impar.component.html',
  styleUrls: ['./impar.component.css']
})
export class ImparComponent implements OnInit {
  @Input() data: any;
  array = []
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
