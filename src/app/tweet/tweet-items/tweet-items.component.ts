import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reply } from '../reply.model';
import { Tweet } from '../tweet.model';

@Component({
  selector: 'app-tweet-items',
  templateUrl: './tweet-items.component.html',
  styleUrls: ['./tweet-items.component.css']
})
export class TweetItemsComponent implements OnInit {
  @Input() tweet: Tweet;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['tweetapp/reply']);
  }

}
