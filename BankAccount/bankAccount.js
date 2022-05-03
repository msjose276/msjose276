
var listOfBankAccounts = [];

function createAccount(){
    var accountName = document.getElementById("accountName").value;
    var deposit = document.getElementById("deposit").value;

    let newBankAccount = new BankAccount(accountName,deposit);

    listOfBankAccounts.push(newBankAccount);

    document.getElementById("listOfAccounts").value = toString();//newBankAccount;
}

function toString(){
    var newText = "";
    for (const bankAccount of listOfBankAccounts) {
        newText = newText + "Account Name: " +bankAccount.accountName+ " Balance: "+ bankAccount.deposit
         +"\n";
    }
    return newText;
}


class BankAccount {
    //#accountName;
    //#deposit;
    constructor(accountName, deposit) {
      this.accountName = accountName;
      this.deposit = deposit;
    }
    
}