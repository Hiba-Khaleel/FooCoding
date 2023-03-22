////// strings ///////
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString)
console.log(myString.length)
console.log(myString.replaceAll(","," "))

///////  Array  /////////

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals.concat("turtle"))
favoriteAnimals = [...favoriteAnimals.slice(0, 1), "meerkat", ...favoriteAnimals.slice(1)];

console.log("________MORE JS____________")

//////  1 ////////
function sum(num1,num2,num3){
  return num1+num2+num3
}
sum(1,5,7)
///////     2   /////////

function coloredCar(color){
  return "A "+color+" Car"
  
}
coloredCar("red")
////////    3 ///////////

const person={name:'Hiba',age:24, city:"lund"}
function personInfo(obj){
  for(i in obj){
    console.log(i,obj[i])
  }
}
personInfo(person)

//////   4 /////////
function vehicleType(color, code) {
  if (code === 1) {
    console.log("a " + color + " car");
  } else if (code === 2) {
    console.log("a " + color + " motorbike");
  }
}
vehicleType("blue",2)


///////    5  //////////

let result=(3===3)? "yes":"No"; 
console.log(result)
////    6 //////////////
function vehicleType2(color, code,age) {
  if (code === 1) {
    console.log("a " + color + " car"+" that has "+age + " years");
  } else if (code === 2) {
    console.log("a " + color + " motorbike"+" that has "+age+ " years");
  }
}
vehicleType2("blue",2,5)
//////   7      ////////
const vehicles=["car","cycle","motorbike","motor"]

//////   8 //////////
console.log(vehicles[2])
/////   9 ////////
function veicles(color,age,num){
   const  vehicles= ["car", "cycle", "motorbike", "motor"];
  const type = vehicles[num];
   const ageStr = age > 0 ? 'new' : "old";
  console.log(`a ${color} ${ageStr} ${type}`);
}
veicles("green",0,1)

////  10 //////


///  11  /////
////////   12 13 14     ///////
const teachers={Tommy:"HTML-cSS",
                Cris:"agile",
                sahin:"Javascript"}


//////    15       ///////
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// 
console.log(x == y);  
console.log(y == z); 
console.log(x === y);
console.log(y === z); 

/////  16  //////////
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log("1 "+" 'o2' changes 'o3'because '03' depends on 'o2' value and it doesn't matter if 'o1 ' is changing or not")
console.log("2 "+" the order o3=o2; is matter because we take the o2 value and give it to o3 otherwise o2 can not take undefind value from o3")

/////   17 ////////

let bar = 42;
typeof typeof bar;
console.log("output will be string because the first typeof is 'number' and the word is a 'string'")
/////