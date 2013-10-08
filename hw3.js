/*
 * Please follow the instructions carefully.
 *
 * When a problem says "send 'foo' to the console that means you would write
 *
 * 	console.log('foo');
 *
 * I may also say "send the variable x to the console" in which case you'd write
 *
 * 	console.log(x)
 *
 * Note: If you have multiple variables x, y, z you can send all of them to the console like so
 *
 * 	console.log(x, y, z)
 */


// Problem 1
	// Send the following calculations to the console.
	// 5 plus 5
	// 5 minus 5
	// 5 times 5
	// 5 divided by 5

console.log( 5 + 5 );
console.log( 5 - 5 );
console.log( 5 * 5 );
console.log( 5 / 5 );

// Problem 2
	// Cookie Thief problem
	//
	// Write a series of conditions that send one of the following responses to the console.
	//
	// If “Dad” then “He’s going to be in trouble!”
	// If “Mom” then “No big deal.”
	// If “Me” then “No more cookies for you.”
	// If none of the above, “Johnny did it.”
	//
	// Start by defining a variable cookieThief and assigning it one of the values above.
	//
	// var cookieThief = 'something';
	//
	// You can accomplish this with a series of if, if else, if else if, or a function that has return statements. Choose whichever you think works best.
	//
	// You can review Rebecca Murphey's post on how to avoid using "else if" by going here: http://rmurphey.com/blog/2012/12/10/js-conditionals/

//JG: The indentation of the curly brackets was off so I ran your code through http://jsbeautifier.org/
// Aside from that the logic looks solid.

var cookieThief;

cookieThief = 'Dad';

if (cookieThief === 'Dad') {
    console.log("He’s going to be in trouble!");
} else if (cookieThief === 'Mom') {
    console.log("No big deal.");
} else if (cookieThief === 'Me') {
    console.log("No more cookies for you.");
} else {
    console.log("Johnny did it.");
}

// Problem 3
	// Boolean conditions
	//
	// Look at the three Boolean conditions in the sentence below.
	//
	// “If the day is Thursday, the time is ‘6:30 PM’ and the room is ‘HU 317’ then you are in CA276. Otherwise, you are in another class.”
	//
	// Express this sentence as an “if” statement with the proper comparison (=== or !==) and Boolean (&& or ||) operators. You will send one of the following sentences to the console.
	//
	// "You are in CA276"
	// "You are in another class"
	//
	// Examples of Boolean conditions can be found here on Ex. 2.1: http://eloquentjavascript.net/chapter2.html

//JG: It wouldn't hurt to give this default values. They are undefined as is.

var day;
var time;
var room;

//JG: Also auto-indented this using jsbeautifier.org and removed superfluous parentheses.

if (day === 'Thursday' && time === '6:30' && room === 'HU317') {
    console.log("You are in CA276");
} else {
    console.log("You are in another class");
}

// Problem 4
	// Bart Simpson detention problem
	//
	// Create a variable bartSimpson and set it equal to the empty string.
	//
	// var bartSimpson = '';
	//
	// Write a while loop that repeatedly concatenates the string below to the variable bartSimpson:
	//
	// 'I will not make fun of the teacher using JavaScript code.'
	//
	// Your loop will do this 10 times. Send only the final version of the string to the console. Do not output the string during each loop iteration.
	//
	// Your final result will be the equivalent of saying
	//
	// console.log('I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code. I will not make fun of the teacher using JavaScript code.');
	//
	// only you'll be writing
	//
	// console.log(bartSimpson);

var bartSimpson = '';
var i = 0; //JG: Put spaces around operators, and be consistent with where you set your defaults.

while (i < 10) {
	i++;
	bartSimpson += 'I will not make fun of the teacher using JavaScript code.';
};

console.log(bartSimpson);

// Problem 5
	// Do the same as you did in question 4 but write it as a for loop.

//JG: No need to declare variables a 2nd time since you declare them above.

bartSimpson = '';

for (i = 0; i < 10; i++) {
	bartSimpson += 'I will not make fun of the teacher using JavaScript code.';
};

console.log(bartSimpson);
