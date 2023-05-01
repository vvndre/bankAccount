//Bank Account

class BankAccount {
  constructor(_accountNumber, _owner) {
    (this.accountNumber = _accountNumber), 
    (this.owner = _owner);
  }

transactions = [];

balance() //gets balance
{
  if(this.transactions.length == 0)
  {
    console.log("No History")
  }
  else if(this.transactions.length == 1)
  {
    this.transactions[0].amount
  }
  else
  {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
  }
}

deposit(amt)
{
  let currTransaction = new Transaction(amt, this.owner);
  this.transactions.push(currTransaction)
}

charge(payee, amt)
{
  let currTransaction = new Transaction(amt*-1, payee)
  this.transactions.push(currTransaction)
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

console.log(myFirstTransaction.amount);

myFirstBankAccount.deposit(10.50);
myFirstBankAccount.deposit(100.50)

// console.log(myFirstBankAccount.transactions)
myFirstBankAccount.balance();
