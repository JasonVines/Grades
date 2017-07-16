"use strict";

console.log("grades.js");


// Student Grades

let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let lowToHigh = scores.sort(function(a, b) {
	return a - b;
});

console.log(lowToHigh);

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let f = 0;

for (var i = 0; i < scores.length; i++) {
	if (scores[i] > 90) {
		a = a + 1;
	}
	else if (scores[i] > 80) {
		b = b + 1;
	} 
	else if (scores[i] > 70) {
		c = c + 1;
	}
	else if (scores[i] > 60) {
		d = d + 1;
	}
	else f = f + 1;
}

console.log("How many of each grade? A =", + a + " B =", + b + " C =", + c + " D =", + d + " F =", + f);
console.log("What is the lowest grade? ", lowToHigh[0]);
console.log("What is the highest grade? ", lowToHigh[lowToHigh.length-1]);


// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A