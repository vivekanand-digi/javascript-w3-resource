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