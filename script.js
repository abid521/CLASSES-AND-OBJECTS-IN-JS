// let employee = {
//   calcTax() {
//     console.log("the tax rate is 10%");
//   },
// };

// let karanArjun = {
//   salary: 50000,

//   calcTax() {
//     console.log("the tax rate is 20%");
//   },
// };

// karanArjun.__proto__ = employee;

// let loduLalit = {
//   salary: 50000,
// };

// loduLalit.__proto__ = employee;

// let sodaguar = {
//   salary: 50000,
// };

// sodaguar.__proto__ = employee;

//classes

// class ToyotaCar {
//   constructor(brand, mileage) {
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar("Toyota", 15);

// console.log(fortuner);

// class ToyotaCar {
//   constructor(brand, mileage, speed) {
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//     this.speed = speed;
//   }

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }

// class ToyotaCarChild extends ToyotaCar {
//   speed() {
//     console.log("100 kmph");
//   }
// }

// let newObj = new ToyotaCarChild("Tata", 20, 120);

// console.log(newObj);

// //parent class templete

// class person {
//   eat() {
//     console.log("eat");
//   }

//   sleep() {
//     console.log("sleep");
//   }
// }

// //child class templete

// class Engineer extends person {
//   work() {
//     console.log("solve problems,build something");
//   }
// }

// let shradhaObj = new Engineer();

// my templete

// class StudentTemplate {
//   constructor(std, rollNo, address) {
//     this.std = std;
//     this.rollNo = rollNo;
//     this.address = address;
//   }
//   stdInfo() {
//     console.log("your class is", this.std);
//   }

//   rollNoInfo() {
//     console.log("your rollNo is", this.rollNo);
//   }
//   addressInfo() {
//     console.log("your address is", this.address);
//   }
// }

// let student1 = new StudentTemplate("ist", 252123, "khore sherabad");

// console.log(student1.stdInfo());

// console.log(student1.rollNoInfo());

// console.log(student1.addressInfo());

//parent class templete

class Person {
  constructor() {
    console.log("enter parent constructor");
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
}

//child class templete

class Engineer extends Person {
  constructor(branch) {
    console.log("enter child constructor");

    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("exit child constructor");
  }
  work() {
    console.log("solve problems,build something");
  }
}

// let EngineerObj = new Engineer("CS engineer");

let abidObj = new Engineer("cs");





let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
try {
  console.log("a+b=", a + c);
} catch (err) {
  console.log(err);
}

console.log("a-b=", a - b);
console.log("a+b=", a + b);




let Data = "secret information";

class user {
  constructor(name, Email) {
    this.name = name;
    this.Email = Email;
  }

  viewData() {
    console.log(`date is ${Data}`);
  }
}

class Admin extends user {
  constructor(name, Email) {
    super(name, Email);
  }

  EditData() {
    Data = "some new value";
  }
}

let student1 = new user("abid", "abc@gmail.com");

// console.log(student1);

let teacher = new user("HOD", "bkl@gmail.com");

// console.log(teacher);

let Admin1 = new Admin("admin", "admin@gmail.com");


