// Homework 4
// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.
// Object: Athlete
// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)
// Methods (i.e. functions): 
// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.
// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.
// Problem 1
// Create the object above by setting the properties one by one.
var introduction = 'idk';
var athlete1 = {};
athlete1.name = 'John';
athlete1.height = '6\'1\"';
athlete1.age = 19;
athlete1.countryOfOrigin = 'Brazil';
athlete1.medals = ['gold', 'silver'];
athlete1.isOlympian = true;
athlete1.introduce = function (name, countryOfOrigin) {
    return ('Hello my name is ' + name + ' and I am from ' + countryOfOrigin);
}
console.log(athlete1.introduce(athlete1.name, athlete1.countryOfOrigin));

athlete1.addMedal = function (medals) {
    medals.push('bronze');
    return medals;
};
console.log(athlete1.addMedal(athlete1.medals));


// athlete.foo = "bar"
// athlete.method = function () {

// }



// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).

var athlete1 = {};
athlete1['name'] = 'John';
athlete1['height'] = '6\'1\"';
athlete1['age'] = 19;
athlete1['countryOfOrigin'] = 'Brazil';
athlete1['medals'] = ['gold', 'silver'];
athlete1['isOlympian'] = true;
athlete1['introduce'] = function (name, countryOfOrigin) {
    return ('Hello my name is ' + name + ' and I am from ' + countryOfOrigin);
};
console.log(athlete1.introduce( athlete1.name, athlete1.countryOfOrigin ));

athlete1['addMedal'] = function (medals) {
    medals.push('bronze');
    return medals;
};
console.log(athlete1.addMedal( athlete1.medals ));

// athlete['foo'] = "bar"
// athlete['method'] = function () {

// }



// Problem 3
// Create the same object using ONE object literal

var athlete1 = {
    name: 'John',
    height: '6\'1\"',
    age: 19,
    countryOfOrigin: 'Brazil',
    medals: ['gold', 'silver'],
    isOlympian: true,
    introduce: function (name, countryOfOrigin) {
        return ('Hello my name is ' + name + ' and I am from ' + countryOfOrigin);
    },

    addMedal: function (medals) {
        medals.push('bronze');
        return medals;
    },

};
console.log(athlete1.introduce( athlete1.name, athlete1.countryOfOrigin ));
console.log(athlete1.addMedal( athlete1.medals ));



// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

function Athlete(name, height, age, countryOfOrigin, medals, isOlympian) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.countryOfOrigin = countryOfOrigin;
    this.medals = medals;
    this.isOlympian = isOlympian;
    this.introduce = function (name, countryOfOrigin) {
        return ('Hello my name is ' + name + ' and I am from ' + countryOfOrigin);
    };
    this.addMedal = function (medals) {
        medals.push('bronze');
        return medals;
    };

}
var athlete1;
athlete1 = new Athlete('John', '6\'1\"', 19, 'Brazil', ['gold', 'silver'], true)
console.log(athlete1.introduce( athlete1.name, athlete1.countryOfOrigin ));
console.log(athlete1.addMedal( athlete1.medals ));



// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();

function Athelete() {
    this.name = 'athlete';
    this.toString = function () {
        return this.name;
    }
}

function TableTennisPlayer(name, height, age, countryOfOrigin, medals, isOlympian, brand) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.countryOfOrigin = countryOfOrigin;
    this.medals = medals;
    this.isOlympian = isOlympian;
    this.brand = brand;
    this.swingPaddle = function () {
        return 'swoosh, ping, pong';
    }
}


// Athelete -> Tennis Player
TableTennisPlayer.prototype = new Athelete();
TableTennisPlayer.prototype.constructor = Athelete;

var s1 = new TableTennisPlayer("Vanessa", 1.7, 21, 'Vietnam', ['gold', 'silver', 'gold'], true, 'Paddle Palace');