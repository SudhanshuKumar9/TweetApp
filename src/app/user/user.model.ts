export class User{
    public id: string;
    public userId: string;
    public dateOfBirth: Date;
    public gender: string;

    constructor(id: string,userId: string, dateOfBirth: Date, gender: string){
        this.id = id;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.userId = userId;
    }
}