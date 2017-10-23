/*
	lexacal scoping desccribes how variable names are resolved
	within nested funcitons.
	Innertfunctions have acess to variables declared in parent
	functions.
*/

function init(){
	var name = "Khairat";

	function innerFunc(){
			function inner(){
				function crazy(){
					console.log(name);
				}
			crazy();
		}
			inner();
	}
	return innerFunc;

}
let result = init();
result();

//Closures

/*
	
*/