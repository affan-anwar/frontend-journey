class BankBalance {
    #balance; //private variable
    constructor(Balance) {
        this.#balance = Balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amt) {
        this.#balance += amt;
        console.log(`Deposited : ${amt}`)
    }
}

let b = new BankBalance(10000);
// console.log(b.#balance); //SyntaxError: Private field '#balance' must be declared in an enclosing class
b.deposit(5000);
console.log("avaliable balance is", b.getBalance()); //10000
//#Balance is private, so we cannot access it directly outside the class. We access it using the getBalance() method. This is encapsulation.


class DentalDoctor {
    #salary; // private variable

    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

let doctor = new DentalDoctor(50000);

console.log(doctor.getSalary()); // 50000


class FrontendDeveloper {
    #salary; // private variable

    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

let fresher = new FrontendDeveloper(50000);

console.log(fresher.getSalary()); // 50000