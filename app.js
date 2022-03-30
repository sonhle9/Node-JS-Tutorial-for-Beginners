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
// var athletics = require('./athletics');
// athletics.relay();
// athletics.longjump();
//6 http module
// var http = require('http');
// http.createServer(function onRequest(request,response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"})
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);
// Chrome >> http://localhost:8888/ >> Hello World
//7 events
// var events = require('events');
// var eventEmitter = new events.eventEmitter();

// var ringbell = function(){
//   console.log("Ring ring ring")
//   // eventEmitter.emit('bellrings','Welcome');
// }

// eventEmitter.on('doorOpen',ringbell);
// eventEmitter.on("bellrings", function(message){
//   console.log(message);
// })
// eventEmitter.emit('doorOpen');
// eventEmitter.emit('bellrings','Welcome');
//8 fs module FileSystem đọc file
// var fs = require('fs'); 

// fs.readFile('input.txt', function(err, data){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Async data is " + data.toString());
//   }
// })


// var data = fs.readFileSync('input.txt');
// console.log("Sync data is " + data.toString());
// console.log("This is the end");
// 9 Streams
// var fs = require('fs');

// var readableStream = fs.createReadStream('input.txt')
// var data = '';
// readableStream.setEncoding('UTF8');
// readableStream.on('data',function(chunk){
//   data +=chunk;
// });
// readableStream.on('end',function(){
//   console.log(data);
// });

// var writeData = "Hello World";
// var writeableStream = fs.createWriteStream('output.txt');
// writeableStream.write(writeData,'UTF8');
// writeableStream.end();
// writeableStream.on('finish', function(){
//   console.log("Write completed")
// });
//10 Pipes
// var fs = require('fs');
// var readableStream = fs.createReadStream('in.txt');
// var writeableStream = fs.createWriteStream('out.txt');
// readableStream.pipe(writeableStream);
// 11 - Build your own application