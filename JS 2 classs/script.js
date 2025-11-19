//Exercise 1
/*
0-2 = free ride;
3-18 =15%;
19-26=10%;
older than 60=70%;


let age = 27;


if (age <= 2 ) {
console.log("The journey  is free.");
} else if (age  >= 3 && age <= 18) {
            console.log ("The passenger gets 15% discount.");
} else if (age  >= 19 && age <= 26) {
            console.log ("The passenger gets 10 % discount."); 
}  else if (age > 60) {

     console.log ("The passenger gets 70% discount.");
}    
else {
            console.log ("No discounts for you.")};

*/
// Exercise 2



/*let result ;

if (a + b < 4) {
    result =  "Below";
} else {
    result = "Over";
}

let a = 1;
let b = 2;

let result
result = ((a + b < 4)) ? "Below" : "Over";
console.log(result)




/*const students = ["Anna", "baba", "caca"]
for(let i =students.length -1); i >= 0; i--
{
    console.log (students[i])
}
    */
/*

for(let student of students) {
    if (student !== "Anna"){
        sendEmail(student)
        console.log (student)
            }
}



for(let student of students) {
    if (student === "Anna"){
        continue
        sendEmail(student)
        console.log (student)
            }
}


for(let student of students) {
    
        console.log ('something')
    if (student === "Anna"){
        continue
        }
        sendEmail(student)
         console.log (student)
            
}



for(.jslet student of students) {
    
        console.log ('something')
    if (student === "Anna"){
        break
        }
        sendEmail(student)
        console.log (student)
            
}
       

//Exercise 3
let i = 10;

for (let i = 10; i >= 0; i--) {
 if (i === 10 ) {
console.log("OMG it started!");
 }
else if (i === 0 ) {
console.log("Happy New Year!");
 }
 else {
 console.log (i);
 }
}

//Exercise 3
let i = 0;

for (let i = 0; i <= 10; i++) {
 if  (i === 0 ) {
console.log("Happy New Year!");
 }
else if (i === 10 ) {
console.log("OMG it started!");
 }
  else {
 console.log (i);
 }
}


//Function

 function sendEmail(student){
    console.log(`Sending email to ${student}`)
     }

     sendEmail("Foo")

let mailingService = "google";
      function sendEmail(student){
        mailingService = "outlook";
        console.log(`Sending email to ${student} via ${mailingService}`)
     }
     sendEmail("Foo")

     sendEmail("mailingService")
 */
     //Exercise 4
    
     function minNumberReturn (a,b){
        if  (a < b){
return a;
        } else return b;   
    }
     console.log(minNumberReturn(2,5))
