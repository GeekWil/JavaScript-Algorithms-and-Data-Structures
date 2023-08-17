<h1>Cash Register</h1>
</br>
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount </br>
Penny	$0.01 (PENNY)</br>
Nickel	$0.05 (NICKEL)</br>
Dime	$0.1 (DIME)</br>
Quarter	$0.25 (QUARTER)</br>
Dollar	$1 (ONE)</br>
Five Dollars	$5 (FIVE)</br>
Ten Dollars	$10 (TEN)</br>
Twenty Dollars	$20 (TWENTY)</br>
One-hundred Dollars	$100 (ONE HUNDRED)</br>
See below for an example of a cash-in-drawer array:</br>

[</br>
  ["PENNY", 1.01],</br>
  ["NICKEL", 2.05],</br>
  ["DIME", 3.1],</br>
  ["QUARTER", 4.25],</br>
  ["ONE", 90],</br>
  ["FIVE", 55],</br>
  ["TEN", 20],</br>
  ["TWENTY", 60],</br>
  ["ONE HUNDRED", 100]</br>
]</br>

```
hello
```

