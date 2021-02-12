const start = "start";
const end = "end";

interface User {
    fname: string;
    lname: string;
    id: number;
}

class UserAccount {
    fname: string;
    lname: string;
    id: number;

    constructor(fname: string, lname: string, id: number){
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
}


console.log(start);


let users = Array<UserAccount>();

let fullname = window.prompt("Please enter your first and last name:");

console.log(fullname);

while(fullname === "") {
    fullname = window.prompt("Please enter your first and last name:");
}

users.push(new UserAccount("first", "last", 0));

console.log(users[0].fname);


console.log(end);