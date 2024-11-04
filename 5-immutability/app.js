// add
// remove
// update
// delete

const fruits = ["apple", "banana", "cherry", "date", "grape"];
// const restPerementer = (number,...obj) => {
//     console.log(number);
//     console.log(...obj);
// }

// restPerementer(1,2,6,3,4,)

// add
// const arr = [...fruits,"kiwi"]

// console.log(arr);

// remove
// const arr = fruits.filter((el)=> el !== "cherry")
// console.log(arr);

// update
// const arr = fruits.map((el) => el == "cherry");
// console.log(arr);

// console.log(fruits);

// OBJECT

// const macBook = {
//     brand: "Apple",
//     model: "MacBook Pro",
//     year: 2021,
//     price:3456,
//   };

// macBook.color ="gray",
// macBook.price=1234;

// add
// const obj = {...macBook,color:"gray"}

// remove
// const {year,price,...obj} = macBook

// console.log(macBook);

// update
// const obj = {...macBook,year:2024,}
// console.log(obj);

// console.log(macBook);

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    stock: 10,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    stock: 25,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Headphones",
    price: 199.99,
    stock: 50,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249.99,
    stock: 30,
    rating: 4.6,
  },
];

// Add
// const newProduct = [  {
//   id: 5,
//   name: "Tablet",
//   price: 399.99,
//   stock: 15,
//   rating: 4.4
// }]

// const  arr = [...products,newProduct]

// Remove
// const arr = products.filter((el) => el.id !== 2);

// Update

// const arr = products.map((el) => {
//   if (el.id === 3) {
//     return { ...el, stock: el.stock + 50 };
//   }
//   return el
// });

const arr = products.map((el) => {
  return {
    ...el,
    price: el.price + 100,
  };
});
console.table(arr);

console.table(products);
