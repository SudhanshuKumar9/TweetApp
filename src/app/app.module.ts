import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TweetComponent } from './tweet/tweet.component';
import { UserComponent } from './user/user.component';
import { TweetItemsComponent } from './tweet/tweet-items/tweet-items.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';
import { TweetService } from './tweet/tweet.service';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    TweetComponent,
    UserComponent,
    TweetItemsComponent,
    PostTweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [TweetService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
