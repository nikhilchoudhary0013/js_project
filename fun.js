// parameter function 

function para(a1,b1){
    return console.log(a1 + b1);
}
para(25,25);

// Function Expressions
let a = function(b , c){
    return console.log(b + c);
}
let a1 = a(25,25);

// Arrows function
let Mul = (g , h)=>{
    console.log(g * h);
}
Mul(2,2);



// Object

const stu ={
    s_name: "nikhil",
    l_name:"choudhary",
    age:20,

};
console.log(stu .s_name);