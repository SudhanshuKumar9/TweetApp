export class Reply{
    public text: string;
    public userId: string;
    public dateAndTimeOfReply: Date;

    constructor(text: string, userId: string, datetime: Date){
        this.text=text;
        this.userId=userId;
        this.dateAndTimeOfReply = datetime;
    }
}