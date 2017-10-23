// var, let & const keywords
// var name = 'lucy';

// if(name){
// 	var name = 'Adah';
// 	console.log(name);
// }
// document.write(name);

//block scoping with let and const keywords
//variable scoping apllies only to javascript functions (thus the name function scoping).

// let name1 = 'lucy';

// if(name1){
// 	let name1 = 'Adah';
// 	console.log(name1);
// }
// document.write(name1);

/*Hoisting: with variables 
 note: in variables, hoisting applies only to 
 decaltions and not assignments.
*/
console.log(myBaby);
myBaby = "Peekay";
var myBaby;

//Hoisting: with functions
showState();
function showState(){
 console.log('my state is Niger');
}

// showName();
// var showName = function(){
//  console.log('My name is Abugi');
 /*Note: this code doesnt run because only declaration is hoisted 
	and assignment is left in place.
 */
// }

/* 
	In es6 however, we have to declare a variable before it is used.
	In other words, it does not support Hoisting.
*/