import { Reply } from "./reply.model";
import { Tweet } from "./tweet.model";

export class TweetService{
    private tweets: Tweet[] = [
        new Tweet("1", "Hello", "test", 1, new Date(), [new Reply('jhkjh','me',new Date())]),
        new Tweet("2", "Hi I am", "jest", 20, new Date(),[new Reply('jhkjh','me',new Date())]),
        new Tweet("3", "Hola", "rest", 50, new Date(),[new Reply('jhkjh','me',new Date())])
      ];

    
    getTweets(){
        return this.tweets.slice();
    }
}