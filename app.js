// //Lesson 8 - Using Promises - Promise Chaining
// getWordOfTheDay ()
// .then (function(word) {
//     //I am success callback - don't forget to use return!!!
//     return tellFriend(word);
// }).then(function(response){
//     //success for tellFriend
//     console.log(response);
// }).catch (function(err) {
//     console.log(err);
// });


//Lessons 1 -7 only handled introduction and subscribing to NOTIFICATIONS of Promises

// //lesson 7 - using .catch() to only handle error
// let myPromise = getWordOfTheDay();
// myPromise.catch(function(err){
//     //I am the error callback
//     console.log(err);
// });

// //equivilent way of handling
// let myPromise = getWordOFTheDay();
// myPromise.then(null, function(err) {
//     //I am the callback error
//     console.log(err);
// })

// //lesson 6 - don't have to attach both success and failure error handlers, but order of parameter is critical!
// //handle only success
// let myPromise = getWordOfTheDay();
// myPromise.then(function(word) {
//     //I am the success callback
//     console.log(word);
// });

// //handle only failure
// let anotherPromise = getWordOfTheDay();
// anotherPromise.then(null,function(err){
//     //I am error handler
//     console.log(err);
// }) 

// //lesson 5 - same result as lesson 4
// let myPromise = getWordOfTheDay();
// myPromise.then(function(word) {
//     //I am success callback
//     console.log(word);
// }, function(err) {
//     //I am the error callback
//     console.log("something went wrong");

// });

// //lesson 4 - Promise using 'then'
// //then takes 2 parameters (1) a single-parameter call back function for success and 
// // (2) a single-parameter callback function for failure
// //Because functions return in place, we can put the .then immediately after the function call

// getWordOfTheDay ().then(function(word) {
//     //I am the success callback
//     console.log(word);
// }, function(err) {
//     //I am the error callback
//     console.log('something went wrong');
// })

// //lesson 3 - Callback pyramid of doom
// getWordOfTheDay(function(word) {
//     //I am the success callback
//     tellFriend(word, function(response) {
//         //success callback for tellFriend
//         console.log(response);
//     }, function(err) {
//         //error callback for tellFriend
//         console.log(err);
//     });
// }, function (err) {
//     //I am the error callback
//     console.log('something went wrong');
// });


//lesson 2
// let btn = document.createElement('button');
// btn.innerHTML = 'Click Me!';
// document.body.appendChild(btn);
// btn.addEventListener('click',function() {
//     //I am a callback function
//     console.log('clicked!')
// });

//lesson1
// console.log('Hello world!');
// setTimeout (() => {
//     //I am a callback function
//     console.log('Bonjour');
// },2000);

// console.log('What is up');