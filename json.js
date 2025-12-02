let emp = {
    "fname":"john",
    "age":30,

};
console.log(emp);

let a = {"name":"nikhil"};

a.name = "hello";
a.age = {"age":30};
console.log(a);

// stringify method convert object to json 
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON);

// parse methods convert json to object 
'{"name":"John", "age":30, "city":"New York"}'
const obj1= JSON.parse('{"name":"John", "age":30, "city":"New York"}');

console.log(obj1);

const arr ='["apple" , "boy" , "cat" , "dog"]';
const tex = JSON.parse(arr);
console.log(tex);

const arr1 = ["apple" , "boy" , "cat" , "dog"];
// const tex1 = JSON.stringify(arr1);
const myJSON1 = JSON.stringify(arr1);
console.log(myJSON1);

const arr3 = ["John", "Peter", "Sally", "Jane"];
const myJSON3 = JSON.stringify(arr3);
console.log(myJSON3);

const myJSON5 = '{"name":"John", "age":30, "car":null}';
const myObj4 = JSON.parse(myJSON5);
console.log(myObj4);