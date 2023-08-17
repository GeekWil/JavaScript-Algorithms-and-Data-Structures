<h1>Telephone Number Validator</h1>
</br>


Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):</br>

555-555-5555</br>
(555)555-5555</br>
(555) 555-5555</br>
555 555 5555</br>
5555555555</br>
1 555 555 5555</br>
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


```
function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return regex.test(str);
  
}

telephoneCheck("555-555-5555");
```


1. ^ - to start
2. (1\s)? - the first number could be one "1" use for country code follow by an space("?" indicate the previous character is optional)
3. (\(\d{3}\)|\d{3}) - means 3 digits in the bracket **OR** 3 digits wihout the bracket
4. ([\s\-]?) - can be an "optional" space or dash
5. \d{3} - 3 digits
6. ([\s\-]?) - "optional" space or dash
7. \d{4} - 4 digits
8. $ - the end 
