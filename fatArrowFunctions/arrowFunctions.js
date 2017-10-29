alert("arrow conected")
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
const calc1 = a => {
console.log(2 * a);
};
calc(4);

