import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  description:string = 'Find Your Favorite Movies';
  description2:string = 'ITS VERY COOL!';
  constructor() { }

  ngOnInit() {
  }

}
