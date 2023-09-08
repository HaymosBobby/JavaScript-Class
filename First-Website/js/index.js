// var x = 5;
// var y = 10;

// x > y ? console.log('x is greater than y') : console.log('y is greater than x')
// let hamSelector = document.querySelector(".hamburger-menu")
// hamSelector.addEventListener("click", () => {
//   document.querySelector(".mobile-nav-link").classList.toggle("active");
// });

// let fruits = ["Mango", "Apple", "Orange", "Guava", "Pawpaw"];

// // for (let i = 6; i <= 100; i++) {

// //   console.log(i + ". I love you.")
// //   console.log(i);
// // }
// console.log(fruits.length);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + "." + fruits[i]);
//   console.log(i);
// }
// fruits.map((val, ind, arr) => {
//   // console.log(arr.length)

//   // console.log(ind + ". " + val)
//   console.log(`${ind}. ${val}s`);
// });

// for (let fruit of fruits) {
//   console.log("This is a " + fruit);
// }

// console.log(fruits.pop());

// console.log(fruits);

// fruits.map((val, ind, arr) => {
//   // console.log(arr.length)

//   // console.log(ind + ". " + val)
//   console.log(`${ind}. ${val}`);
// });

// fruits.push("Water melon");

// console.log(fruits);
// for (let fruit of fruits) {
//   console.log("This is a " + fruit);
//   console.log(fruits.indexOf(fruit));
// }

// let movie = {
//   title: "Bahubaali",
//   yearOfRelease: 2018,
//   actorName: "Shan Ur Khan",
// };

let movies = [
  {
    title: "Bahubaali",
    yearOfRelease: 2018,
    actorName: "Shan Ur Khan",
  },
  {
    title: "JagunJagun",
    yearOfRelease: 2023,
    actorName: "Odunlade Adekola",
  },
  {
    title: "Itura",
    yearOfRelease: 2012,
    actorName: "Bimbo Ademoye",
  },
];

// for (movie = 0; movie < movies.length; movie++) {
//   console.log(movies[movie].title);
// }

// for (movie of movies) {
//   console.log(movie.title);
// }

movies.map((movie) => {
  // console.log(movie.title);
  document.querySelector(".btn").addEventListener("click", () => {
   let div =  document.createElement("div")
   let node = document.createTextNode(movie.title);
   div.appendChild(node)
    document.querySelector(".change").appendChild(div);
  });
  // document.querySelector(".change").innerHTML = movie.title;
});

// console.log(movies.title);

