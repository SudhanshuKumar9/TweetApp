import { Subject } from "rxjs";
import { Reply } from "./reply.model";
import { Tweet } from "./tweet.model";

export class TweetService{

    tweetChanged = new Subject<Tweet>();
    allTweets = new Subject<Tweet[]>();

    private tweets: Tweet[] = [
        new Tweet("1", "Hello", "test", 1, new Date(), [new Reply('Hello Reply','me',new Date())]),
        new Tweet("2", "Hi I am", "jest", 20, new Date(),[new Reply('Hi i am reply','me',new Date())]),
        new Tweet("3", "Hola", "rest", 50, new Date(),[new Reply('Hola reply','me',new Date())])
      ];

    
    getAllTweets(){
        return this.tweets.slice();
    }

    getTweetById(id: string){
        let tweet: Tweet = new Tweet();
        this.tweets.slice().forEach((val) =>{
            if(val.tweetId == id){
                tweet = val;
            }
        });
        return tweet;
    }

    addReply(reply: Reply, tweetId: string){
        this.tweets.find(x => x.tweetId == tweetId)?.replies.push(reply);
        this.tweetChanged.next(this.tweets.slice().find(x => x.tweetId == tweetId));
    }

    postTweet(tweet: Tweet){
        this.tweets.push(tweet);
        this.allTweets.next(this.tweets.slice());
    }

    editTweet(tweetText: string, tweetId: string){
        this.tweets.forEach((value) => {
            if(value.tweetId == tweetId){
                value.tweetText = tweetText;
            }
        });

        this.allTweets.next(this.tweets.slice());
    }
}