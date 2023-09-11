// 1) Write a JavaScript program to display the current day and time in the following format
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day]);

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);



//3) Write a JavaScript program to get the current date.
//Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var date = today.getDate();

var month = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (date < 10) {
    date = '0' + date;
}

if (month < 10) {
    month = '0' + month;
}
today = month + '-' + date + '-' + yyyy;
console.log(today);
today = month + '/' + date + '/' + yyyy;
console.log(today);
today = date + '-' + month + '-' + yyyy;
console.log(today);
today = date + '/' + month + '/' + yyyy;
console.log(today);


//4)Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

var s1 = 5;
var s2 = 6;
var s3 = 7;
var perimeter = (s1 + s2 + s3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - s1) * (perimeter - s2) * (perimeter - s3)));
console.log(area);

//5)Write a JavaScript program to determine whether a given year is a leap year

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

//6)Write a JavaScript program to get the website URL (loading page)

alert(document.URL);

//7)Write a JavaScript exercise to create a variable using a user-defined name.

var a = 'vivek';
var b = 4444;
this[a] = b;
console.log(this[a])

//8)Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are the same, then return triple their sum.

function sumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    }
    else {
        return (x + y);
    }
}
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));

//9)Write a JavaScript program to check two given integers
// whether one is positive and another one is negative.

function positive_negative(x, y) {
    if ((x < 0 && y > 0) || x > 0 && y < 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));

//10)Write a JavaScript program to remove a character at the specified position 
//in a given string and return the modified string.

function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Python", 0));  //ython
console.log(remove_character("Python", 3)); //Pyton
console.log(remove_character("Python", 5));  //Pytho

//11)The difference between Call, Apply and Bind can be explained with below examples,

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//12)What is the purpose of the array slice method

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

//13)What is the purpose of the let keyword

let counter = 30;
if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in if block won't exist here)

//14)What is the purpose of the delete operator

var user = { name: "John", age: 20 };
delete user.age;

console.log(user); // {name: "John"}

//15)What is typeof operator

typeof "John Abraham"; // Returns "string"
typeof (1 + 2); // Returns "number"
typeof [1, 2, 3] // Returns "object" because all arrays are also objects

//16)How do you access history in javascript

function goBack() {
    window.history.back();
}
function goForward() {
    window.history.forward();
}

//17)What is the purpose JSON stringify

var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"

//18)How do you parse JSON string

var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}

//19)The replace() method

var msg = "Hello vivek";
var n = msg.replace(/vivek/i, "sai"); // Hello sai

//20) program to count the number of vowels in a string

function countVowel(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

const string = prompt('Enter a string: ');
const result = countVowel(string);
console.log(result);

//21) Write a JavaScript program to capitalize the first letter of each word in a given string.

function letter(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

//22)Write a JavaScript program to reverse a given string.

function abc(str) {
    return str.split("").reverse().join("");
}

//23)Write a JavaScript program to convert letters of a given string alphabetically.

function alp(str) {
    return str.split("").sort().join("");
}

console.log(alp("Python")); //Phnoty

//24)Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sum(nums) {
    return nums[0] + nums[1] + nums[2];
}

console.log(sum([10, 10, 20]));   //40

//25)Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

function rotate(array) {
    return [array[2], array[1], array[0]];
}

console.log(rotate([1, 2, 3]));   //3,2,1

//26)Occurance of each words inside string

const countWordOccurance = (str) => {
    const words = str.split(" ");
    const wordCount = {}
    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    }
    console.log(wordCount);
}

//27)Count the occurances of a Character in a string

countLetterOccurance("aahheeiiiiddzzvvcceedd");
const countOccuranceOfChar = (str, key) => {
    return str.split(key).length - 1
}

//28)countOccuranceOfChar("vivekananda", "a")

const countOccuranceOfCharCustom = (str, key) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === key) {
            count++
        }
    }
    return count;
}

//29)check Anagram

const checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    if (sortedStr1 !== sortedStr2) {
        return false
    }

    return true;
}

checkAnagram("listen", "silent");

//30) Remove duplicates

const removeDuplicate = str => {
    let uniqeStr = "";

    for (let char of str) {
        if (!uniqeStr.includes(char)) {
            uniqeStr += char;
        }
    }
    return uniqeStr;
}

console.log(removeDuplicate("Vivekananda"))

//31)Reverse Words

const reverseWords = str => {
    let reversedSentence = "";
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            reversedSentence = currentWord + " " + reversedSentence;
            currentWord = ''
        } else {
            currentWord += str[i]
        }
    }
    reversedSentence = currentWord + " " + reversedSentence;

    return reversedSentence.trim()
}

console.log(reverseWords("Hello Good Morning"))

//32)Reverse Letters Inside Words

const reverseLettersInsideWords = str => {
    const words = str.split(' ');

    const reverseStr = word => {
        return word.split('').reverse().join("");
    }

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseStr(words[i]);
    }

    return words.join(" ")
}

console.log(reverseLettersInsideWords("Hello Good Morning "))

//33)Write a JavaScript program to convert letters of a given string alphabetically.

function alp(str) {
    return str.split("").sort().join("");
}

console.log(alp("Python")); //Phnoty

//34) program to find the factorial of a number

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

const num = 9;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

//35) program to display a text using setTimeout method

function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');

//36) Write a JavaScript function that accepts a string as a parameter 
//and finds the longest word within the string

function longest(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for (let x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(longest('Hello good morning'));

//37) Write a JavaScript function to get the function name

function abc() {
    console.log(arguments.callee.name);
}

abc();

//38) Write a JavaScript program to find the index of an array item in a for loop

const fruits = ['Apple', 'Banana', 'Graps', 'Mango'];
for (let [index, item] of fruits.entries()) {
    console.log(`${index}= ${item}`);
}

//39)filter method
{
    const arr = [5, 1, 3, 2, 6]

    function isOdd(x) {
        return x % 2;
    }
    const output = arr.filter(isOdd);
    console.log(output)

    function isEven(x) {
        return x % 2 === 0;
    }
    const output1 = arr.filter(isEven);
    console.log(output1)

    function isGreater(x) {
        return x > 4;
    }
    const output2 = arr.filter(isGreater);
    console.log(output2)

}
// 40) adding

const arr = [5, 1, 3, 2, 6];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr)); //17

// OR
const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output); //17

// 41)find max
const output1 = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(output1);

// 42)using map

const users = [
    { firstName: "vivek", lastName: "anand", age: 23 },
    { firstName: "ashis", lastName: "maity", age: 34 },
    { firstName: "ajeet", lastName: "jha", age: 45 },
    { firstName: "sai", lastName: "kumar", age: 57 },
];
const output4 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output4); //"vivek anand", "ashis maity", "ajeet jha", "saikumar"

const output5 = users.filter((x) => x.age < 45).map((x) => x.firstName);
console.log(output5) //"vivek", "ashis"

// 43)Write a JavaScript for loop that iterates from 0 to 15. For each iteration,
// it checks if the current number is odd or even

for (let x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}


// 44) Write a JavaScript function to get the number of days in a month.

let days = function (month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(days(1, 2023)); //31
console.log(days(11, 2023)); //30

// 45)Write a JavaScript function to get the month name from a particular date.

let month = function (date) {
    list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return list[date.getMonth()];
};
console.log(month(new Date("11/09/2023"))); //November

//46)

const person = [{ name: 'sai' }, { name: 'ashis' }, { name: 'vivek' }];
for (const user of person) {
    console.log(user.name); // sai ashis vivek
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

// OR
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// Same with forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

const companies = [
    { name: 'Company One', category: 'Finance', start: 2000, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 2013, end: 2023 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1999, end: 2010 },

];

// Get only retail companies
const retailCompanies = companies.filter(
    (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
);

console.log(longCompanies);

//spread operator
let number = [1, 2, 3, 4];
let newNumber = [...number, 5, 6, 7]
console.log(newNumber) // [1,2,3,4,5,6,7]

