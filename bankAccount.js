//Bank Account

class BankAccount {
  constructor(_accountNumber, _owner) {
    (this.accountNumber = _accountNumber), 
    (this.owner = _owner);
  }

transactions = [];

balance() {

  let sum = 0;

  if (this.transactions.length == 0) {
    console.log("No history")
  }
  
  else {
      for (let i = 0; i < this.transactions.length; i++) {
    sum += this.transactions[i].amount;
 }
 console.log(`Sum: ${sum}`)
 return sum;
 
}
}

deposit(amt) {
  let currTransaction = new Transaction(amt, this.owner)

  if (amt > 0) {
    this.transactions.push(currTransaction);
    console.log("Deposit made", amt);
  } 

  else {
    console.log("Unable to deposit negative amounts or no amount.")
  }
}

charge(payee, amt)
{
  let currTransaction = new Transaction(amt*-1, payee)
  
  if (amt <= this.balance()) {
    this.transactions.push(currTransaction);
    console.log("Transaction approved", amt)
  }

  else {
    console.log("Transaction declined", amt)
  }
}
};


class Transaction {
  constructor(_amount, _payee) {
    (this.amount = _amount), 
    (this.payee = _payee);

    const d = new Date();
    this.date = `${d.getMonth()} - ${d.getDate()} - ${d.getFullYear()}`;
  }
  date
}


let myFirstBankAccount = new BankAccount("account123", "James Johnson");

let myFirstTransaction = new Transaction(12.50, "Jil Joe");

// console.log(myFirstTransaction.amount);

myFirstBankAccount.deposit(100.50);
myFirstBankAccount.charge(10.50, "Jil Joe")

// console.log(myFirstBankAccount.transactions)
myFirstBankAccount.balance();
