/* 
	A closure is the combination of a function and the lexical environment
	within which that function was declared. This environment consists of 
	any local variables that were in-scope at the time the closure was 
	created.
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

for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
	console.log( i );
	}, i*1000 );
}
/* 
	In the code above, we get 6 printed 6 times,  which is contrary to 
	the output we expect. 
	First, let’s explain where 6 comes from. The terminating condition 
	of loop is when i is not <=5. The first time that’s the case is when
	i is 6. So, the output is reflecting the final value of the i after 
	the loop terminates. And as we have already seen, all the functions 
	share the same global scope which has only one "i" in it.
*/

for (var i=1; i<=5; i++) {
	(function(){
	setTimeout( function timer(){
	console.log( i );
	}, i*1000 );
	})();
}
/*
	the code above still doesn't give us the expected outcome because even 
	though IIFEs create their own scope, the scope created by the IIFE is
	and does nothing.
	so to actually solve the problem, we need a scope with its own copy of
	"i" each funciton will make reference to at the end of the loop.
 */

for (var i=1; i<=5; i++){
	(function(){
	var j = i;
	setTimeout( function timer(){
	console.log( j );
	}, j*1000 );
	})();
}