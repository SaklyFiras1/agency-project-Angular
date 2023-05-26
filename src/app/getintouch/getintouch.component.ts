import { Component, OnInit } from '@angular/core';
declare const Feed :any
@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})

export class GetintouchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    Feed() ;
  }

}
