//calculator.js
//written by Yakov Koshavenko

//calculates the roots of a function

function calculate(form){
	var a;
	var b;
	var c;
	var resultText;
	
	a=form.element["a"].valueAsNumber;
	b=form.element["b"].valueAsNumber;
	c=form.element["c"].valueAsNumber;
	
	resultPos = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	resultNeg = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	
	result = document.getElementById("result");
	result.innerHTML = resultPos+", "+resultNeg;
}