let a = 100;
let b =200;

if(a>b){
    console.log("A is grater then B");

}
else{
    console.log("B is grater then A");
}

let a1 = 10;
var a2 = 20;
const a3 = 30;

if(a1>a2){
    console.log("a1 is grater then a2");
}
else if(a2>a3){
    console.log("a2 is grater then a3");
}
else{
    console.log("a3 is grater then a1 ,a2");
}


// switch
let x = prompt( "enter number");
switch(x){
    case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day)