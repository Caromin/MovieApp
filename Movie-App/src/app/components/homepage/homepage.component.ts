import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  Description:string = 'Find Your Favorite Movies';
  Description2:string = 'ITS VERY COOL!';
  constructor() { }

  ngOnInit() {
  }

}
