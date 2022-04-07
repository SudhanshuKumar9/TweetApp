import { User } from "./user.model";

export class UserService{
    private users :User[] = [
        new User("1", "sud@test.com", new Date('2022-03-20'),"male"),
        new User("1", "sud@test.com", new Date('2022-03-20'),"male"),
        new User("1", "sud@test.com", new Date('2022-03-20'),"male"),
        new User("1", "sud@test.com", new Date('2022-03-20'),"male"),
    ];

    getUsers(){
        return this.users.slice();
    }

}