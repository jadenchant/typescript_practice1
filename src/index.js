var start = "start";
var end = "end";
var UserAccount = /** @class */ (function () {
    function UserAccount(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    return UserAccount;
}());
console.log(start);
var users = Array();
var fullname = window.prompt("Please enter your first and last name:");
console.log(fullname);
while (fullname === "") {
    fullname = window.prompt("Please enter your first and last name:");
}
users.push(new UserAccount("first", "last", 0));
console.log(users[0].fname);
console.log(end);
