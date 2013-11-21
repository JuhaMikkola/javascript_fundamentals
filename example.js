
// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

// var rappers = new Array("Kanye", "Pac", "Big");

// console.log("My favorite rapper is " + rappers[2])

// console.log("Not a big fan of " + rappers[1])

// console.log(rappers[0] + " was cool until he sold out")



// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// ANSWER
// function greaterNum(no1, no2) {

//   var answer;

//   if (no1 > no2) {
//     answer = no1 
//   } else {
//     answer = no2
//   };

//   return answer;

// };

// document.write(greaterNum(12,1))


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// function helloWorld(language) {

//   var phrase

//   if ( language == "es" ) {
//     var phrase = "Hola Mundo!"
//   }

//   else if ( language == "de" ) {
//     var phrase = "Hallo Welt!"
//   }

//   else {
//     var phrase = "Hello World!"
//   }

//   return phrase

// }

// document.write(helloWorld("es"))

// document.write(helloWorld("de"))

// document.write(helloWorld("bb"))


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function assignGrade(score) {

//   var letterGrade

//   if ( score >= 90 ) {
//       letterGrade = "A"
//   } else if ( score >= 80 ) {
//       letterGrade = "B"
//   }else if ( score >= 70 ) {
//       letterGrade = "C"
//   }else if ( score >= 60 ) {
//       letterGrade = "D"
//   } else {
//       letterGrade = "F"
//   }

//   return letterGrade;

// }

// document.write(assignGrade(70))


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// function pluralize(noun, number) {

//   var theStatement;

//   if ( noun = "sheep" ) {

//       theStatement = number + " " + noun + "!"

//   }

//   else {

//   if ( number > 1 ) {

//     theStatement = number + " " + noun + "s!"

//   }

//   else {

//     theStatement = number + " " + noun + "!"

//   }

//   }

//   return theStatement;

// };

// document.write(pluralize("cat", 5))

// document.write(pluralize("dog", 1))

// document.write(pluralize("sheep", 9))


// ITERATION
// var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
// for (var i = 0; i < rainbowColors.length; i++) {
//   console.log(rainbowColors[i]);
// }

// FOR LOOP
// var count;
// document.write("Starting Loop" + "<br />");
// for(count = 0; count < 10; count++){
//   document.write("Current Count : " + count );
//   document.write("<br />");
// }
// document.write("Loop stopped!");

// BREAK STATEMENT
// var x = 1;
// document.write("Entering the loop<br /> ");
// while (x < 20) {
//   if (x == 5){ 
//      break;  // breaks out of loop completely
//   }
//   x = x + 1;
//   document.write( x + "<br />");
// }
// document.write("Exiting the loop!<br /> ");


// The temperature function 

// var celsius;

// function celciusToFahrenheit(celsius) {

//   var fahrenheit = celsius * (9/5) + 32;
//   var fahrenheit2 = Math.round(fahrenheit);
//   var fahrenheit3 = celsius + " C is " + fahrenheit2 + " F.";
//   return fahrenheit3;

// }

// document.write(celciusToFahrenheit(27))


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// // Store a celsius temperature into a variable.
// var celsius = 27;
// // Convert it to fahrenheit and output "NN°C is NN°F".
// var fahrenheit = celsius * (9/5) + 32;

// document.write(celsius + " celsius is " + fahrenheit + " fahrenheit! ");

// // Now store a fahrenheit temperature into a variable.
// var fahrenheit = 84;
// // Convert it to celsius and output "NN°F is NN°C."
// var celsius = (fahrenheit - 32) * (5/9);

// document.write(fahrenheit + "fahrenheit is " + celsius + " celsius!");

// // The Geometrizer Function

// function calcCircumference(radius) {

//   var circ = 2 * radius * 3.142;
//   var circ2 = Math.round(circ);
//   var circumference = "The circumference is " + circ2 + ".    ";
//   return circumference;

// }  

// document.write(calcCircumference(12));

// function calcArea(radius) {

//   var ar = 3.142 * (radius * radius);
//   var ar2 = Math.round(ar);
//   var area = "The area is " + ar2 + ".";
//   return area;

// }

// document.write(calcArea(12));

// // The Geometrizer

// var radius = 12;

// var circumference = 2 * radius * 3.142;

// document.write("The circumference is " + circumference + ".");

// var area = 3.142 * (radius * radius);

// document.write(" The area is " + area + ".");

// The Lifetime Supply Function


// function calculateSupply(age, amountPerDay) {
//   var maxAge = 80;
//   var daysAlive = (maxAge - age) * 365;
//   var whatYouNeed = amountPerDay * daysAlive
//   var lifetimeSupply = "You will need " + whatYouNeed + " to last you until the ripe old age of " + maxAge + "! ";
//   return lifetimeSupply
// };

// document.write(calculateSupply(32, 50))
// document.write(calculateSupply(50, 50))
// document.write(calculateSupply(20, 100))


// The Lifetime Supply Calculator

// var currentAge = 32;
// var maxAge = 50;
// var snacksPerDay = 20;

// var daysAlive = (maxAge - currentAge) * 365;

// var lifetimeSupply = snacksPerDay * daysAlive;

// document.write("You will need " + lifetimeSupply + " snacks to last you until the ripe old age of " + maxAge + ".");

// The Age Calculator Function

// function calculateAge2(birthYear, currentYear) {

//     var age2 = currentYear - birthYear + -1;
//     return age2;

// };

// document.write("You are either " + calculateAge2("1983", "2013") + " or ");

// function calculateAge1(birthYear, currentYear) {

//     var age1 = currentYear - birthYear;
//     return age1;

// };

// document.write(calculateAge1("1983", "2013"));



// // The Age Calculator

// function age1(currentYear, birthYear) {

//   var age1;
//   var age1 = (currentYear - birthYear);
//   return age1;

// }

// (age1(2013, 1983));

// function age2(currentYear, birthYear) {

//   var age2;
//   var age2 = (currentYear - birthYear);
//   return age2;

// }

// (age2((2013+1), 1983));

// DOESN'T WORK
// document.write("You are either " + age1 + " or " + age2)

// The Fortune Teller Function

// function tellFortune(jobTitle, location, partner, numKids) {

//   var future = "You will be a " + jobTitle + " in " + location + " married to " + partner + " with " + numKids + " kids.";

//   return future;

// };

// document.write(tellFortune("Rapper", "Compton", "The Game", "12"));

// In Javascript you can pass functions as an argument
// You have named functions and anonymous functions
/*
var myFunction = function(greeting) {

  return greeting;

// must be explicit to return a value... also does break

};

var x = myFunction("hello!");
console.log(x);
*/

/* If Statement
for (var i = 0; i <= 20; i++) {

  var evenOrOdd;

  if (i % 2 === 0) {
    evenOrOdd = "even";
  } else {
    evenOrOdd = "odd";
  }
  document.write(i + "is " + evenOrOdd)
};
*/

/* Do and while loop
var num = 1;
  do {
    num++;
    console.log(num);
  } while (num < 10);
*/

/*var time = 11;

if (time < 10) {
  var x;
  x = "Good morning!";
} else if (time < 20) {
  x = "Good day!";
}
else {
  x = "Good evening!";
}
;

document.write("<h1>" + x + "</h1>")
*/

/* CASE
var day = new Date().getDay();
var x;
switch (day) {
  case 0:
    x = "Today is Sunday.";
    break;
  
  case 1:
    x = "Today is Monday.";
    break;

  case 2:
    x = "Today is Tuesday.";
    break;

  case 3:
    x = "Today is Wednesday.";
    break;

  case 4:
    x = "Today is Thursday.";
    break;

  case 5:
    x = "Today is Friday.";
    break;

  case 6:
    x = "Today is Saturday.";
    break;

}

document.write("<h1>"+ x +"</h1>");
*/