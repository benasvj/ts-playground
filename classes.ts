class User{
    private name: string;
    private email: string;
    public age: number;


    constructor(name:string, email: string, age: number){ // runs when object with this class is initiated e.g. new User created
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: '+ this.name);
    }

    register(){
        console.log(this.name+' is now registered');
    }

    payInvoice(){
        console.log(this.name+' paid invoice')
    }
}

// let john = new User('John Doe', 'jdoe@gmail.com', 34);
// console.log(john.age);
// john.register();

class Member extends User{
    id: number;

    constructor(id:number, name:string, email: string, age: number){
        super(name,email,age);  //properties of the class its inheriting
        this.id = id;
    }

    payInvoice(){
        super.payInvoice()   //method which is being inherited
    }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();
