let Data="Secereate information";

class user{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        console.log("data =",Data);
    }
}
class Admin extends user{
    constructor(name,email)
    {
        super(name,email);
    }
    editData()
    {
        Data="some new value";
    }
}
let student1=new user("sanjana","ssk@gmail.com");
let student2=new user("sanjana2","ddhhdh@gmail.com");

let admain1=new Admin("ssk","gghgg@gmail.com");