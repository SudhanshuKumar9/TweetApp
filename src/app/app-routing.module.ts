import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EditTweetComponent } from './tweet/edit-tweet/edit-tweet.component';
import { ReplyTweetComponent } from './tweet/reply-tweet/reply-tweet.component';
import { TweetComponent } from './tweet/tweet.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'tweetapp', pathMatch: "full"},
  {path: 'tweetapp', component: RegisterComponent},
  {path: 'tweetapp/home', component: TweetComponent},
  {path: 'tweetapp/home/reply/:id', component: ReplyTweetComponent},
  {path: 'tweetapp/home/edit/:id', component: EditTweetComponent},
  {path: 'tweetapp/user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
