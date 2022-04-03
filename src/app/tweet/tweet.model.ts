import {Reply} from './reply.model';
export class Tweet{
    public tweetId: string;
    public tweetText: string;
    public userId: string;
    public likes: number;
    public dateAndTimeOfTweet: Date;
    public replies: Reply[]

    constructor(tweetId: string, tweetText: string, userId: string, likes: number, dateAndTimeOfTweet: Date, replies: Reply[]){
        this.userId=userId;
        this.tweetId=tweetId;
        this.tweetText=tweetText;
        this.dateAndTimeOfTweet = dateAndTimeOfTweet;
        this.likes = likes;
        this.replies = replies;
    };
}