import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tweet } from '../tweet.model';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  tweetItem : Tweet;
  tweetId : string;
  constructor(private tweetService: TweetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param : Params) =>{
      this.tweetId = param['id'];
      this.tweetItem = this.tweetService.getTweetById(this.tweetId);
    });
  }

  onUpdate(form: NgForm){
      this.tweetService.editTweet(form.value.tweetText,this.tweetId);
      this.router.navigate(['tweetapp','home']);
  }

}