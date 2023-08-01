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
