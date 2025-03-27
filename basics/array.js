let roles = ["admin","staff","manager"]
let users = ["manish","dev","yaman"]

console.log(roles.includes("admin"));


let myn1 = [0,1,2,3,4,5]

let myn2 = myn1.slice(1,3)

console.log("myn2" , myn2);
console.log("B" , myn1);

let myn3 = myn1.splice(1,3)
console.log("myn3" , myn3);
console.log("C" , myn1);


let newArray = roles.concat(users)

console.log("Role " , newArray );

let a = [1,2,3,[4,5],6,7,[8,[9,0]]]

const newA = a.flat(Infinity)

console.log(newA);

