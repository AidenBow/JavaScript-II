// ==== Challenge 1: Write your own closure ====
let lunchBox = (name) => {
  console.log('this is ' + name + 's lunchbox');

  let friend = (friendName) => {
    console.log(name + ' will let ' + friendName + ' have some of his almonds');

    let dog = (dogName) => {
      console.log(name + ' and ' + friendName + ' know not feed ' + dogName + ' any chocolate')
    }
    dog('Sadie')
  }
  friend('Jake')
  }

lunchBox('Aiden')
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
