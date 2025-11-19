// Event application
 const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function getEventDay(today, daysTillEvent) {
        

    return dayName[(today+daysTillEvent)%7];
}
console.log(getEventDay(0, 1));