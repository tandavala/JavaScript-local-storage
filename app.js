// store data in local storage
localStorage.setItem("name", "Jose");
localStorage.setItem("age", "30");

// get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(`${name} ${age}`);

// updating data
localStorage.setItem("name", "Uriel");
localStorage.age = 7;
name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name);
console.log(age);
