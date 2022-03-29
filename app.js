// 2 Hàm ẩn danh
// var printstuff = function(stuff){
//   console.log(stuff);
// }

// function printstuff(stuff){
//   console.log(stuff);
// }
// printstuff("Hello Word");

// function mainfunction(anotherfunction,value){
//   anotherfunction(value);
// }
// mainfunction(printstuff,"Hello");
// mainfunction(function(stuff){console.log(stuff);},"Joatmon");
// 3 Global object and timer debounce
// console.log(__filename);
// console.log(__dirname);

// function printstuff(stuff){
//   console.log("This was from setTimeout");
// }
// setTimeout(printstuff,5000)

// function printstuff(stuff){
//   console.log("This was from setInterval");
// }
// setInterval(printstuff,2000)
// 4  hàm gọi lại
// console.log("User 1 made a request");
// console.log("Database operation takes 5 seconds");
// console.log("Data delivered to the user");
// setTimeout(callback,5000);

// console.log("User 2 made a request");
// console.log("Database operation takes 5 seconds");
// console.log("Data delivered to the user");
// setTimeout(callback,5000);

// console.log("User 3 made a request");
// console.log("Database operation takes 5 seconds");
// console.log("Data delivered to the user");
// setTimeout(callback,5000);

// function callback(stuff){
//   console.log("Queried the database and delivered data in 5 seconds");
// }
//5 modules
var athletics = require('./athletics');
athletics.relay();
athletics.longjump();