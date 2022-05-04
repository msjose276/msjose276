
var listOfBankAccounts = [];

let ba1 = new BankAccount("checking","2000");
let ba2 = new BankAccount("saving","1000");
listOfBankAccounts.push(ba1);
listOfBankAccounts.push(ba2);


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
        newText = newText + "Account Name: " +bankAccount.accountName+ " Balance: "+ bankAccount.deposit+"\n";
    }
    return newText;
}

function credit(){

}
function debit(){

}





class BankAccount {
    //#accountName;
    //#deposit;
    constructor(accountName, deposit) {
      this.accountName = accountName;
      this.deposit = deposit;
    }
    
}