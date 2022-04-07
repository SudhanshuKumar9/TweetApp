import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tweet } from '../tweet.model';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const value = new Tweet("randomId",this.form.value.tweetText,"abc@exp.com",0,new Date(),[]);
    this.tweetService.postTweet(value);
  }

}
