let myDate = new Date();

console.log(myDate.toString()); //Mon Mar 24 2025 21:12:40 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); //24/3/2025
console.log(myDate.toJSON()); //2025-03-24T15:42:40.996Z
console.log(myDate.toDateString()); //Mon Mar 24 2025

let myCreatedDate = new Date(2024,0,23) // Mon Mar 24 2025
let myCreatedDate2 = new Date("2024-01-25") // 25/1/2024


console.log(myCreatedDate2.toLocaleDateString()); // 23/1/2024

let myTimeStamp =  Date.now()

console.log(myTimeStamp); //1742831514002
console.log(myCreatedDate.getTime()); //1705948200000

let customeDate = myCreatedDate.toLocaleString("default",{
    weekday:"long",
    day:"2-digit"
})

console.log(customeDate);





