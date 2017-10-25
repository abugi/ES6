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