import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet.model';
import { TweetService } from './tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweets: Tweet[];
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweets = this.tweetService.getTweets();
  }
}
