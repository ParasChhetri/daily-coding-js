// Q.1 Solution
const currentDayTime = () => {
    let today = new Date();
    let day = today.getDay();
    console.log(day);
    let dayNames = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
    let currentDayName = dayNames[day];
    console.log(currentDayName);
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let timeFormat = (hour >= 12) ? "PM" : "AM";
    hour = (hour >= 12) ? hour - 12: hour;
    
    let today_day_time = `Today day is: ${currentDayName}\nCurrent time is: ${hour} : ${timeFormat} : ${minute} : ${second}`;
    return console.log(today_day_time);
}

currentDayTime();

// Q.2 Solution
const printCurrentPage = () => window.print();