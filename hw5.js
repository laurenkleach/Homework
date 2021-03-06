// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

// <dl>
//      <dt>Some word</dt>
//      <dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi



// Inject onto page using the W3C API

var definition, definitions, word, dl, definitionWord, definitionWordNode, definitionText, definitionTextNode, defintions;

definitionWord = 'Some word1: ';
definitionWordNode = document.createTextNode(definitionWord);

definitionText = ' Some definition.';
definitionTextNode = document.createTextNode(definitionText);

dl = document.createElement('dl');

// Create word
word = document.createElement('dt');

// Create definition
definition = document.createElement('dd');

// Attach text node to the word node
word.appendChild(definitionWordNode);
word.setAttribute('style', 'display:block; float:left; font-weight:bold;');

// Attach text node to the definition node
definition.appendChild(definitionTextNode);

dl.appendChild(word);
dl.appendChild(definition);

// Append definition node to the page
document.body.appendChild(dl);




// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".


// Find a parent container to insert into
definitions = document.getElementById('definitions');

// Change the inner HTML of the parent container node
definitions.innerHTML += '<dl><dt style="display:block; float:left; font-weight:bold;">Some word2:</dt><dd style="display:block;">Some definition2</dd><dl>';



// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.

// Locate the parent container by way of a CSS selector
$('#definitions')
	.append('<dl><dt style="display:block; float:left; font-weight:bold;">Some word3:</dt><dd style="display:block;">Some definition3</dd><dl>');