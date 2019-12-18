/*const myList = document.querySelector("ul");

// store data in local storage
localStorage.setItem("name", "Jose");
localStorage.setItem("age", "27");

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

// Delete item from localstorage

//localStorage.removeItem("name");
//localStorage.clear();

name = localStorage.getItem("name");
age = localStorage.getItem("age");
let html = `
   <li>Name:${name}, Age: ${age}</li> 
`;
myList.innerHTML += html;
*/

const todos = [
  { text: "play mariokart", author: "shaum" },
  { text: "study javascript", author: "Caelum" },
  { text: "learning react js", author: "Humberto" }
];

//console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
