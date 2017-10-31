
//Traditional method
function fn(){
	console.log("Hello");
}
fn();

//new es6 syntax
const fn1 = () => {
	console.log("Hello again!!")
}
fn1();
//we can even shorten it if we only have one line of code
const fn2 = () => console.log("Hello yet again!!")
fn2();

const calc = (a) => {
console.log(2 * a);
};
calc(4);

/*if you have only one argument in the parenthesis, you could leave out the
parenthesis. Note that this is the only situation where you can do this. 
*/
const calc1 = a => console.log(2 * a);
calc(4);

//Arrow function and the "this" keyword
function dis(){
	console.log(this); //"this" refers to the element calling the function
};

const dis1 = () => console.log(this); //refers to the global windows object

var button = document.querySelector("button");
button.addEventListener("click", dis)

/* 
	with the traditional function, the "this" keyword would usually refers to
	the element calling the function(i.e button). But with arrow functions, 
	the " this" keyword always refers to the global object. So we can conclude 
	by saying that the arrow function does not does not create its own "this" 
	keyword.	
*/