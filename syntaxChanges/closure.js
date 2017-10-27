/* 
	Closures happen as a result of writing code that relies on 
	lexical scope.
	Closure is when a function is able to remember and access its 
	lexical scope even when that function is executing outside its 
	lexical scope.
*/

function foo(){
	var a = 2;
	function bar(){
		console.log(a);
	}
	bar();
}
foo();

//this does not exactly explain closure.
/* 
	From a purely academic perspective, what is said of the above 
	snippet is that the function bar() has a closure over the scope 
	of foo() (and indeed, even over the rest of the scopes it has 
	access to, such as the global scope in our case). Put slightly 
	differently, it’s said that bar() closes over the scope of foo(). 
	Why? Because bar() appears nested inside of foo(). Plain and simple.
*/
//lets look at a more obvious demonstration of closure
function foo() {
var a = 2;
function bar() {
console.log( a );
}
return bar;
}
var baz = foo();
baz(); // 2 -- Whoa, closure was just observed, man.


function wait(message) {
setTimeout( function timer(){
console.log( message );
}, 1000 );
}
wait( "Hello, closure!"); 

//loops and closure
/* 
	
*/
for (var i=1; i<=5; i++) {
setTimeout( function timer(){
console.log( i );
}, i*1000 );
}

for (var i=1; i<=5; i++) {
(function(){
setTimeout( function timer(){
console.log( i );
}, i*1000 );
})();
}

for (var i=1; i<=5; i++) {
(function(){
var j = i;
setTimeout( function timer(){
console.log( j );
}, j*1000 );
})();
}