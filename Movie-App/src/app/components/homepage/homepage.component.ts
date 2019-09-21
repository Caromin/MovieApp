import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Movie1Des:string = 'After running away from a residential nursing home to pursue his dream of becoming a pro wrestler, a man who has Down syndrome befriends an outlaw who becomes his coach and ally.'

  Description:string = 'Find Your Favorite Movies';
  Description2:string = 'ITS VERY COOL!';
  constructor() { }

  ngOnInit() {
  }

}
