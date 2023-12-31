<h1>Roman Numeral Converter</h1>
</br>
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.


<h2>Solution 1</h2>

```
function convertToRoman(num) {
 var lookup = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
    },
    
    roman = '',i;
    
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;


}

convertToRoman(36);
```





<h2>Solution 2</h2>

```
function convertToRoman(num) {
  let result = '';

  while (num > 0) {
    switch (true) {
      case num >= 1000:
        result += 'M';
        num -= 1000;
        break;
      case num >= 900:
        result += 'CM';
        num -= 900;
        break;
      case num >= 500:
        result += 'D';
        num -= 500;
        break;
      case num >= 400:
        result += 'CD';
        num -= 400;
        break;
      case num >= 100:
        result += 'C';
        num -= 100;
        break;
      case num >= 90:
        result += 'XC';
        num -= 90;
        break;
      case num >= 50:
        result += 'L';
        num -= 50;
        break;
      case num >= 40:
        result += 'XL';
        num -= 40;
        break;
      case num >= 10:
        result += 'X';
        num -= 10;
        break;
      case num >= 9:
        result += 'IX';
        num -= 9;
        break;
      case num >= 5:
        result += 'V';
        num -= 5;
        break;
      case num >= 4:
        result += 'IV';
        num -= 4;
        break;
      case num >= 1:
        result += 'I';
        num -= 1;
        break;
    }
  }


  return result;
}


console.log(convertToRoman(36));    // Output: "XXXVI"
```
